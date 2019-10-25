This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and deployed [here](https://gyopak.github.io/cardgame/).

## Features

- implemented:
  - Allow the user to play more than one game without reloading the page
  - Allow the user to set the number of cards before a new game (min. 3, max. 10 pairs)
  - Present the user with a score counter that increments after every second card flip
  - Allow the user to continue the previously played game after reloading the page
- todo:
  - It should be responsive
  - It should have a landing page for the app that explains the rules, and a separate screen for the actual game

## Issues

- Layout is crappy
- Highscore tracked globally, it is independent from the game size
- Cards are not disabled after clicking
- ...

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br>
