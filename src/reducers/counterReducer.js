export const initialValue = 0;

export const counterReducer = (counter, action) => {
  const tipe = action.tipe;

  switch (tipe) {
    case "increment":
      return counter + 1;
    case "decrement":
      return counter - 1;

    case "incrementSpec":
      return counter + action.payload;

    case "decrementSpec":
      return counter - action.payload;

    case "reset":
      return 0;

    default:
      return counter;
  }
};
