import JSZip from "jszip";
import { saveAs } from "file-saver";

export async function downloadHtmlAsZip(htmlString, fileName = "index.html", zipName = "website.zip") {
  return new Promise(async (resolve, reject) => {
    try {
      const zip = new JSZip();
      zip.file(fileName, htmlString);

      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, zipName);

      resolve(true);
    } catch (err) {
      console.error("Error generating zip:", err);
      reject(false);
    }
  });
}
