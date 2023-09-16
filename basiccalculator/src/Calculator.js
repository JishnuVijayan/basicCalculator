import React, { useState } from "react";
import Box from "@mui/material/Box";
import "./calculator.css";
import Button from "@mui/material/Button";

export default function Calculator() {
  const [buttons, setButtons] = useState([
    {
      id: 1,
      label: 0,
    },
    {
      id: 2,
      label: 1,
    },
    {
      id: 3,
      label: 2,
    },
    {
      id: 4,
      label: 3,
    },
    {
      id: 5,
      label: 4,
    },
    {
      id: 6,
      label: 5,
    },
    {
      id: 7,
      label: 6,
    },
    {
      id: 8,
      label: 7,
    },
    {
      id: 9,
      label: 8,
    },
    {
      id: 10,
      label: 9,
    },
    {
      id: 11,
      label: "+",
    },
    {
      id: 12,
      label: "-",
    },
    {
      id: 13,
      label: "*",
    },
    {
      id: 14,
      label: "/",
    },
    {
      id: 15,
      label: "CLEAR",
    },
  ]);
  return (
    <div className="main">
      <Box className="Box">
        {buttons.map((item) => (
          <Button
            variant="contained"
            className="Buttons"
            style={{ backgroundColor: "#808080" }}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    </div>
  );
}
