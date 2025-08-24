import fs from "fs";
import path from "path";
import { apiResponse } from "../Utils/ResponseBody.js";

// POST /publish
const publishwebsite = async (req, res) => {
  try {
    const { html } = req.body; // html string from client
    if (!html) {
      return res.send(apiResponse({}, "HTML content is required", true, 401));
    }

    // Ensure published folder exists
    const publishDir = path.join(process.cwd(), "published");
    if (!fs.existsSync(publishDir)) {
      fs.mkdirSync(publishDir, { recursive: true });
    }

    // Unique filename
    const fileName = `site-${Date.now()}.html`;
    const filePath = path.join(publishDir, fileName);

    // Save file
    fs.writeFileSync(filePath, html, "utf-8");
    const url = `${req.protocol}://${req.get("host")}/published/${fileName}`;

    setTimeout(() => {
      return res.send(apiResponse(url.toString(), "website is published successfully!", false, 201));
    }, 5000);

  } catch (err) {
    console.error(err);
    return res.send(apiResponse({}, "Failed to publish website!", true, 501));

  }
};

export default publishwebsite;