import axios from "axios";

// API URL
export const URL = import.meta.env.VITE_API_BASE;

export const enhancePrompt = async (promptText) => {
    try {
        const response = await axios.get(URL+"canvas/dummyResponse", {
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
        const response = await axios.get(URL+"canvas/magicEnhancer", {
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
