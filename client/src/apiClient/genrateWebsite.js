import axios from "axios";

// API URL
const URL = "http://localhost:2000/canvas/";

export const generateWebsite = async (promptText) => {
    try {
        const response = await axios.get(URL+"genAiWeb", {
            params: {
                prompt: promptText, // ye backend me req.query.prompt banega
            },
        });

        if (response.data.error) {

            return { "success": false, "source": "." }

        } else {
            return { "success": true, "source": response.data.data }
        }


    } catch (error) {
        console.error("Error enhancing prompt:", error.response?.data || error.message);
        return { "success": false};
    }
};