import fs from "fs/promises";
import path from "path";
import { apiResponse } from "../Utils/ResponseBody.js";

const publishwebsite = async (req, res) => {
  try {
    const { html } = req.body;
    if (!html) {
      return res
        .status(400)
        .send(apiResponse({}, "HTML content is required", true, 401));
    }

    // Ensure published folder exists
    const publishDir = path.join(process.cwd(), "published");
    await fs.mkdir(publishDir, { recursive: true });

    // Unique filename
    const fileName = `site-${Date.now()}.html`;
    const filePath = path.join(publishDir, fileName);

    // Save file (async/await way)
    await fs.writeFile(filePath, html, "utf-8");

    // Public URL
    const url = `${req.protocol}://${req.get("host")}/published/${fileName}`;

    return res
      .status(201)
      .send(apiResponse(url, "Website published successfully!", false, 201));
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send(apiResponse({}, "Failed to publish website!", true, 501));
  }
};

export default publishwebsite;
