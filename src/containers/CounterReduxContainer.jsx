import React, { useState, useReducer } from "react";

import { Box, Typography, TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  increment,
  decrement,
  reset,
  decrementSpec,
  incrementSpec,
} from "../features/counter/sliceCounter";
import { selectUser, selectCounter } from "../features/counter/sliceCounter";

const CounterReduxContainer = () => {
  const [textInput, setTextInput] = useState("");

  //const [counter, dispatch] = useReducer(counterReducer, initialValue);

  //   const user = useSelector((state) => state.user);
  //   const counter = useSelector((state) => state.counter);

  const user = useSelector(selectUser);
  const counter = useSelector(selectCounter);

  const dispather = useDispatch();

  const buttonDecrementOnClickHandler = () => {
    // dispather({
    //   type: "decrement",
    // });
    dispather(decrement());
  };

  const buttonIncrementOnClickHandler = () => {
    // dispather({
    //   type: "increment",
    // });
    dispather(increment());
  };

  const buttonResetOnClickHandler = () => {
    // dispather({
    //   type: "reset",
    // });

    dispather(reset());
  };

  const changeAmountHandler = (e) => {
    const txt = parseInt(e.target.value);
    setTextInput(txt);
  };

  const buttonIncrementAmountHandler = () => {
    // dispather({
    //   type: "incrementSpec",
    //   payload: textInput,
    // });

    dispather(incrementSpec(textInput));
  };

  const buttonDecrementAmountHandler = () => {
    // dispather({
    //   type: "decrementSpec",
    //   payload: textInput,
    // });

    dispather(decrementSpec(textInput));
  };

  return (
    <>
      <Box
        sx={{
          border: "1px dashed grey",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="body 1" component="div">
          Use Redux {user}
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            disabled
            label="Current Counter"
            // defaultValue="0"
            value={counter}
            size="small"
          />
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonDecrementOnClickHandler}
          >
            -1
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonResetOnClickHandler}
          >
            0
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonIncrementOnClickHandler}
          >
            +1
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          border: "1px dashed grey",
          p: 2,
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Amount"
            // defaultValue="0"
            value={textInput}
            size="small"
            onChange={changeAmountHandler}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonIncrementAmountHandler}
          >
            + Amount
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonDecrementAmountHandler}
          >
            - Amount
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CounterReduxContainer;
