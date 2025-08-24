// AIThoughtProcessFriendlyMachine.js

// Utility: pick a random item from an array
const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Friendly "thought process" style messages
const thoughts = {
  intros: [
    "Alright, deep breath... starting the build process!",
    "Okay, let’s spin up some creative energy",
    "Hmm, where do I begin? Maybe with the structure",
    "Loading ideas into memory... got a spark",
    "Kicking things off: layout comes first"
  ],
  planning: [
    "Thinking about a clean header and navigation bar",
    "Colors should be easy on the eyes... maybe soft gradients",
    "Let’s make it responsive so it feels great on mobile too",
    "Hmm, what about smooth transitions when switching sections",
    "I’ll keep accessibility in mind while planning components"
  ],
  coding: [
    "Writing HTML scaffolding... header, main, footer",
    "Styling buttons with hover effects, feels snappy",
    "Adding some micro-animations for a modern vibe",
    "Okay, JavaScript time: interactivity coming up",
    "Optimizing layout to load faster and feel smoother"
  ],
  testing: [
    "Quick preview... does the button glow nicely?",
    "Resize window test: looks good on phone screens",
    "Trying out the animations — smooth enough?",
    "Checking dark mode vibes... oh, nice",
    "Little tweaks to spacing for better readability"
  ],
  reflections: [
    "I like how it flows, but maybe add more contrast here",
    "Buttons could be bolder, let’s refine that",
    "The transitions feel natural, mission accomplished",
    "Responsiveness seems solid, maybe test on tablet too",
    "It’s shaping up well, I can almost feel the final product"
  ],
  conclusions: [
    "Website draft complete — it feels clean and lively",
    "Polished up the details, looks production-ready",
    "All set! Time to show this off",
    "Nice, another design puzzle solved",
    "Mission accomplished, the site feels alive"
  ]
};

// Generate one segment of "thought"
const generateThoughtSegment = () => {
  const segmentType = pickRandom(Object.keys(thoughts));
  let segment = pickRandom(thoughts[segmentType]);

  // Add connector
  segment += Math.random() < 0.5 ? "... " : ". ";
  return segment + "\n"; // newline at the end
};

/**
 * Generates a friendly AI-like thought process about building a website
 * @param {number} minSegments - Minimum segments (default 35)
 * @param {number} maxSegments - Maximum segments (default 70)
 * @returns {string} The generated thought process
 */
const generateFriendlyAIThoughtProcess = (minSegments = 35, maxSegments = 70) => {
  const segmentsCount = Math.floor(Math.random() * (maxSegments - minSegments + 1)) + minSegments;
  let fullText = "";
  for (let i = 0; i < segmentsCount; i++) {
    fullText += generateThoughtSegment();
  }
  return fullText;
};

export default generateFriendlyAIThoughtProcess;
