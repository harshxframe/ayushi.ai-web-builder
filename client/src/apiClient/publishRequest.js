import axios from "axios";

// API URL
export const URL = import.meta.env.VITE_API_BASE;

export const hostWebsiteCS = async (htmlcode) => {
    try {
        const response = await axios.post(URL +"publish/publishwebsite", {
            html: htmlcode   // now backend me req.body.html banega
        });

        if (response.data.error) {
            return { success: false, source: "." };
        } else {
            return { success: true, source: response.data.data };
        }

    } catch (error) {
        console.error("Error enhancing prompt:", error.response?.data || error.message);
        return { success: false };
    }
};
