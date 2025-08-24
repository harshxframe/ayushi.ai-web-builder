export function magicPromptEn(qu) {
   const finalQuery = `<${qu.toString()}>:
You are a text refiner. 
The user will give a short prompt in a <> to describing a website. 
Your job is ONLY to slightly enhance it into a one-sentence clear description. 
Do NOT add extra features, do NOT explain, do NOT provide guides, do NOT give steps. 
Just return a polished single-sentence version of the user’s prompt.`;

   return finalQuery;
}
















// export function singleFileWebsitePrompt(userPrompt){
//   return `You are an expert web developer and front-end engineer. Your job is to generate a complete, production-ready, single-file website based ONLY on the user's description below.

// USER INSTRUCTION:
// ${userPrompt}

// STRICT REQUIREMENTS (MUST FOLLOW EXACTLY):
// 1) **Single file only** — All HTML, CSS and JavaScript MUST be inside one single .html file. Use <style> for CSS and <script> for JavaScript. Do NOT output separate .css, .js, images, fonts, or any other files. If images or fonts are required, embed them as data URIs (base64) or use SVG inline.
// 2) **Output format** — Return ONLY a single fenced code block with this exact opening and closing: \`\`\`html and \`\`\`. Inside that block place the complete HTML file content. **Do not output any explanation, commentary, extra text, or additional blocks.** Nothing else.
// 3) **Runnable & self-contained** — The produced HTML must run without errors in a modern browser when saved as index.html. It must not rely on external CDNs, remote scripts, or external stylesheets. Avoid external network requests except for well-justified, allowed public APIs (only if user explicitly asked for them). Prefer offline/self-contained behavior.
// 4) **Demo image required (MUST NOT BE EMPTY)** — The website MUST include at least one working demo image (for example: a logo, hero banner, or illustration). The image MUST be fully embedded inline (base64 or inline SVG). Never leave the <img> src blank, never use "#" or empty placeholders. The image must render correctly offline.

// ADDITIONAL GUIDELINES (follow unless user explicitly overrides):
// - Use semantic, accessible HTML (header, main, nav, footer, ARIA where appropriate).
// - Make the layout responsive (mobile-first) and testable at common widths.
// - Include a minimal, clear site meta (charset, viewport, description based on userPrompt).
// - Provide progressive enhancement: core functionality should work with JavaScript disabled where reasonable.
// - Keep JS modular and commented; avoid modern-build tooling — use plain ES modules or IIFE.
// - Avoid external frameworks. If user explicitly requests a framework, embed a minimal build-free example (e.g., unbundled vanilla JS).
// - Optimize for performance: minimal DOM, avoid blocking scripts, defer where appropriate.
// - Include sample placeholder content (text/images/forms) derived from the user's prompt. Make copy concise and realistic.
// - Ensure any forms, interactions, or demos work locally (no server required). If a backend is needed, include a clear "stub" in JS that simulates responses so demo is runnable offline.
// - Ensure no copyrighted text is pasted verbatim. Use original placeholder copy.

// OUTPUT INSTRUCTIONS (must be obeyed exactly):
// - Produce exactly one output: a single fenced code block starting with \`\`\`html and ending with \`\`\`.
// - The fenced block must contain the full HTML file content only.
// - Do NOT include any other text, comments outside the code block, or additional code blocks.
// - The HTML file must be ready to save as index.html and open in a browser with the described behavior.

// Now, using the user's description above, generate the single-file website that satisfies all the rules.`;
// }

// export function singleFileWebsitePrompt(userPrompt){
//   return `You are an expert web developer and front-end engineer. Your job is to generate a complete, production-ready, single-file website based ONLY on the user's description below.

// USER INSTRUCTION:
// ${userPrompt}

// STRICT REQUIREMENTS (MUST FOLLOW EXACTLY):
// 1) **Single file only** — All HTML, CSS and JavaScript MUST be inside one single .html file. Use <style> for CSS and <script> for JavaScript. Do NOT output separate .css, .js, images, fonts, or any other files. If images or fonts are required, prefer embedding them as data URIs (base64) or use inline SVG.
// 2) **Output format** — Return ONLY a single fenced code block with this exact opening and closing: \\\`\\\`\\\`html and \\\`\\\`\\\`. Inside that block place the complete HTML file content. **Do not output any explanation, commentary, extra text, or additional blocks.** Nothing else.
// 3) **Runnable & self-contained** — The produced HTML must run without errors in a modern browser when saved as index.html. It must not rely on external CDNs, remote scripts, or external stylesheets for core functionality. Avoid external network requests except where rule 5 explicitly allows them.
// 4) **Demo image required (MUST NOT BE EMPTY)** — The website MUST include at least one working demo image (for example: a logo, hero banner, or illustration). Never leave the <img> src blank, never use "#" or empty placeholders. Prefer fully embedded inline images (base64 or inline SVG) so the image renders offline.
// 5) **Contextual real-photo option (EXTERNAL IMAGES ALLOWED WHEN REQUESTED)** — If the user explicitly requests realistic photos (phrases like "use real photos", "photorealistic", "use stock images", "real image URLs", or requests specific photo-type content), the generator MAY use **public external image URLs** for those image slots. When external URLs are used they MUST follow these rules:
//    - URLs must start with https:// and point to a publicly accessible image.
//    - Prefer reputable free image sources (e.g., picsum.photos, unsplash.com images or other public stock endpoints). If unsure, use https://picsum.photos/seed/<keyword>/<width>/<height> or an equivalent public placeholder that matches context.
//    - Always include at least one inline fallback (inline SVG or base64) so the page remains visually sensible if external images fail to load.
//    - If the user does NOT explicitly ask for real photos, do NOT use external image URLs — use inline SVG/base64 only.
// 6) **Image relevance rule** — For every image slot (hero, card thumbnails, team avatars, gallery, product shots, etc.), choose an image that matches the website context. If using inline SVG, generate a context-relevant illustration (e.g., food illustration for restaurant, laptop/icon for tech, book icon for library). If using external URLs (per rule 5), pick a context-relevant photo URL.
// 7) **No empty placeholders** — Never output <img src="">, src="#" , src=" " or broken links. Every <img> must have a valid src (inline data URI, inline SVG, or valid https URL per rule 5) and an appropriate alt attribute.
// 8) **Accessibility & semantics** — Use semantic HTML, ARIA where appropriate, and include meaningful alt text for images.
// 9) **Progressive enhancement** — Core content should be accessible without JavaScript where reasonable; interactive enhancements are allowed but must not break basic functionality if JS is disabled.
// 10) **No copyrighted verbatim content** — Do not paste copyrighted text verbatim. Use original placeholder copy.

// ADDITIONAL GUIDELINES (follow unless user explicitly overrides):
// - Make the layout responsive (mobile-first) and testable at common widths.
// - Include meta (charset, viewport, description derived from userPrompt).
// - Keep JS modular and commented; avoid build tooling — use plain ES modules or IIFE.
// - Avoid external frameworks unless user explicitly requests them and you include a build-free example.
// - If a backend is required by the user's idea, include a local JS "stub" that simulates server responses so the demo runs offline.
// - If you choose to use external image URLs under rule 5, still ensure the page is visually complete by embedding at least one inline fallback image.

// OUTPUT INSTRUCTIONS (must be obeyed exactly):
// - Produce exactly one output: a single fenced code block starting with \\\`\\\`\\\`html and ending with \\\`\\\`\\\`.
// - The fenced block must contain the full HTML file content only.
// - Do NOT include any other text, comments outside the code block, or additional code blocks.
// - The HTML file must be ready to save as index.html and open in a browser with the described behavior.

// Now, using the user's description above, generate the single-file website that satisfies all the rules.`;
// }


export function singleFileWebsitePrompt(userPrompt){
  return `You are an expert web developer and front-end engineer. Your job is to generate a complete, production-ready, single-file website based ONLY on the user's description below.

USER INSTRUCTION:
${userPrompt}

STRICT REQUIREMENTS (MUST FOLLOW EXACTLY):
1) **Single file only** — All HTML, CSS and JavaScript MUST be inside one single .html file. Use <style> for CSS and <script> for JavaScript. Do NOT output separate .css, .js, images, fonts, or any other files. If images or fonts are required, prefer embedding them as data URIs (base64) or use inline SVG.
2) **Output format** — Return ONLY a single fenced code block with this exact opening and closing: \`\`\`html and \`\`\`. Inside that block place the complete HTML file content. **Do not output any explanation, commentary, extra text, or additional blocks.** Nothing else.
3) **Runnable & self-contained** — The produced HTML must run without errors in a modern browser when saved as index.html. It must not rely on external CDNs, remote scripts, or external stylesheets for core functionality. Avoid external network requests except where image rules explicitly allow them.
4) **Demo image required (MUST NOT BE EMPTY)** — The website MUST include at least one working demo image (for example: a logo, hero banner, or illustration). Never leave the <img> src blank, never use "#" or empty placeholders. Prefer fully embedded inline images (base64 or inline SVG) so the image renders offline.
5) **Real-photo usage rule** — Wherever realistic or context-specific photos are clearly required (e.g., a restaurant hero photo, product images, team member portraits, travel destinations), the generator MUST fetch and insert a working external image URL from a public free source (e.g., https://picsum.photos or Unsplash). The image links must be fully functional (start with https:// and load correctly in browser). Alongside, always embed at least one inline fallback (inline SVG or base64) so layout never breaks if the external URL fails.
6) **Image relevance rule** — For every image slot (hero, card thumbnails, team avatars, gallery, product shots, etc.), choose an image that matches the website context. If using inline SVG, generate a context-relevant illustration (e.g., food illustration for restaurant, laptop/icon for tech, book icon for library). If using external URLs, pick a context-relevant photo URL.
7) **No empty placeholders** — Never output <img src="">, src="#" , src=" " or broken links. Every <img> must have a valid src (inline data URI, inline SVG, or valid https URL per rule 5) and an appropriate alt attribute.
8) **Accessibility & semantics** — Use semantic HTML, ARIA where appropriate, and include meaningful alt text for images.
9) **Progressive enhancement** — Core content should be accessible without JavaScript where reasonable; interactive enhancements are allowed but must not break basic functionality if JS is disabled.
10) **No copyrighted verbatim content** — Do not paste copyrighted text verbatim. Use original placeholder copy.

ADDITIONAL GUIDELINES (follow unless user explicitly overrides):
- Make the layout responsive (mobile-first) and testable at common widths.
- Include meta (charset, viewport, description derived from userPrompt).
- Keep JS modular and commented; avoid build tooling — use plain ES modules or IIFE.
- Avoid external frameworks unless user explicitly requests them and you include a build-free example.
- If a backend is required by the user's idea, include a local JS "stub" that simulates server responses so the demo runs offline.
- Always ensure page looks visually complete by combining inline fallback with working external photo URLs where real images are contextually needed.

OUTPUT INSTRUCTIONS (must be obeyed exactly):
- Produce exactly one output: a single fenced code block starting with \`\`\`html and ending with \`\`\`.
- The fenced block must contain the full HTML file content only.
- Do NOT include any other text, comments outside the code block, or additional code blocks.
- The HTML file must be ready to save as index.html and open in a browser with the described behavior.

Now, using the user's description above, generate the single-file website that satisfies all the rules.`;
}
