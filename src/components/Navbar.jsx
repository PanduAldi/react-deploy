import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> &nbsp;
      <Link to="/movie">List Movie</Link> &nbsp;
      <Link to="/todo-list">Todo List</Link> &nbsp;
      <Link to="/nested-component">Nested Component</Link> &nbsp;
      <Link to="/formulir">Formulir</Link> &nbsp;
      <Link to="/planet-animal">Planet Animal</Link>&nbsp;
      <Link to="/use-reducer">Use Reducer</Link>&nbsp;
      <Link to="/use-redux"> Use Redux</Link>&nbsp;
      <Link to="/login">Login</Link>
      {/** node V16 ++ opt : object?.nama_object
       *
       */}
    </nav>
  );
}
