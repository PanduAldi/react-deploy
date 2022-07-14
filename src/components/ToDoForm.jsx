import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const ToDoForm = (props) => {
  const [textInput, setTextInput] = useState("");

  const inputOnChange = (e) => {
    let i = e.target.value;
    setTextInput(i);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.fnAddTodos(textInput);
  };

  return (
    <>
      <form onSubmit={submitHandler} style={{ marginBottom: "1.5em" }}>
        <TextField
          label="Todo Input"
          variant="outlined"
          onChange={inputOnChange}
          defaultValue={textInput}
        ></TextField>
        <Button variant="contained" size="large" color="success" type="submit">
          Todo
        </Button>
      </form>
    </>
  );
};

export default ToDoForm;
