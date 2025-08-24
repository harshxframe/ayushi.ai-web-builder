import ai from "../aiClient/aiClient.js"
import { magicPromptEn } from "../Utils/prompts.js";
import { apiResponse } from "../Utils/ResponseBody.js";
import generateAIThoughtProcess from "../Utils/AIThoughtProcessGenerator.js";



const dummyResponse = async (req, res) => {
    try {
        console.log("Request received!");
        const query = req.query.prompt;
        if (query != null && query.trim() !== "") {
            setTimeout(() => {
                const thoughtProcess = generateAIThoughtProcess();
                res.send(apiResponse(thoughtProcess.toString(), "success", false, 201));
                console.log("Response sent successfully");
            }, 5000);
        } else {
            res.send(apiResponse({}, "Prompt empty!", false, 401));
            console.log("Request failed: empty prompt");
        }
        console.log("Operation completed!");
    } catch (err) {
        res.send(apiResponse({}, err.toString(), true, 501));
        console.log("Error occurred:", err);
    }
};


const magicEnhance = async (req, res) => {
    try {
        console.log("Request recived!");
        const query = req.query.prompt;
        console.log(`${magicPromptEn(query)}`);
        console.log(query);
        if (query != null) {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: `${magicPromptEn(query)}`,
                temperature: 0,
            });
            res.send(apiResponse(response.text, "success", false, 201));
            console.log("Response send:" + response.text);
        } else {
            res.send(apiResponse({}, "Prompt empty!", false, 401));
            console.log("Request failed");
        }

    } catch (err) {
        res.send(apiResponse({}, err.toString(), true, 501));
        console.log("Error by this/");
    }
}

export { magicEnhance, dummyResponse };



