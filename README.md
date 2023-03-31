# Wordle Plus

Wordle Plus is a React application that mimics the popular word-guessing game, Wordle. This application uses custom components that were built from the ground up, with the only external libraries used being jQuery and random-words.

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start` to start the application.

## Usage

Once the application is running, you can play the game by guessing a five-letter word. The application will tell you how many letters are correct and how many are in the correct position. You have six chances to guess the word before the game is over.

To start a new game, simply refresh the page.

## Components

The custom components used in this application include:

- `Backspace`: A component that represents the backspace key on the keyboard.
- `EndScreen`: A component that displays the result of the game (win or lose) and allows the user to start a new game.
- `Enter`: A component that represents the enter key on the keyboard.
- `GameBoard`: A component that represents the game board and contains multiple `GameRow` components.
- `GameRow`: A component that represents a single row on the game board.
- `Keyboard`: A component that represents the entire keyboard and contains multiple `Key` components.
- `Key`: A component that represents a single key on the keyboard and handles user input.


## Dependencies

The only external dependencies used in this application are:

- `jquery`: A JavaScript library that makes it easier to interact with the DOM.
- `random-words`: A JavaScript library that generates random English words.

## Try it out

This application is hosted on GitHub Pages, and you can try it out by visiting [https://brettbuhler.github.io/wordle-plus](https://brettbuhler.github.io/wordle-plus).

## Contributing

If you find a bug or would like to contribute to this application, please create an issue or submit a pull request on GitHub.

## License

This application is licensed under the MIT License. See the LICENSE file for more information.
