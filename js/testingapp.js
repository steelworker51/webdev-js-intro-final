document.addEventListener('DOMContentLoaded', () => {  //script waits to html is loaded  (() => {}). 
    // Get references to all the elements
    const guessInput = document.getElementById('guess-input');  //id="guess-input"
    const submitBtn = document.getElementById('submit-btn');  // id="submit-btn"
    const restartBtn = document.getElementById('restart-btn');  //id="restart-btn"
    const guessMessage = document.getElementById('guess-message');  //id="guess-message"
    const currentGuess = document.getElementById('current-guess');  //id="guess-message".
    const computerGuess = document.getElementById('computer-guess');  //id="computer-guess"
    const guessHistory = document.getElementById('guess-history');  //id="computer-guess"
    const attemptsLeft = document.getElementById('attempts-left');  //id="attempts-left"

    const MAX_ATTEMPTS = 3;
    let secretNumber;
    let attempts = 0;
    let history = [];

    // Function to start a new game
    function startNewGame() {
        secretNumber = Math.round(Math.random() * 10) + 1; // Random number between 1 and 10
        attempts = 0;  // initializes the number of attempts the player has made to 0
        history = [];  //store the history of guesses 
        guessMessage.innerText = '';  //Clears any message showing the result of a guess
        currentGuess.innerText = '';  //Clears any current guess that might be displayed
        computerGuess.innerText = '';  //Clears the computer's previous guess
        guessHistory.innerText = '';  //Clears the history of all past guesses
        guessInput.value = '';  //This clears the value from the input field where the player types in their guess.
        submitBtn.disabled = false;  //Enables the "submit" button, allowing the player to submit a guess.
        restartBtn.disabled = true;  //  Disables the "restart" button, as the player can’t restart the game until they’ve completed the game
        guessInput.disabled = false;  // Ensures the input field is enabled, allowing the player to enter a guess.
    }

    // submit a guess
    submitBtn.addEventListener('click', () => {
        const playerGuess = parseInt(guessInput.value);  //The value is a string, so parseInt() is used to convert it into an integer (playerGuess).

        
        attempts++;  //keeping track of how many guesses the player has made.
        history.push(playerGuess);  //This adds the player's guess to the history array

       
        guessHistory.innerText = history.join(', ');  //id="guess-history" Converts the history array into a string, with each guess separated by a comma and a space

        
        const computerGuessValue = Math.floor(Math.random() * 10) + 1;
        computerGuess.innerText = computerGuessValue;  //updates the content of the element with the ID="computerGuess" to display the computer's random guess.

        
        currentGuess.innerText = playerGuess;  //updates the content of the element with the ID currentGuess to show the player's most recent guess.

        // Check if the player has guessed correctly or not
        if (playerGuess === secretNumber) { //Condition: If the player's guess (playerGuess) is equal to the secret number (secretNumber).
            guessMessage.innerText = 'You Win! The correct number was ' + secretNumber + '.';  //Action: If the guess is correct,"You Win! The correct number was [secret number]."
            endGame(); // The endGame() function is called to stop the game.
        } else if (attempts >= MAX_ATTEMPTS) {  //Condition: If the number of attempts made by the player (attempts) is greater than or equal to the maximum allowed attempts (MAX_ATTEMPTS).
            guessMessage.innerText = 'You Lose! The correct number was ' + secretNumber + '.';  //Action: If the player has exhausted all allowed guesses without winning, it displays a "You Lose!" message, revealing the secret number.
            endGame(); // End game after showing lose message
        } else if (playerGuess < secretNumber) {  //Condition: If the player's guess is lower than the secret number.
            guessMessage.innerText = 'Your guess is too low! You have ' + (MAX_ATTEMPTS - attempts) + ' tries left.';  //Action: The message "Your guess is too low!" is displayed. It also shows how many remaining attempts the player has by calculating the difference between the maximum attempts and the current number of attempts.
        } else if (playerGuess > secretNumber) {  //Condition: If the player's guess is higher than the secret number.
            guessMessage.innerText = 'Your guess is too high! You have ' + (MAX_ATTEMPTS - attempts) + ' tries left.';  //Action: The message "Your guess is too high!" is displayed. It also shows the remaining number of attempts
        }
    });

   
    function endGame() {  // Function: This function is called when the game needs to end (either the player wins or loses).
        submitBtn.disabled = true;  //After the game ends, the player should no longer be able to submit guesses.
        restartBtn.disabled = false;  //  becomes clickable, allowing the player to start a new game. 
        guessInput.disabled = true;  // The input field for entering guesses is also disabled, so the player can't modify their guess after the game has ended.
    }

    
    restartBtn.addEventListener('click', () => {  //When the restart button is clicked, it triggers the function startNewGame(). This function would be responsible for resetting the game stat
        startNewGame();  //resetting the number of attempts, the secret number, and enabling the necessary buttons/inputs to start a new game
    });

    
    startNewGame();  //: This function is called when the page is loaded to initialize the game. It likely sets up the initial game stat
});
