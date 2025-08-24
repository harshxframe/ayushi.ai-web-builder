// export function htmlcode(){
//     return `
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title id="siteTitle"></title>

//     <!--
//     /*************************************************************************
//     *                           USER EDITABLE SECTION                      *
//     *                                                                        *
//     *   Instructions:                                                        *
//     *   - Modify the values below to customize your Snake Game.              *
//     *   - Do not change variable names or HTML structure outside this section.*
//     *************************************************************************/
//     -->
//     <script>
//         // Game Settings
//         const USER_GAME_TITLE = "🐍 Classic Snake Game 🍎";
//         const USER_GAME_DESCRIPTION = "Navigate the snake to eat the apples and grow longer! Avoid hitting the walls or yourself. Use arrow keys (or WASD) on desktop, or the on-screen controls on mobile.";
//         const USER_INITIAL_GAME_SPEED_MS = 150; // Lower value = faster game (e.g., 200 for easy, 100 for hard)
//         const USER_GRID_SIZE_PX = 20; // Size of each cell/segment in pixels for drawing

//         // Text & Labels
//         const USER_SCORE_LABEL = "Score:";
//         const USER_START_BUTTON_TEXT = "Start Game";
//         const USER_PAUSE_BUTTON_TEXT = "Pause";
//         const USER_RESUME_BUTTON_TEXT = "Resume";
//         const USER_RESET_BUTTON_TEXT = "Reset Game";
//         const USER_GAME_OVER_MESSAGE = "Game Over! Press Reset to play again.";
//         const USER_PAUSED_MESSAGE = "Game Paused. Press Resume to continue.";
//         const USER_INITIAL_MESSAGE = "Press Start to begin!";
//         const USER_FOOTER_TEXT = "&copy; 2023 Classic Snake Game. All rights reserved.";

//         // Colors
//         const USER_PRIMARY_COLOR = "#4CAF50"; // Green for snake and primary buttons
//         const USER_ACCENT_COLOR = "#FF6347"; // Tomato for food and game messages
//         const USER_BACKGROUND_COLOR = "#282c34"; // Dark page background
//         const USER_TEXT_COLOR = "#f0f0f0"; // Light text color
//         const USER_CANVAS_BACKGROUND_COLOR = "#1a1a1a"; // Dark canvas background
//         const USER_CANVAS_BORDER_COLOR = "#444"; // Canvas border color
//         const USER_BUTTON_HOVER_COLOR = "#5cb85c"; // Button hover effect
//         const USER_MOBILE_CONTROLS_COLOR = "#3a3f4a"; // Background for mobile controls
//         const USER_MOBILE_CONTROLS_TEXT_COLOR = "#f0f0f0"; // Text/icon color for mobile controls
//     </script>
//     <!-- END OF USER EDITABLE SECTION -->

//     <style>
//         /* Global Styles */
//         body {
//             font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//             margin: 0;
//             padding: 0;
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//             min-height: 100vh;
//             overflow-y: hidden;
//             background-color: var(--background-color);
//             color: var(--text-color);
//             line-height: 1.6;
//             overflow-x: hidden; /* Prevent horizontal scroll on mobile */
//             -webkit-font-smoothing: antialiased; /* Improve font rendering */
//             -moz-osx-font-smoothing: grayscale; /* Improve font rendering */
//         }

//         /* CSS Variables to use values from User Editable JS section */
//         :root {
//             --primary-color: #4CAF50;
//             --accent-color: #FF6347;
//             --background-color: #282c34;
//             --text-color: #f0f0f0;
//             --canvas-background-color: #1a1a1a;
//             --canvas-border-color: #444;
//             --button-hover-color: #5cb85c;
//             --mobile-controls-color: #3a3f4a;
//             --mobile-controls-text-color: #f0f0f0;
//         }

//         /* Header Styling */
//         header {
//             text-align: center;
//             margin-bottom: 20px;
//             padding: 20px;
//             width: 100%;
//             box-sizing: border-box;
//         }

//         header h1 {
//             color: var(--primary-color);
//             margin-bottom: 10px;
//             font-size: 2.5em;
//             text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
//         }

//         header p {
//             font-size: 1.1em;
//             max-width: 800px;
//             margin: 0 auto;
//             color: var(--text-color);
//         }

//         /* Main Game Area Styling */
//         main {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             background-color: #333;
//             border-radius: 10px;
//             box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
//             padding: 30px;
//             margin-bottom: 20px;
//             width: 90%;
//             max-width: 600px; /* Limits the max width of the game container */
//             box-sizing: border-box;
//         }

//         /* Canvas Styling */
//         #gameCanvas {
//             border: 5px solid var(--canvas-border-color);
//             background-color: var(--canvas-background-color);
//             display: block;
//             margin-bottom: 20px;
//             border-radius: 5px;
//             width: 100%; /* Make canvas responsive to its parent's width */
//             height: auto; /* Maintain aspect ratio */
//             max-width: 600px; /* Ensure max width for canvas itself */
//             max-height: 600px;
//             box-sizing: border-box;
//         }

//         /* Game Information & Controls */
//         .game-info {
//             display: flex;
//             justify-content: space-between;
//             width: 100%;
//             margin-bottom: 20px;
//             font-size: 1.2em;
//             font-weight: bold;
//         }

//         .game-controls {
//             display: flex;
//             flex-wrap: wrap; /* Allow buttons to wrap to next line on smaller screens */
//             gap: 15px;
//             justify-content: center;
//             width: 100%;
//             margin-bottom: 20px;
//         }

//         /* Button Styling */
//         button {
//             background-color: var(--primary-color);
//             color: var(--text-color);
//             border: none;
//             padding: 12px 25px;
//             border-radius: 5px;
//             cursor: pointer;
//             font-size: 1.1em;
//             transition: background-color 0.3s ease, transform 0.1s ease, box-shadow 0.3s ease;
//             flex-grow: 1; /* Allow buttons to grow and fill space */
//             min-width: 120px; /* Minimum width for buttons */
//             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
//         }

//         button:hover {
//             background-color: var(--button-hover-color);
//             transform: translateY(-2px);
//             box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
//         }

//         button:active {
//             transform: translateY(0);
//             box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
//         }

//         button:disabled {
//             background-color: #666;
//             cursor: not-allowed;
//             transform: none;
//             box-shadow: none;
//             opacity: 0.7;
//         }

//         /* Message Display Styling */
//         #messageDisplay {
//             margin-top: 15px;
//             font-size: 1.1em;
//             color: var(--accent-color);
//             text-align: center;
//             min-height: 2em; /* Ensure consistent spacing even when no message */
//             font-weight: bold;
//             animation: fadeIn 0.5s ease-out;
//         }

//         @keyframes fadeIn {
//             from { opacity: 0; }
//             to { opacity: 1; }
//         }

//         /* Mobile Controls (D-pad) Styling */
//         .mobile-controls {
//             display: none; /* Hidden by default, shown via media query */
//             margin-top: 20px;
//             background-color: var(--mobile-controls-color);
//             padding: 20px;
//             border-radius: 10px;
//             width: 100%;
//             max-width: 300px; /* Max width for mobile controls */
//             box-sizing: border-box;
//             box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
//         }

//         .mobile-controls .d-pad {
//             display: grid;
//             grid-template-areas:
//                 ". up ."
//                 "left center right"
//                 ". down .";
//             gap: 10px;
//         }

//         .mobile-controls button {
//             background-color: var(--primary-color);
//             color: var(--mobile-controls-text-color);
//             padding: 15px;
//             font-size: 1.5em;
//             border-radius: 50%; /* Make buttons circular */
//             width: 60px; /* Fixed size for circular buttons */
//             height: 60px;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             border: 2px solid var(--button-hover-color);
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
//             flex-grow: 0; /* Override flex-grow from general button rule */
//             min-width: unset; /* Override min-width */
//             user-select: none; /* Prevent text selection on touch devices */
//             -webkit-tap-highlight-color: transparent; /* Remove tap highlight on mobile */
//         }

//         .mobile-controls button:active {
//             transform: translateY(0); /* Remove lift on press */
//             box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
//             background-color: var(--button-hover-color); /* Darken on active for visual feedback */
//         }

//         .mobile-controls button:hover {
//             transform: scale(1.05); /* Slight scale on hover */
//         }

//         .mobile-controls .up { grid-area: up; }
//         .mobile-controls .left { grid-area: left; }
//         .mobile-controls .right { grid-area: right; }
//         .mobile-controls .down { grid-area: down; }
//         .mobile-controls .center { grid-area: center; visibility: hidden; } /* Placeholder for center, hidden */

//         /* Footer Styling */
//         footer {
//             margin-top: 20px;
//             padding: 15px;
//             text-align: center;
//             font-size: 0.9em;
//             color: #aaa;
//             width: 100%;
//             box-sizing: border-box;
//         }

//         /* Responsive Design Media Queries */
//         @media (max-width: 768px) {
//             header h1 {
//                 font-size: 2em;
//             }

//             header p {
//                 font-size: 1em;
//             }

//             main {
//                 padding: 20px;
//                 width: 95%;
//             }

//             .game-info {
//                 flex-direction: column;
//                 align-items: center;
//                 gap: 10px;
//                 font-size: 1.1em;
//             }

//             .game-controls {
//                 flex-direction: column;
//                 gap: 10px;
//             }

//             button {
//                 padding: 10px 20px;
//                 font-size: 1em;
//             }

//             .mobile-controls {
//                 display: block; /* Show mobile controls on smaller screens */
//             }
//         }

//         @media (max-width: 480px) {
//             header {
//                 padding: 15px;
//             }

//             header h1 {
//                 font-size: 1.8em;
//             }

//             main {
//                 padding: 15px;
//             }

//             .mobile-controls button {
//                 width: 50px;
//                 height: 50px;
//                 font-size: 1.2em;
//             }
//         }
//     </style>
// </head>
// <body>
//     <header>
//         <h1 id="gameTitle"></h1>
//         <p id="gameDescription"></p>
//     </header>

//     <main>
//         <canvas id="gameCanvas"></canvas>
//         <div class="game-info">
//             <div id="scoreDisplay"></div>
//         </div>
//         <div class="game-controls">
//             <button id="startButton"></button>
//             <button id="pauseButton"></button>
//             <button id="resetButton"></button>
//         </div>
//         <div id="messageDisplay"></div>

//         <div class="mobile-controls">
//             <div class="d-pad">
//                 <button class="d-pad-button up" data-direction="up">⬆</button>
//                 <button class="d-pad-button left" data-direction="left">⬅</button>
//                 <div class="center"></div> <!-- Placeholder for layout -->
//                 <button class="d-pad-button right" data-direction="right">➡</button>
//                 <button class="d-pad-button down" data-direction="down">⬇</button>
//             </div>
//         </div>
//     </main>

//     <footer>
//         <p id="footerText"></p>
//     </footer>

//     <script>
//         // DOM Element References
//         const siteTitleEl = document.getElementById('siteTitle');
//         const gameTitleEl = document.getElementById('gameTitle');
//         const gameDescriptionEl = document.getElementById('gameDescription');
//         const canvas = document.getElementById('gameCanvas');
//         const ctx = canvas.getContext('2d');
//         const scoreDisplay = document.getElementById('scoreDisplay');
//         const startButton = document.getElementById('startButton');
//         const pauseButton = document.getElementById('pauseButton');
//         const resetButton = document.getElementById('resetButton');
//         const messageDisplay = document.getElementById('messageDisplay');
//         const mobileControls = document.querySelector('.mobile-controls');
//         const footerTextEl = document.getElementById('footerText');

//         // Apply User Editable Text to DOM elements
//         siteTitleEl.textContent = USER_GAME_TITLE;
//         gameTitleEl.textContent = USER_GAME_TITLE;
//         gameDescriptionEl.textContent = USER_GAME_DESCRIPTION;
//         startButton.textContent = USER_START_BUTTON_TEXT;
//         pauseButton.textContent = USER_PAUSE_BUTTON_TEXT;
//         resetButton.textContent = USER_RESET_BUTTON_TEXT;
//         footerTextEl.innerHTML = USER_FOOTER_TEXT; // Use innerHTML for copyright symbol

//         // Apply User Editable Colors to CSS Custom Properties (Variables)
//         document.documentElement.style.setProperty('--primary-color', USER_PRIMARY_COLOR);
//         document.documentElement.style.setProperty('--accent-color', USER_ACCENT_COLOR);
//         document.documentElement.style.setProperty('--background-color', USER_BACKGROUND_COLOR);
//         document.documentElement.style.setProperty('--text-color', USER_TEXT_COLOR);
//         document.documentElement.style.setProperty('--canvas-background-color', USER_CANVAS_BACKGROUND_COLOR);
//         document.documentElement.style.setProperty('--canvas-border-color', USER_CANVAS_BORDER_COLOR);
//         document.documentElement.style.setProperty('--button-hover-color', USER_BUTTON_HOVER_COLOR);
//         document.documentElement.style.setProperty('--mobile-controls-color', USER_MOBILE_CONTROLS_COLOR);
//         document.documentElement.style.setProperty('--mobile-controls-text-color', USER_MOBILE_CONTROLS_TEXT_COLOR);

//         // Game Variables
//         const gridSize = USER_GRID_SIZE_PX;
//         const canvasDimension = 600; // Internal resolution of the canvas (e.g., 600x600 pixels)
//         canvas.width = canvasDimension;
//         canvas.height = canvasDimension;

//         let snake = [];
//         let food = {};
//         let direction = 'right'; // Initial direction
//         let score = 0;
//         let gameInterval; // Stores the setInterval ID
//         let gameSpeed = USER_INITIAL_GAME_SPEED_MS; // Milliseconds per game update
//         let isGameOver = false;
//         let isGamePaused = true;
//         let changingDirection = false; // Flag to prevent multiple direction changes per game tick

//         /**
//          * Initializes or resets the game state.
//          * Sets up the initial snake position, food, score, and messages.
//          */
//         function initGame() {
//             // Reset game variables
//             snake = [{ x: 10 * gridSize, y: 10 * gridSize }]; // Snake starts at position (10,10) on the grid
//             direction = 'right';
//             score = 0;
//             isGameOver = false;
//             isGamePaused = true;
//             changingDirection = false;

//             // Generate first food item
//             generateFood();
//             // Update score display
//             updateScoreDisplay();
//             // Display initial game message
//             messageDisplay.textContent = USER_INITIAL_MESSAGE;
//             // Draw the initial game state on canvas
//             draw();
//             // Update button states (e.g., disable start button)
//             updateButtonStates();
//         }

//         /**
//          * Generates a new food item at a random position on the canvas grid.
//          * Ensures food does not spawn on top of the snake.
//          */
//         function generateFood() {
//             let newFoodX, newFoodY;
//             let collisionWithSnake;

//             do {
//                 // Generate random coordinates within the grid boundaries
//                 newFoodX = Math.floor(Math.random() * (canvasDimension / gridSize)) * gridSize;
//                 newFoodY = Math.floor(Math.random() * (canvasDimension / gridSize)) * gridSize;
//                 // Check if the generated food position overlaps with any part of the snake
//                 collisionWithSnake = snake.some(segment => segment.x === newFoodX && segment.y === newFoodY);
//             } while (collisionWithSnake); // Repeat until a non-colliding position is found

//             food = { x: newFoodX, y: newFoodY };
//         }

//         /**
//          * Draws all game elements (snake and food) on the canvas.
//          */
//         function draw() {
//             ctx.clearRect(0, 0, canvasDimension, canvasDimension); // Clear the entire canvas

//             // Draw Snake segments
//             ctx.fillStyle = USER_PRIMARY_COLOR;
//             snake.forEach(segment => {
//                 ctx.fillRect(segment.x, segment.y, gridSize, gridSize); // Fill rectangle for segment
//                 ctx.strokeStyle = '#222'; // Dark border for segments for definition
//                 ctx.strokeRect(segment.x, segment.y, gridSize, gridSize); // Draw border
//             });

//             // Draw Food (as a circle for visual distinction)
//             ctx.fillStyle = USER_ACCENT_COLOR;
//             ctx.beginPath();
//             // Draw a circle centered within the grid cell
//             ctx.arc(food.x + gridSize / 2, food.y + gridSize / 2, gridSize / 2, 0, Math.PI * 2);
//             ctx.fill();
//             ctx.strokeStyle = '#777'; // Border for the food
//             ctx.stroke();
//         }

//         /**
//          * Updates the game state: moves the snake, checks for collisions, handles food consumption.
//          */
//         function update() {
//             if (isGameOver || isGamePaused) return; // Do nothing if game is over or paused

//             changingDirection = false; // Reset the flag, allowing direction change for the next frame

//             // Create a new head based on the current direction
//             const head = { x: snake[0].x, y: snake[0].y };

//             switch (direction) {
//                 case 'up':
//                     head.y -= gridSize;
//                     break;
//                 case 'down':
//                     head.y += gridSize;
//                     break;
//                 case 'left':
//                     head.x -= gridSize;
//                     break;
//                 case 'right':
//                     head.x += gridSize;
//                     break;
//             }

//             // Add the new head to the beginning of the snake array
//             snake.unshift(head);

//             // Check for game over conditions (wall or self-collision)
//             if (checkCollision()) {
//                 endGame();
//                 return; // Stop update if game is over
//             }

//             // Check if the snake's head has reached the food
//             if (head.x === food.x && head.y === food.y) {
//                 score++; // Increment score
//                 updateScoreDisplay(); // Update score display
//                 generateFood(); // Generate new food
//             } else {
//                 // If no food was eaten, remove the tail segment (snake moves without growing)
//                 snake.pop();
//             }

//             draw(); // Redraw the game elements with the updated state
//         }

//         /**
//          * Checks if the snake has collided with a wall or itself.
//          * @returns {boolean} True if a collision occurred, false otherwise.
//          */
//         function checkCollision() {
//             const head = snake[0];

//             // Wall collision detection
//             if (head.x < 0 || head.x >= canvasDimension || head.y < 0 || head.y >= canvasDimension) {
//                 return true; // Collided with a wall
//             }

//             // Self-collision detection (check head against the rest of the snake's body)
//             for (let i = 1; i < snake.length; i++) {
//                 if (head.x === snake[i].x && head.y === snake[i].y) {
//                     return true; // Collided with itself
//                 }
//             }

//             return false; // No collision
//         }

//         /**
//          * Ends the game, stops the game loop, and displays game over message.
//          */
//         function endGame() {
//             isGameOver = true;
//             clearInterval(gameInterval); // Stop the game update loop
//             messageDisplay.textContent = USER_GAME_OVER_MESSAGE; // Show game over message
//             updateButtonStates(); // Update button states for game over
//         }

//         /**
//          * Starts or resumes the game.
//          */
//         function startGame() {
//             if (isGameOver) {
//                 initGame(); // If game was over, re-initialize before starting
//             }
//             if (isGamePaused) {
//                 isGamePaused = false;
//                 messageDisplay.textContent = ''; // Clear any paused/initial messages
//                 // Start the game loop
//                 gameInterval = setInterval(update, gameSpeed);
//                 updateButtonStates(); // Update button states (e.g., disable start)
//             }
//         }

//         /**
//          * Pauses or resumes the game.
//          */
//         function pauseGame() {
//             if (!isGameOver) { // Only allow pause/resume if game is not over
//                 isGamePaused = !isGamePaused; // Toggle pause state
//                 if (isGamePaused) {
//                     clearInterval(gameInterval); // Stop game loop if pausing
//                     messageDisplay.textContent = USER_PAUSED_MESSAGE; // Show paused message
//                 } else {
//                     startGame(); // Resume game if unpausing
//                 }
//                 updateButtonStates(); // Update button texts/states
//             }
//         }

//         /**
//          * Resets the game to its initial state.
//          */
//         function resetGame() {
//             clearInterval(gameInterval); // Stop any running game loop
//             initGame(); // Re-initialize all game variables and state
//         }

//         /**
//          * Updates the score display on the UI.
//          */
//         function updateScoreDisplay() {
//             scoreDisplay.textContent = `${USER_SCORE_LABEL} ${score}`;
//         }

//         /**
//          * Updates the disabled/enabled states and text of the control buttons.
//          */
//         function updateButtonStates() {
//             // Start button: enabled only if game is paused or over
//             startButton.disabled = !isGamePaused || isGameOver;
//             // Pause/Resume button: enabled only if game is not over
//             pauseButton.disabled = isGameOver;
//             // Reset button: always enabled
//             resetButton.disabled = false;

//             // Change Pause button text based on game state
//             if (isGamePaused && !isGameOver) {
//                 pauseButton.textContent = USER_RESUME_BUTTON_TEXT;
//             } else {
//                 pauseButton.textContent = USER_PAUSE_BUTTON_TEXT;
//             }
//         }

//         /**
//          * Handles keyboard input to change the snake's direction.
//          * Prevents the snake from immediately reversing direction.
//          * @param {KeyboardEvent} event The keyboard event object.
//          */
//         function changeDirection(event) {
//             // Prevent rapid multiple direction changes within a single game tick
//             if (changingDirection) return;
//             changingDirection = true;

//             const keyPressed = event.key;
//             const goingUp = direction === 'up';
//             const goingDown = direction === 'down';
//             const goingLeft = direction === 'left';
//             const goingRight = direction === 'right';

//             // Change direction based on key press, preventing 180-degree turns
//             if ((keyPressed === 'ArrowLeft' || keyPressed.toLowerCase() === 'a') && !goingRight) {
//                 direction = 'left';
//             } else if ((keyPressed === 'ArrowUp' || keyPressed.toLowerCase() === 'w') && !goingDown) {
//                 direction = 'up';
//             } else if ((keyPressed === 'ArrowRight' || keyPressed.toLowerCase() === 'd') && !goingLeft) {
//                 direction = 'right';
//             } else if ((keyPressed === 'ArrowDown' || keyPressed.toLowerCase() === 's') && !goingUp) {
//                 direction = 'down';
//             }
//         }

//         // Event Listeners
//         // Listen for keyboard input for snake movement
//         document.addEventListener('keydown', changeDirection);

//         // Button click handlers
//         startButton.addEventListener('click', startGame);
//         pauseButton.addEventListener('click', pauseGame);
//         resetButton.addEventListener('click', resetGame);

//         // Mobile control buttons handler
//         mobileControls.addEventListener('click', (event) => {
//             const button = event.target.closest('.d-pad-button');
//             if (button) {
//                 const requestedDirection = button.dataset.direction;
//                 // Create a synthetic event object to pass to the existing changeDirection handler
//                 const syntheticEvent = {
//                     key: '',
//                     // Prevent default behavior if this were a real key event, though not strictly needed here
//                     preventDefault: () => {}
//                 };

//                 // Map requested direction from data-direction to a key that the changeDirection function understands
//                 switch (requestedDirection) {
//                     case 'up': syntheticEvent.key = 'ArrowUp'; break;
//                     case 'down': syntheticEvent.key = 'ArrowDown'; break;
//                     case 'left': syntheticEvent.key = 'ArrowLeft'; break;
//                     case 'right': syntheticEvent.key = 'ArrowRight'; break;
//                 }

//                 // Call the main direction change handler
//                 changeDirection(syntheticEvent);
//             }
//         });

//         // Initialize the game when the DOM is fully loaded
//         document.addEventListener('DOMContentLoaded', initGame);

//     </script>
// </body>
// </html>
//     `;
// }


export const codeString = `
<!-- HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demo App</title>
  <style>
    /* CSS */
    body {
      font-family: Arial, sans-serif;
      background: white;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }

    .card {
      background: #1e1e1e;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.5);
      text-align: center;
      width: 300px;
      transition: transform 0.3s ease;
      cursor: pointer;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .btn {
      background: #007acc;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      margin-top: 15px;
      transition: background 0.3s;
    }

    .btn:hover {
      background: #005fa3;
    }
  </style>
</head>
<body>
  <div class="card" id="greetingCard">
    <h2>Hello, World!</h2>
    <p>Click the button to get a greeting 👇</p>
    <button class="btn" id="greetBtn">Say Hi</button>
  </div>

  <script>
    // JavaScript
    const btn = document.getElementById("greetBtn");
    const card = document.getElementById("greetingCard");

    const greetings = [
      "Hello there! 👋",
      "Welcome to the demo 🎉",
      "Have a great day! 🌞",
      "Stay awesome 🚀",
      "Keep coding 💻"
    ];

    btn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * greetings.length);
      alert(greetings[randomIndex]);
      card.style.border = "2px solid #007acc";
    });
  </script>
</body>
</html>
`;


export const calString = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mini Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #121212;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .calculator {
      background: #1e1e1e;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(0,0,0,0.7);
      width: 300px;
    }
    .display {
      background: #2c2c2c;
      padding: 1rem;
      border-radius: 8px;
      text-align: right;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      min-height: 2rem;
      overflow-x: auto;
    }
    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }
    button {
      padding: 1rem;
      font-size: 1.2rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      background: #333;
      color: #fff;
      transition: 0.2s;
    }
    button:hover {
      background: #555;
    }
    button.operator {
      background: #ff9500;
      color: #fff;
    }
    button.operator:hover {
      background: #ffa733;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <div class="display" id="display">0</div>
    <div class="buttons">
      <button onclick="appendNumber('7')">7</button>
      <button onclick="appendNumber('8')">8</button>
      <button onclick="appendNumber('9')">9</button>
      <button class="operator" onclick="chooseOperator('/')">/</button>

      <button onclick="appendNumber('4')">4</button>
      <button onclick="appendNumber('5')">5</button>
      <button onclick="appendNumber('6')">6</button>
      <button class="operator" onclick="chooseOperator('*')">*</button>

      <button onclick="appendNumber('1')">1</button>
      <button onclick="appendNumber('2')">2</button>
      <button onclick="appendNumber('3')">3</button>
      <button class="operator" onclick="chooseOperator('-')">-</button>

      <button onclick="appendNumber('0')">0</button>
      <button onclick="appendNumber('.')">.</button>
      <button onclick="calculate()">=</button>
      <button class="operator" onclick="chooseOperator('+')">+</button>

      <button onclick="clearDisplay()" style="grid-column: span 4; background:#ff3b30;">Clear</button>
    </div>
  </div>

  <script>
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    const display = document.getElementById('display');

    function appendNumber(number) {
      if(number === '.' && currentInput.includes('.')) return;
      currentInput += number;
      updateDisplay();
    }

    function chooseOperator(op) {
      if(currentInput === '') return;
      if(previousInput !== '') calculate();
      operator = op;
      previousInput = currentInput;
      currentInput = '';
    }

    function calculate() {
      let result;
      const prev = parseFloat(previousInput);
      const curr = parseFloat(currentInput);
      if(isNaN(prev) || isNaN(curr)) return;
      switch(operator) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/': result = prev / curr; break;
        default: return;
      }
      currentInput = result.toString();
      operator = '';
      previousInput = '';
      updateDisplay();
    }

    function clearDisplay() {
      currentInput = '';
      previousInput = '';
      operator = '';
      updateDisplay();
    }

    function updateDisplay() {
      display.innerText = currentInput || '0';
    }
  </script>
</body>
</html>
`;


export const snakeGame = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Snake Game</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0; /* remove scrolling */
      background: #121212;
      color: #fff;
      font-family: Arial, sans-serif;
      flex-direction: column;
      overflow: hidden; /* prevent scrolling */
    }
    canvas {
      background: #1e1e1e;
      border: 2px solid #fff;
      border-radius: 10px;
      display: block;
    }
    h1 {
      margin-bottom: 10px;
    }
    .score {
      margin: 10px 0;
    }
    .controls {
      margin-top: 15px;
      display: flex;
      gap: 10px;
    }
    button {
      padding: 8px 16px;
      font-size: 14px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background: #0f0f0f;
      color: #fff;
      transition: 0.2s;
    }
    button:hover {
      background: #333;
    }
  </style>
</head>
<body>
  <h1>Snake Game</h1>
  <div class="score">Score: <span id="score">0</span></div>
  <canvas id="game" width="400" height="400"></canvas>
  <div class="controls">
    <button id="startBtn">Start</button>
    <button id="stopBtn">Stop</button>
    <button id="restartBtn">Restart</button>
  </div>

  <script>
    const canvas = document.getElementById('game');
    const ctx = canvas.getContext('2d');

    const box = 20;
    const canvasSize = 400;

    let snake = [{x: 10 * box, y: 10 * box}];
    let food = {x: Math.floor(Math.random()*20) * box, y: Math.floor(Math.random()*20) * box};
    let direction = "RIGHT";
    let score = 0;
    let gameInterval = null;

    function changeDirection(e) {
      if(e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
      else if(e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
      else if(e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
      else if(e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
    }

    document.addEventListener('keydown', changeDirection);

    function draw() {
      ctx.fillStyle = "#1e1e1e";
      ctx.fillRect(0, 0, canvasSize, canvasSize);

      for(let i=0;i<snake.length;i++){
        ctx.fillStyle = i === 0 ? "#0ff" : "#0a0";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "#121212";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
      }

      ctx.fillStyle = "#f00";
      ctx.fillRect(food.x, food.y, box, box);

      let snakeX = snake[0].x;
      let snakeY = snake[0].y;

      if(direction === "LEFT") snakeX -= box;
      if(direction === "RIGHT") snakeX += box;
      if(direction === "UP") snakeY -= box;
      if(direction === "DOWN") snakeY += box;

      if(snakeX === food.x && snakeY === food.y){
        score++;
        document.getElementById('score').innerText = score;
        food = {x: Math.floor(Math.random()*20)*box, y: Math.floor(Math.random()*20)*box};
      } else {
        snake.pop();
      }

      let newHead = {x: snakeX, y: snakeY};

      if(snakeX < 0 || snakeX >= canvasSize || snakeY < 0 || snakeY >= canvasSize || collision(newHead, snake)){
        stopGame();
        alert("Game Over! Your score: " + score);
      }

      snake.unshift(newHead);
    }

    function collision(head, array){
      for(let i=0;i<array.length;i++){
        if(head.x === array[i].x && head.y === array[i].y) return true;
      }
      return false;
    }

    function startGame(){
      if(!gameInterval){
        gameInterval = setInterval(draw, 100);
      }
    }

    function stopGame(){
      clearInterval(gameInterval);
      gameInterval = null;
    }

    function restartGame(){
      stopGame();
      snake = [{x: 10 * box, y: 10 * box}];
      direction = "RIGHT";
      score = 0;
      document.getElementById('score').innerText = score;
      food = {x: Math.floor(Math.random()*20)*box, y: Math.floor(Math.random()*20)*box};
      startGame();
    }

    document.getElementById('startBtn').addEventListener('click', startGame);
    document.getElementById('stopBtn').addEventListener('click', stopGame);
    document.getElementById('restartBtn').addEventListener('click', restartGame);

    // optional: start immediately
    // startGame();
  </script>
</body>
</html>

`;


export const landingPage = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FastTrack Logistics</title>
<style>
  /* Basic reset */
  * { margin: 0; padding: 0; box-sizing: border-box; font-family: Arial, sans-serif; }
  body { background: #f4f4f4; color: #333; }
  a { text-decoration: none; color: inherit; }

  /* Header / Navigation */
  header { background: #0b3d91; color: #fff; padding: 20px 0; }
  header nav { display: flex; justify-content: space-around; align-items: center; }
  header nav a { color: #fff; font-weight: bold; padding: 5px 10px; transition: 0.2s; }
  header nav a:hover { background: #fff; color: #0b3d91; border-radius: 5px; }

  /* Hero */
  .hero { text-align: center; padding: 80px 20px; background: url('https://images.unsplash.com/photo-1616745304236-beb65d3b2b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx0cnVja3xlbnwwfHx8fDE2OTM1MzgwNzU&ixlib=rb-4.0.3&q=80&w=1080') no-repeat center/cover; color: #fff; }
  .hero h1 { font-size: 48px; margin-bottom: 20px; text-shadow: 2px 2px 5px rgba(0,0,0,0.5); }
  .hero p { font-size: 20px; margin-bottom: 30px; text-shadow: 1px 1px 3px rgba(0,0,0,0.5); }
  .hero button { padding: 10px 20px; font-size: 18px; background: #ffce00; border: none; border-radius: 5px; cursor: pointer; transition: 0.2s; }
  .hero button:hover { background: #e6b800; }

  /* Sections */
  section { padding: 60px 20px; }
  h2 { text-align: center; margin-bottom: 40px; font-size: 32px; color: #0b3d91; }

  /* About */
  .about { max-width: 800px; margin: auto; text-align: center; line-height: 1.6; }

  /* Fleet */
  .fleet { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; max-width: 1200px; margin: auto; }
  .truck { background: #fff; padding: 10px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); text-align: center; }
  .truck img { width: 100%; border-radius: 10px; }
  .truck h3 { margin-top: 10px; }

  /* Services */
  .services { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; }
  .service { background: #0b3d91; color: #fff; padding: 20px; border-radius: 10px; width: 250px; text-align: center; transition: 0.3s; }
  .service:hover { background: #062763; }

  /* Contact */
  .contact form { max-width: 500px; margin: auto; display: flex; flex-direction: column; gap: 15px; }
  .contact input, .contact textarea { padding: 10px; border-radius: 5px; border: 1px solid #ccc; font-size: 16px; }
  .contact button { padding: 10px; background: #0b3d91; color: #fff; font-size: 18px; border: none; border-radius: 5px; cursor: pointer; }
  .contact button:hover { background: #062763; }

  /* Footer */
  footer { background: #0b3d91; color: #fff; text-align: center; padding: 20px; }
</style>
</head>
<body>

<header>
  <nav>
    <a href="#hero">Home</a>
    <a href="#about">About</a>
    <a href="#fleet">Fleet</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<section class="hero" id="hero">
  <h1>FastTrack Logistics</h1>
  <p>Reliable Transport Solutions Across the Country</p>
  <button onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Get a Quote</button>
</section>

<section class="about" id="about">
  <h2>About Us</h2>
  <p>FastTrack Logistics has been delivering high-quality transport services for over 20 years. Our fleet of modern trucks and experienced drivers ensure timely and safe delivery of your goods across the country.</p>
</section>

<section class="fleet" id="fleet">
  <h2>Our Fleet</h2>
  <!-- 10 Trucks -->
  <div class="truck"><img src="https://images.unsplash.com/photo-1600267161903-029b122e3c9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx0cnVja3xlbnwwfHx8fDE2OTM1NDE4ODU&ixlib=rb-4.0.3&q=80&w=400" alt="Truck 1"><h3>Truck 1</h3></div>
  <div class="truck"><img src="https://images.unsplash.com/photo-1571771689474-c2eb1ec0e2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx0cnVja3xlbnwwfHx8fDE2OTM1NDE4ODU&ixlib=rb-4.0.3&q=80&w=400" alt="Truck 2"><h3>Truck 2</h3></div>
  <div class="truck"><img src="https://images.unsplash.com/photo-1610878180933-3825e64b3e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx0cnVja3xlbnwwfHx8fDE2OTM1NDE4ODU&ixlib=rb-4.0.3&q=80&w=400" alt="Truck 3"><h3>Truck 3</h3></div>
  <div class="truck"><img src="https://images.unsplash.com/photo-1610878180922-c1a4c9d3a78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx0cnVja3xlbnwwfHx8fDE2OTM1NDE4ODU&ixlib=rb-4.0.3&q=80&w=400" alt="Truck 4"><h3>Truck 4</h3></div>
  <div class="truck"><img src="https://images.unsplash.com/photo-1610878180920-f2c9e583d8a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx0cnVja3xlbnwwfHx8fDE2OTM1NDE4ODU&ixlib=rb-4.0.3&q=80&w=400" alt="Truck 5"><h3>Truck 5</h3></div>
  <div class="truck"><img src="https://images.unsplash.com/photo-1610878180918-e5e3baf7a9b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx0cnVja3xlbnwwfHx8fDE2OTM1NDE4ODU&ixlib=rb-4.0.3&q=80&w=400" alt="Truck 6"><h3>Truck 6</h3></div>
  <div class="truck"><img src="https://images.unsplash.com/photo-1610878180916-5d4f0735f7c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx0cnVja3xlbnwwfHx8fDE2OTM1NDE4ODU&ixlib=rb-4.0.3&q=80&w=400" alt="Truck 7"><h3>Truck 7</h3></div>
  <div class="truck"><img src="https://images.unsplash.com/photo-1610878180914-4d4c7f6f9c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx0cnVja3xlbnwwfHx8fDE2OTM1NDE4ODU&ixlib=rb-4.0.3&q=80&w=400" alt="Truck 8"><h3>Truck 8</h3></div>
  <div class="truck"><img src="https://images.unsplash.com/photo-1610878180912-3c3b4f6f5b1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx0cnVja3xlbnwwfHx8fDE2OTM1NDE4ODU&ixlib=rb-4.0.3&q=80&w=400" alt="Truck 9"><h3>Truck 9</h3></div>
  <div class="truck"><img src="https://images.unsplash.com/photo-1610878180910-2b2a3f6d4a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx0cnVja3xlbnwwfHx8fDE2OTM1NDE4ODU&ixlib=rb-4.0.3&q=80&w=400" alt="Truck 10"><h3>Truck 10</h3></div>
</section>

<section class="services" id="services">
  <h2>Our Services</h2>
  <div class="service">Local Delivery</div>
  <div class="service">National Transport</div>
  <div class="service">Freight Solutions</div>
  <div class="service">Warehousing</div>
</section>

<section class="contact" id="contact">
  <h2>Contact Us</h2>
  <form onsubmit="alert('Form submitted!'); return false;">
    <input type="text" placeholder="Your Name" required>
    <input type="email" placeholder="Your Email" required>
    <textarea placeholder="Message" rows="5" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</section>

<footer>
  &copy; 2025 FastTrack Logistics. All rights reserved.
</footer>

</body>
</html>
`



export const dev = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Harsh Verma | Android Developer Portfolio</title>
<style>
  /* Reset */
  * { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }
  body { font-family: 'Arial', sans-serif; background: #f5f5f5; color: #333; }

  /* Navigation */
  header { position: fixed; top:0; width:100%; background: #0b3d91; color:#fff; z-index: 100; box-shadow:0 2px 10px rgba(0,0,0,0.2); }
  header nav { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin:auto; padding: 10px 20px; }
  header nav .logo { font-size: 24px; font-weight: bold; }
  header nav a { color:#fff; margin-left: 20px; font-weight: 500; transition: 0.3s; }
  header nav a:hover { color: #ffce00; }

  /* Hero */
  .hero { height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; background: linear-gradient(135deg,#0b3d91,#062763); color:#fff; }
  .hero h1 { font-size: 48px; margin-bottom: 20px; animation: fadeInDown 1s ease; }
  .hero p { font-size: 20px; margin-bottom: 30px; animation: fadeInUp 1s ease; }
  .hero button { padding: 12px 24px; font-size: 18px; background:#ffce00; border:none; border-radius:6px; cursor:pointer; animation: fadeInUp 1.2s ease; }
  .hero button:hover { background:#e6b800; }

  @keyframes fadeInDown { from { opacity:0; transform:translateY(-50px);} to {opacity:1; transform:translateY(0);} }
  @keyframes fadeInUp { from { opacity:0; transform:translateY(50px);} to {opacity:1; transform:translateY(0);} }

  /* Sections */
  section { padding: 80px 20px; max-width: 1200px; margin:auto; }
  h2 { text-align:center; margin-bottom:40px; font-size:32px; color:#0b3d91; }

  /* About */
  .about { display:flex; flex-wrap:wrap; align-items:center; gap:40px; }
  .about img { width:300px; border-radius:20px; box-shadow:0 5px 20px rgba(0,0,0,0.2); }
  .about .text { flex:1; font-size:18px; line-height:1.6; }

  /* Skills */
  .skills { display:flex; flex-wrap:wrap; gap:20px; justify-content:center; }
  .skill { background:#0b3d91; color:#fff; padding:20px 30px; border-radius:12px; font-weight:bold; transition:0.3s; }
  .skill:hover { background:#062763; }

  /* Projects */
  .projects { display:grid; grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); gap:20px; }
  .project { background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.1); transition:0.3s; }
  .project img { width:100%; display:block; transition:0.3s; }
  .project:hover img { transform:scale(1.05); }
  .project .info { padding:15px; }
  .project .info h3 { margin-bottom:10px; color:#0b3d91; }
  .project .info p { font-size:14px; line-height:1.4; }

  /* Contact */
  .contact form { display:flex; flex-direction:column; gap:15px; max-width:500px; margin:auto; }
  .contact input, .contact textarea { padding:12px; border-radius:6px; border:1px solid #ccc; font-size:16px; }
  .contact button { padding:12px; font-size:18px; border:none; border-radius:6px; background:#0b3d91; color:#fff; cursor:pointer; transition:0.3s; }
  .contact button:hover { background:#062763; }

  /* Footer */
  footer { background:#0b3d91; color:#fff; text-align:center; padding:20px; }

  /* Responsive */
  @media(max-width:768px){
    .about { flex-direction:column; text-align:center; }
    .about img { width:80%; }
  }

</style>
</head>
<body>

<header>
  <nav>
    <div class="logo">Harsh Verma</div>
    <div>
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
</header>

<section class="hero" id="hero">
  <h1>Hi, I'm Harsh Verma</h1>
  <p>Android Developer | MERN Stack Enthusiast | Problem Solver</p>
  <button onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Hire Me</button>
</section>

<section class="about" id="about">
  <h2>About Me</h2>
  <img src="https://via.placeholder.com/300x300.png?text=Harsh+Verma" alt="Harsh Verma">
  <div class="text">
    <p>I am an Android developer with a passion for building performant, beautiful, and user-friendly apps. I have experience in Java, Kotlin, and Flutter, along with backend skills using Node.js and MongoDB. I love creating applications that solve real-world problems efficiently.</p>
  </div>
</section>

<section class="skills" id="skills">
  <h2>My Skills</h2>
  <div class="skills">
    <div class="skill">Java</div>
    <div class="skill">Kotlin</div>
    <div class="skill">Flutter</div>
    <div class="skill">Android SDK</div>
    <div class="skill">Node.js</div>
    <div class="skill">MongoDB</div>
    <div class="skill">React</div>
    <div class="skill">REST APIs</div>
  </div>
</section>

<section class="projects" id="projects">
  <h2>Projects</h2>
  <div class="projects">
    <div class="project">
      <img src="https://via.placeholder.com/400x200.png?text=Project+1" alt="Project 1">
      <div class="info">
        <h3>Weather App</h3>
        <p>A beautiful Android app that fetches real-time weather data and displays it in a simple UI.</p>
      </div>
    </div>
    <div class="project">
      <img src="https://via.placeholder.com/400x200.png?text=Project+2" alt="Project 2">
      <div class="info">
        <h3>Todo App</h3>
        <p>A task management app with cloud sync using Firebase for Android users.</p>
      </div>
    </div>
    <div class="project">
      <img src="https://via.placeholder.com/400x200.png?text=Project+3" alt="Project 3">
      <div class="info">
        <h3>Expense Tracker</h3>
        <p>Track daily expenses with beautiful charts and summaries in real-time.</p>
      </div>
    </div>
  </div>
</section>

<section class="contact" id="contact">
  <h2>Contact Me</h2>
  <form onsubmit="alert('Message sent!'); return false;">
    <input type="text" placeholder="Your Name" required>
    <input type="email" placeholder="Your Email" required>
    <textarea placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</section>

<footer>
  &copy; 2025 Harsh Verma. All rights reserved.
</footer>

</body>
</html>
`;
