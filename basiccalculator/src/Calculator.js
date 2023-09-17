import React, { useState } from "react";
import Box from "@mui/material/Box";
import "./calculator.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Calculator() {
  // const [buttons, setButtons] = useState([
  //   {
  //     id: 1,
  //     label: 1,
  //     height: 30,
  //     width: 40,
  //   },
  //   {
  //     id: 2,
  //     label: 2,
  //     height: 30,
  //     width: 40,
  //   },
  //   {
  //     id: 3,
  //     label: 3,
  //     height: 30,
  //     width: 40,
  //   },
  //   {
  //     id: 4,
  //     label: 4,
  //     height: 30,
  //     width: 40,
  //   },
  //   {
  //     id: 5,
  //     label: 5,
  //     height: 30,
  //     width: 40,
  //   },
  //   {
  //     id: 6,
  //     label: 6,
  //     height: 30,
  //     width: 40,
  //   },
  //   {
  //     id: 7,
  //     label: 7,
  //     height: 30,
  //     width: 40,
  //   },
  //   {
  //     id: 8,
  //     label: 8,
  //     height: 30,
  //     width: 40,
  //   },
  //   {
  //     id: 9,
  //     label: 9,
  //     height: 30,
  //     width: 40,
  //   },
  //   {
  //     id: 10,
  //     label: 0,
  //     height: 30,
  //     width: 40,
  //   },
  //   {
  //     id: 11,
  //     label: "+",
  //   },
  //   {
  //     id: 12,
  //     label: "-",
  //   },
  //   {
  //     id: 13,
  //     label: "*",
  //   },
  //   {
  //     id: 14,
  //     label: "/",
  //   },
  //   {
  //     id: 15,
  //     label: "=",
  //   },
  //   {
  //     id: 16,
  //     label: "CLEAR",
  //   },
  // ]);
  return (
    <div className="main">
      <Box className="Box">
        <TextField style={{ paddingTop: 5, width: 240, paddingLeft: 5 }} />

        <div className="row">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>1</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>2</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>3</b>
          </Button>
        </div>
        <div className="row">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>4</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>5</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>6</b>
          </Button>
        </div>
        <div className="row">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>7</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>8</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>9</b>
          </Button>
        </div>
        <div className="row">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>CLEAR</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>0</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>=</b>
          </Button>
        </div>
        <div className="row">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
              fontWeight: "20",
            }}
          >
            <b>+</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>-</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>*</b>
          </Button>
        </div>
        <div className="row">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>/</b>
          </Button>

          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>.</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 30,
              width: 40,
            }}
          >
            <b>DELETE</b>
          </Button>
        </div>
      </Box>
    </div>
  );
}
