import React from "react";
import { Box, Typography } from "@mui/material";

import Heading from "../components/NestedComponentHeader";
import Section from "../components/NestedComponentSection";

const NestedComponent = () => {
  return (
    <Box sx={{ border: "1px solid black;" }}>
      <Section>
        <Heading>Heading 1</Heading>
        <Section>
          <Heading>ini +Heading 2</Heading>
          <Section>
            <Heading>ini heading 3</Heading>
            <Section>
              <Heading>ini heading 3</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </Box>
  );
};

export default NestedComponent;
