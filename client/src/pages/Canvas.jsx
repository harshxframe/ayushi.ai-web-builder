import React, { useEffect, useState, useRef } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import "../pages/styles.css";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiServer } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { MdRefresh } from "react-icons/md";
import { MdOpenInNew } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import { AiOutlineDesktop } from "react-icons/ai";
import { CgArrowsExpandRight } from "react-icons/cg";
import { FiMinimize2 } from "react-icons/fi";
import { IoMicOutline } from "react-icons/io5";
import { PiMagicWand } from "react-icons/pi";
import { LuSend } from "react-icons/lu";
import ReactMarkdown from "react-markdown";
import LLMResponseViewer from "../Utils/LLMResponseViewer";
import { enhancePrompt, magicPrompt } from "../apiClient/enhancePrompt.js";
import Markdown from "react-markdown";
import useSpeechToText from "../Utils/useSpeechToText.jsx";
import TypingEffect from "../Utils/TypingEffect.jsx";
import ChatHistory from "../component/ChatHistory.jsx";
import CodePreview from "../component/CodePreview.jsx";
import IframePreview from "../component/IframePreview.jsx";
import { codeString } from "../Utils/webcodeProvider.js";
import EditableCode from "../component/EditableComponent.jsx";
import { calString } from "../Utils/webcodeProvider.js";
import { snakeGame } from "../Utils/webcodeProvider.js";
import { landingPage } from "../Utils/webcodeProvider.js";
import { dev } from "../Utils/webcodeProvider.js";
import { TbCodeOff } from "react-icons/tb";
import { TbCode } from "react-icons/tb";
import MessageDialog from "../component/MessageDailog.jsx";
import { generateWebsite } from "../apiClient/genrateWebsite.js";
import { decodeResponse } from "../Utils/decodeResponse.js";
import { downloadHtmlAsZip } from "../Utils/downloadZip.js";
import { TbFaceIdError } from "react-icons/tb";
import { hostWebsiteCS } from "../apiClient/publishRequest.js";
import { FaWifi } from "react-icons/fa";



const Canvas = () => {
    const [device, setDevice] = useState(false);
    const [expand, setExpand] = useState(false);
    const [preview, setPreview] = useState(false);
    const [textd, setText] = useState("");
    const [show, setShow] = useState(false);
    const [result, setResult] = useState("");
    const [isEnhancing, setEnhancing] = useState(false); //For enchaning feature
    const [triggerEnhance, setTriggerEnhance] = useState(false);
    const { transcript, listening, toggleListening } = useSpeechToText();
    const [inputValue, setInputValue] = useState("");
    const [prompt, setPrompt] = useState("");
    const chatContainerRef = useRef(null);
    const [finalCode, setFinalCode] = useState("");
    const [isCodeEditable, setCodeEditable] = useState(false);
    const [messages, setMessages] = useState([
        { prompt: "Hi, how are you?", response: "I'm great, thanks!" },
    ]);
    const [isWebsiteGenerating, setWebsiteGeneratingStatus] = useState(false);
    const [codeBackUp, setCodeBackUp] = useState("");
    const [open, setOpen] = useState(false);
    const [globalErrorMessage, setGlobalErrorMessage] = useState("Some went wrong!");
    const [isPublishing, setPublising] = useState(false);
    const [isPublishDone, setPublishDone] = useState(false);
    const [liveUrl, setLiveUrl] = useState("");



    useEffect(() => {
        setFinalCode(snakeGame);
        setCodeBackUp(snakeGame);
    }, []);
    useEffect(() => {
        if (result) {
            setMessages((prevMessages) => {
                const updated = [...prevMessages];
                updated[updated.length - 1].response = result; // set last response
                genAIRequest(prompt.toString());
                setResult("");
                return updated;
            });
        }
    }, [result]);
    useEffect(() => {
        if (triggerEnhance) {
            handleEnhance();
            setTriggerEnhance(false); // reset
        }
    }, [triggerEnhance]);
    useEffect(() => {
        if (transcript) {
            setInputValue(transcript);
        }

    }, [transcript]);



    const getText = () => {
        if (inputValue != "") {
            setShow(true);
            setText(inputValue);   // save text
            setPrompt("");
            setPrompt(inputValue);
            setInputValue(""); // clear textarea
            setTriggerEnhance(true); // trigger useEffect
        } else {
            setGlobalErrorMessage("Please provide prompt to procced for processing!");
            setOpen(true);
        }

    };
    const handleEnhance = async () => {
        // console.log("Called");
        setMessages((prev) => [
            ...prev,
            { prompt: prompt, response: "" }, // empty response for now
        ]);
        const data = await enhancePrompt(textd);
        // console.log(data.prompt);
        if (data.success) {
            setResult(data.prompt);
            setShow(false);
        } else if (!data.success) {
            setResult("");
            setShow(false);
            setGlobalErrorMessage("Server not responding for your request, Try again letter?");
            setOpen(true);
        }
    };
    const magicEnchance = async () => {
        setEnhancing(!isEnhancing);
        console.log("Called");
        if (inputValue != "") {
            const data = await magicPrompt(inputValue);

            if (data.success) {
                console.log("Running?");
                setInputValue("");
                setInputValue(data.prompt);
                setEnhancing(false);

            } else if (!data.success) {
                setInputValue("Failed...!");
                setEnhancing(false);
                setGlobalErrorMessage("Server side error 505. Can't enchance right now!!");
                setOpen(true);
            }
        } else {
            setGlobalErrorMessage("Please provide prompt to procced for processing!");
            setOpen(true);
            setEnhancing(false);




        }


    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            getText();
        }
    };
    const genAIRequest = async (pr) => {
        // console.log("Called for genAI");
        setPreview(false);
        if (pr != "") {
            setWebsiteGeneratingStatus(true);
            const data = await generateWebsite(pr);
            if (data.success) {
                // console.log("Running?");
                //  console.log("Test responsed:" + data.source + "Harsh it is for you..");
                decodeResponse(data.source)
                    .then(html => {
                     //console.log("Extracted HTML:\n", html);
                        setFinalCode(html);
                        setCodeBackUp(html);
                        setWebsiteGeneratingStatus(false);

                    })
                    .catch(err => {
                        setWebsiteGeneratingStatus(false);
                        console.error("Error:", err);
                        setGlobalErrorMessage("Error found while parshing the Web element, Sorry for the error!");
                        setOpen(true);
                    });


            } else if (!data.success) {
                setWebsiteGeneratingStatus(false);
                setGlobalErrorMessage("Request failed, Server side error 505, Try again later!");
                setOpen(true);

            }
        } else {
            setWebsiteGeneratingStatus(false);
            setGlobalErrorMessage("Prompt not found, Try again and reload page again!");
            setOpen(true);

        }
    }
    const downloadFile = async () => {
        try {
            const result = await downloadHtmlAsZip(finalCode.toString());
            console.log("Download success:", result); // true
        } catch (err) {
            console.error("Download failed!"); // false
            setGlobalErrorMessage("Download failed!");
            setOpen(true);

        }
    }
    const showDailogOnMenuPress = () => {
        setGlobalErrorMessage("Future scoped...!")
        setOpen(true)
    }
    const showDailogOnHelp = () => {
        setGlobalErrorMessage("Drop your question demo@ayushi.ai, Thanks for your feedback");
        setOpen(true);
    }
    const publishWebsiteCS = async () => {
        setPublishDone(true);
        setPublising(true);
        setGlobalErrorMessage("Website under publising.. Wait a minute");
        const data = await hostWebsiteCS(finalCode);
        if (data.success) {
            setLiveUrl(data.source);
            setPublishDone(false);
            setGlobalErrorMessage("Wesbite live now..! Copy URL, Otherwise you will lost forever.")
        } else if (!data.success) {
            setGlobalErrorMessage("Request failed to publish your site! Sorry for server error!");
            setPublishDone(false);

        }

    }

    return (
        <>
            {/* NavBar  */}
            <div className="flex justify-between px-[10px] pt-[15px] h-[60px] pb-[10px]">
                <div className="flex items-center">
                    <div className="navicon-border cursor-pointer" onClick={() => showDailogOnMenuPress()}>
                        <HiOutlineMenu className="text-[24px]" />
                    </div>
                    <div className="flex flex-row items-baseline-last text-[13px] gap-[10px]">
                        <p className="nav-heading cursor-pointer">Ayushi.ai</p>
                        <p>Made by Harsh Verma.</p>
                    </div>
                </div>
                <div className="flex gap-[20px]">
                    <button className="button-style" onClick={showDailogOnHelp}> <IoMdHelpCircleOutline className="button-icon" /> Help</button>
                    <button onClick={downloadFile} className="button-style"><MdOutlineFileDownload className="button-icon" /> Download</button>
                    <button onClick={publishWebsiteCS} className="button-style bg-violet-700 border-0"><CiServer className="button-icon" /> Publish</button>
                </div>
            </div>

            {/* Hero Canvas */}
            <div className="flex h-[calc(100vh-60px)] w-[100%] px-[0.7%] py-[0.4%] gap-[0.7%]">

                {/* chat section */}
                <div className="w-[39.3%] glass-card overflow-hidden">

                    {/* Contain Chats */}
                    <div className="h-[85%] app-gredient flex flex-col">
                        <div className="h-full relative text-generate-foreground text-[13px] p-[10px] overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-800" ref={chatContainerRef}>
                            <ChatHistory messages={messages} showProgress={show} scrollRef={chatContainerRef} />
                        </div>
                    </div>

                    <div className="h-[15%] rounded-[16px] test-gredient overflow-hidden border-t-[1px] border-gray-600 z-[10]">

                        <div className="h-[63%] w-full pt-[10px] pb-[2px] pl-[15px] pr-[10px] border-0">
                            <textarea
                                onKeyDown={handleKeyDown}
                                className="h-[100%] w-full resize-none overflow-y-scroll scrollbar-hide border-0 focus:outline-none placeholder:text-gray-700"
                                placeholder="Type your prompt here......."
                                id="textquery"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                        </div>


                        <div className="h-[39%] flex items-center px-[10px] pb-[10px] gap-[10px] justify-between">
                            <div className="flex items-center gap-[10px]">
                                <div className="cursor-pointer px-[15px] w-fit py-[8px] rounded-[20px] gradient-border-box text-[13px]">
                                    Ayushi 2.8
                                </div>
                                <div className={`rounded-[100%] p-[8px] cursor-pointer flex icon-input-hover ${show || isWebsiteGenerating || isEnhancing ? "cursor-not-allowed pointer-events-none" : "icon-input-hover"} ${listening ? "blinking" : ""}`} onClick={toggleListening}>
                                    <IoMicOutline className="text-[22px]" />

                                </div>
                                <div
                                    className={`rounded-[100%] p-[8px] icon-input-hover ${isEnhancing ? "blinking" : ""} ${show || isWebsiteGenerating || listening ? "cursor-not-allowed pointer-events-none" : "icon-input-hover"}`}
                                    onClick={magicEnchance}
                                >
                                    <PiMagicWand className="text-[22px]" />
                                </div>

                            </div>

                            <div>
                                <div className={`rounded-[100%] p-[8px] ${show || isWebsiteGenerating || listening || isEnhancing ? "cursor-not-allowed pointer-events-none" : "icon-input-hover"}`} onClick={() => getText()}>
                                    <LuSend className="text-[22px] cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preview Section */}
                <div
                    className={`${expand ? "" : "glass-card"} overflow-hidden
                                ${expand ? "fixed top-0 left-0 w-full h-full z-50 scale-100 rounded-0" : "w-[70.3%]"}`}
                >
                    {/* Inner NavBar */}
                    <div className={`h-[7%] flex justify-between test-gredient ${expand ? "rounded-t-[0px]" : "rounded-t-[16px]"} p-[10px] pr-[15px]`}>
                        {/* 1. Component */}
                        <div className="flex items-center gap-[10px]">
                            <div>
                                <div className="w-[55px] h-[30px] toggel-gredient flex items-center rounded-[7px] relative">
                                    <div
                                        className={`bg-black cursor-pointer w-[27.5px] h-[80%] rounded-[7px] flex items-center justify-center toggle-button ${preview ? "preview-active" : ""}`}
                                        onClick={() => setPreview(!preview)}
                                    >
                                        {preview ? <IoEyeOutline /> : <FaCode />}
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-[100%] p-[8px] icon-input-hover">
                                <MdRefresh className="cursor-pointer nav-icons" onClick={() => setFinalCode(codeBackUp)} />
                            </div>
                            <div className="rounded-[100%] p-[8px] icon-input-hover" onClick={() => setCodeEditable(!isCodeEditable)}>
                                {
                                    isCodeEditable ? <>
                                        <TbCode className="cursor-pointer nav-icons" />
                                    </> : <>
                                        <TbCodeOff className="cursor-pointer nav-icons" />
                                    </>
                                }
                            </div>
                        </div>


                        {/* 2. Component */}
                        <div className="flex items-center gap-[5px] hover:border-b-1 cursor-pointer" onClick={() => {
                            const code = finalCode.toString();
                            const url = `/preview?code=${encodeURIComponent(code)}&device=false`;
                            window.open(url, "_blank");
                        }}>
                            <p>Preview</p>
                            <MdOpenInNew className="cursor-pointer nav-icons" />

                        </div>


                        {/* 3. Component */}
                        <div className="flex items-center gap-[15px]">
                            <div onClick={() => setDevice(!device)} className="rounded-[100%] p-[8px] icon-input-hover">
                                {
                                    device ? <>
                                        <AiOutlineDesktop className="nav-icons cursor-pointer" />
                                    </> : <>
                                        <CiMobile2 className="nav-icons cursor-pointer" />
                                    </>
                                }
                            </div>
                            <div onClick={() => setExpand(!expand)} className="rounded-[100%] p-[8px] icon-input-hover">
                                {
                                    expand ? <>
                                        <FiMinimize2 className="nav-icons cursor-pointer" />

                                    </> : <>
                                        <CgArrowsExpandRight className="nav-icons cursor-pointer" />

                                    </>


                                }
                            </div>

                        </div>
                    </div>


                    <div className="h-[93%] w-[100%] overflow-y-auto flex flex-col">


                        {/* Main Content (Editor / Preview) */}
                        {preview ? (
                            <IframePreview htmlContent={finalCode} isPhone={device} />
                        ) : (
                            <EditableCode
                                initialCode={finalCode}
                                onCodeChange={setFinalCode}
                                editable={isCodeEditable} // toggle true/false
                            />
                        )}

                        {/* Progress Overlay */}
                        {isWebsiteGenerating && (
                            <div
                                className="absolute inset-0 flex justify-center items-center 
                                         bg-blue-200/10 
                                           backdrop-blur-[3px] 
                                           backdrop-saturate-150 
                                           z-[9999]"
                            >
                                <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full animate-spin">
                                    <div className="w-[36px] h-[36px] border-4 border-t-transparent border-white rounded-full"></div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            {/* Alert dailog box */}
            {open && (
                <div className="alert-dailog w-full h-full absolute top-0 left-0 z-50 flex items-center justify-center bg-black/30">
                    <div className="test-gredient flex justify-center items-center flex-col w-[350px] h-[220px] rounded-[5px] gap-[20px] animate-popup">
                        <TbFaceIdError className="text-[40px]" />
                        <p className="text-center px-[20px]">{globalErrorMessage}</p>
                        <button
                            onClick={() => setOpen(false)}
                            className="bg-violet-700 border-white border-[0.5px] font-semibold p-[10px] rounded-[10px] text-white w-[60%]"
                        >
                            Close it
                        </button>
                    </div>
                </div>
            )}

            {/* Progressing bar while publishing */}
            {isPublishing && (
                <div className="alert-dailog w-full h-full absolute top-0 left-0 z-50 flex items-center justify-center bg-black/30">
                    <div className="test-gredient flex justify-center items-center flex-col w-fit h-fit py-[30px] px-[40px] rounded-[5px] gap-[20px] animate-popup">

                        {
                            isPublishDone ? <>
                                <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full animate-spin">
                                    <div className="w-[36px] h-[36px] border-4 border-t-transparent border-white rounded-full"></div>
                                </div>
                            </> : <>
                                <FaWifi className="text-[40px] text-green-600" />
                            </>
                        }



                        <p className="text-center px-[20px]">{globalErrorMessage}</p>

                        {
                            isPublishDone ? <>
                            </> :
                                <>
                                    <p className="text-center px-[20px]">{liveUrl}</p>
                                </>
                        }

                        {
                            isPublishDone ? <>

                            </> : <>
                                <button
                                    onClick={() => {
                                        setPublising(false);
                                        setPublishDone(false);
                                        setLiveUrl("");

                                    }}
                                    className="bg-violet-700 border-white border-[0.5px] font-semibold p-[10px] rounded-[10px] text-white w-[60%]"
                                >
                                    Close it
                                </button>
                            </>
                        }
                    </div>
                </div>
            )}

        </>
    )
}

export default Canvas;




