import React, { useState, useReducer } from "react";
import { counterReducer, initialValue } from "../reducers/counterReducer";
import { Box, Typography, TextField, Button } from "@mui/material";

const CounterReducerContainer = () => {
  const [textInput, setTextInput] = useState("");

  const [counter, dispatch] = useReducer(counterReducer, initialValue);

  const buttonDecrementOnClickHandler = () => {
    dispatch({
      tipe: "decrement",
    });
  };

  const buttonIncrementOnClickHandler = () => {
    dispatch({
      tipe: "increment",
    });
  };

  const buttonResetOnClickHandler = () => {
    dispatch({
      tipe: "reset",
    });
  };

  const changeAmountHandler = (e) => {
    const txt = parseInt(e.target.value);
    setTextInput(txt);
  };

  const buttonIncrementAmountHandler = () => {
    dispatch({
      tipe: "incrementSpec",
      payload: textInput,
    });
  };

  const buttonDecrementAmountHandler = () => {
    dispatch({
      tipe: "decrementSpec",
      payload: textInput,
    });
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
        <Typography variant="body1" component="div">
          Use Reducer
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

export default CounterReducerContainer;
