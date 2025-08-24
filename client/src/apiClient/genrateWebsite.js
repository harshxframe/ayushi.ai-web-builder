import axios from "axios";

// API URL
export const URL = import.meta.env.VITE_API_BASE;

export const generateWebsite = async (promptText) => {
    try {
        const response = await axios.get(URL+"canvas/genAiWeb", {
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