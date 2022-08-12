const MIN_NUMBER_QUANTITY = 30;
const MAX_NUMBER_QUANTITY = 100;

export const config = {
  menuEntries: [
    {
      start: {
        text: "Start",
        linkTo: "/game"
      }
    },
    {
      instructions: {
        text: "Instructions",
        linkTo: "/"
      }
    },
    {
      options: {
        text: "Options",
        linkTo: "/options"
      }
    },
  ],
  options: {
    numberQty: {
      total: MIN_NUMBER_QUANTITY,
      description: "This is how many number blocks will be rendered on the screen",
      name: "Number Quantity",
      config: {
        min: MIN_NUMBER_QUANTITY,
        max: MAX_NUMBER_QUANTITY
      }
    },
    minNumberQty: {
      total: MIN_NUMBER_QUANTITY,
      description: "This is the minimum numbers to play the game. Note that you cannot go lower than this.",
      name: "Minimum of numbers",
    },
    maxNumberQty: {
      total: MAX_NUMBER_QUANTITY,
      description: "To prevent the scrolling from getting too big, this is the maximum of number squares that can be generated. Note that you cannot go higher than this.",
      name: "Maximum of numbers",
    }
  }
};
