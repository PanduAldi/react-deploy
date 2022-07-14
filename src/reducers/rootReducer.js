export const initialState = {
  user: "Pandu Aldi Pratama",
  counter: 1000,
};

export const rootReducer = (state, action) => {
  const tipe = action.type;

  if (tipe === "increment") {
    return { ...state, counter: state.counter + 1 };
  } else if (tipe === "decrement") {
    return { ...state, counter: state.counter - 1 };
  } else if (tipe === "incrementSpec") {
    return { ...state, counter: state.counter + action.payload };
  } else if (tipe === "decrementSpec") {
    return { ...state, counter: state.counter - action.payload };
  } else if (tipe === "incrementSpec") {
    return { ...state, counter: state.counter + action.payload };
  } else if (tipe === "reset") {
    return {
      ...state,
      counter: 0,
    };
  } else {
    return state;
  }
};
