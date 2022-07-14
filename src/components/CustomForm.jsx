import React from "react";
import { useNavigate } from "react-router-dom";

const Customform = () => {
  let navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();

    /** Programatic navigation */
    navigate("/");
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <button type="submit">Tes Pindahan</button>
      </form>
    </>
  );
};

export default Customform;
