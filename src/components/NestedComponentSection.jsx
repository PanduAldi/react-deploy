import React, { useContext } from "react";
import { Box } from "@mui/material";

import { LevelContext } from "../contexts/LevelContext";

const NestedComponentSection = (props) => {
  let level = useContext(LevelContext);

  return (
    <Box sx={{ border: "1px solid black", padding: "10px" }}>
      <LevelContext.Provider value={level + 1}>
        {props.children}
      </LevelContext.Provider>
    </Box>
  );
};

export default NestedComponentSection;
