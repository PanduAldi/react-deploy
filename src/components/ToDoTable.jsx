import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

const ToDoTable = (props) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Todo ID</TableCell>
              <TableCell>Todo Name</TableCell>
              <TableCell>Todo Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.todos.map((todo) => {
              return (
                <TableRow key={todo.id}>
                  <TableCell>{todo.id}</TableCell>
                  <TableCell>{todo.name}</TableCell>
                  <TableCell>
                    {todo.isCompleted ? "Selesai" : "Belum Lengkap"}
                  </TableCell>
                  <TableCell>
                    {!todo.isCompleted && (
                      <Button
                        variant="contained"
                        onClick={() => props.fnCompleteTodo(todo.id)}
                      >
                        Selesaikan
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ToDoTable;
