export function decodeResponse(response) {
  return new Promise((resolve, reject) => {
    try {
      // Match content inside ```html ... ```
      const match = response.match(/```html([\s\S]*?)```/);
console.log(response);
      if (match && match[1]) {
        // Trim extra spaces/newlines
        resolve(match[1].trim());
      } else {
        reject("No valid HTML block found in response.");
      }
    } catch (err) {
      reject(err);
    }
  });
}
