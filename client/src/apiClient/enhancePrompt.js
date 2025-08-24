import axios from "axios";

// API URL
const URL = "http://localhost:2000/canvas/";

export const enhancePrompt = async (promptText) => {
    try {
        const response = await axios.get(URL+"dummyResponse", {
            params: {
                prompt: promptText, // ye backend me req.query.prompt banega
            },
        });

        if (response.data.error) {

            return { "success": false, "prompt": "." }

        } else {
            return { "success": true, "prompt": response.data.data }
        }



    } catch (error) {
        console.error("Error enhancing prompt:", error.response?.data || error.message);
        return { "success": false};
    }
};

export const magicPrompt = async (promptText) => {
    try {
        const response = await axios.get(URL+"magicEnhancer", {
            params: {
                prompt: promptText, // ye backend me req.query.prompt banega
            },
        });

        if (response.data.error) {

            return { "success": false, "prompt": "." }

        } else {
            return { "success": true, "prompt": response.data.data }
        }



    } catch (error) {
        console.error("Error enhancing prompt:", error.response?.data || error.message);
        return { "success": false};
    }
};
