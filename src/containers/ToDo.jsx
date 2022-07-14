import React, { useState, useEffect, useReducer } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoTable from "../components/ToDoTable";
import Box from "@mui/material";
import { Typography } from "@mui/material";
import ToDoReducer from "../reducers/ToDoReducer";

const ToDo = () => {
  const initialTodos = [
    { id: 1, name: "Belajar React", isCompleted: true },
    { id: 2, name: "Review Dom", isCompleted: false },
    { id: 3, name: "Belajar REact componenr", isCompleted: false },
  ];

  const [todos, dispatch] = useReducer(ToDoReducer, initialTodos);
  // const [todos, setTodos] = useState([
  //   { id: 1, name: "Belajar React", isCompleted: true },
  //   { id: 2, name: "Review Dom", isCompleted: false },
  //   { id: 3, name: "Belajar REact componenr", isCompleted: false },
  // ]);

  // const [tes, setTes] = useState("");

  // useEffect(() => {
  //   let textTitle = "Jumlah Task : " + todos.length;
  //   console.log(textTitle);
  //   document.title = textTitle;
  // }, [todos]);

  // useEffect(() => {
  //   console.log("kok jalan");
  // }, []);

  // const [counter, setCounter] = useState(0);

  // const addTodos = (namaTodos) => {
  //   let newId = todos[todos.length - 1].id + 1;

  //   const objBaru = { id: newId, name: namaTodos, isCompleted: false };

  //   const addNewTodos = [...todos, objBaru];

  //   setTodos(addNewTodos);
  // };
  const addTodos = (namaTodos) => {
    dispatch({
      type: "tambah",
      name: namaTodos,
    });
  };

  // const completeTodo = (todoId) => {
  //   const newTodos = todos.map((td) => {
  //     if (td.id === todoId) {
  //       td.isCompleted = true;
  //     }

  //     return td;
  //   });

  //   setTodos(newTodos);
  // };
  const completeTodo = (todoId) => {
    dispatch({
      type: "selesaikan",
      id: todoId,
    });
  };

  return (
    <>
      <Typography variant="h5" style={{ marginBottom: "1em" }}>
        Aplikasi Todo
      </Typography>
      <ToDoForm fnAddTodos={addTodos} />
      <ToDoTable todos={todos} fnCompleteTodo={completeTodo} />
    </>
  );
};

export default ToDo;
