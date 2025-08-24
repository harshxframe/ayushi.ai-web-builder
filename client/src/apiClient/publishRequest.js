import axios from "axios";

// API URL
const URL = "http://localhost:2000/publish/";

export const hostWebsiteCS = async (htmlcode) => {
    try {
        const response = await axios.post(URL + "publishwebsite", {
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
