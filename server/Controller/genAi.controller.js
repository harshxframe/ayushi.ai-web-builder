import ai from "../aiClient/aiClient.js"
import { apiResponse } from "../Utils/ResponseBody.js";
import { singleFileWebsitePrompt1, singleFileWebsitePrompt2, singleFileWebsitePrompt3} from "../Utils/prompts.js";
import { snakeGame } from "../Utils/demoHtmlResponse.js";

const genAI = async (req, res) => {
    try {
        console.log("Request received!");
        const query = req.query.prompt;
        if (query != null && query.trim() !== "") {
            const llmPrompt = singleFileWebsitePrompt3(query);
            const demoPrompt = query;
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: llmPrompt.toString(),  //  llmPrompt.toString()
                temperature: 0,
            });
            res.send(apiResponse(response.text, "success", false, 201));
            console.log("Response sent:" + response);


        } else {
            res.send(apiResponse({}, "Prompt empty!", true, 401));
            console.log("Request failed: empty prompt");
        }

        console.log("Operation completed!");
    } catch (err) {
        res.send(apiResponse({}, err.toString(), true, 501));
        console.log("Error occurred:", err);
    }
};





export default genAI;