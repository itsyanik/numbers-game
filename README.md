# About The Game
The original version of this game was played during classes using the blackboard. This is meant to be a digital version of this game, to be played on an iPad.

## The Goal
The main goal of this game is to teach kids the numeric order and also teach them about the unit / dozen division in the numbers. I have recieved feedback that this game helped accelerate the learning from 6 to 3 months.

## How To Play
Select a range of numbers to work with from 30 up to 100 (by default the game uses 30). The game will then randomize how they're displayed on your screen.
The goal is to simply click on the numbers in numeric order, starting from zero. If you succeed the background turns green, else it turns red. After interacting with any cell they become unclickable and the opacity is set to 50% to facilitate visualization.

Have fun!

### Design
The original game was designed by the design team of the company I was at the time. This remake takes heavy inspiration from [term.ooo](https://term.ooo/) (the brazillian version of [Wordle](https://www.nytimes.com/games/wordle/index.html)). I have also removed anything that relates to that company to avoid complications.

### About The Project
This was the very first project I have ever made and I wanted to lookback and update the code with my current knowledge. I remember this being very fun to work with and the feedback that it worked to help kids learn faster made me very happy, so I hope this is useful to someone who ends up here.
The original site is not responsive, layouts are broken and there is a lot that can be improved. I'm slowly making changes to this repo to update the code and make it as best as I can.

### Running The Project
To run this project you'll need to have [NodeJS](https://nodejs.org/en/download/) installed.
Clone this repo and run `npm install` to install all dependencies and then `npm run start` to start development mode.

There is a lot of overkill for such a small project. This is just because I am refreshing my knowledge on the stack.

### Roadmap
I still don't know how to make a good roadmap, so I'm leaving it as a bullet list for now.

- Remake all the basic functionalities that were working on the original game (80%)
- Refactor CSS and Components
- Implement some sort of session / storage (either local storage or Redux)
- Add instructions and options
- Verify color contrast
- Button to toggle theme / language 
- Score (?)
- Support for keyboard and screenreaders
