import Box from "@mui/material/Box";
import "./calculator.css";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Calculator() {
  const [calcValue, setCalcValue] = useState("");
  const [result, setResult] = useState("");
  const operators = ["+", "-", "*", "/"];
  const decimalPoint = ["."];
  const updateValue = (value) => {
    if (
      (operators.includes(value) && calcValue === "") ||
      (operators.includes(value) && operators.includes(calcValue.slice(-1)))
    )
      return;
    else setCalcValue(calcValue + value);

    if (!operators.includes(value)) {
      setResult(eval(calcValue + value).toString());
    }
  };
  const calculation = () => {
    setCalcValue(eval(calcValue).toString());
  };
  const decimal = (value) => {
    if (value === ".") setCalcValue(calcValue + value);
  };
  const deleteLast = () => {
    if (calcValue == " ") {
      return;
    }

    const Value = calcValue.slice(0, -1);
    setCalcValue(Value);
  };
  const clear = () => {
    setCalcValue("");
  };
  return (
    <div className="main">
      <h1 style={{ fontSize: 70 }}>CALCULATOR</h1>
      <Box className="Box">
        <div className="textField">
          <span
            style={{
              color: "#ffffff",
              justifyContent: "flex-end",
              alignItems: "baseline",
              position: "absolute",
              bottom: 0,
              right: 0,
              fontSize: 25,
            }}
          >
            {calcValue ? calcValue : 0}
          </span>
        </div>
        <div className="hr"></div>
        <div className="row">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 50,
              width: 40,
            }}
            onClick={() => updateValue("1")}
          >
            <b>1</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 50,
              width: 40,
            }}
            onClick={() => updateValue("2")}
          >
            <b>2</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 50,
              width: 40,
            }}
            onClick={() => updateValue("3")}
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
              height: 50,
              width: 40,
            }}
            onClick={() => updateValue("4")}
          >
            <b>4</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 50,
              width: 40,
            }}
            onClick={() => updateValue("5")}
          >
            <b>5</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 50,
              width: 40,
            }}
            onClick={() => updateValue("6")}
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
              height: 50,
              width: 40,
            }}
            onClick={() => updateValue("7")}
          >
            <b>7</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 50,
              width: 40,
            }}
            onClick={() => updateValue("8")}
          >
            <b>8</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 50,
              width: 40,
            }}
            onClick={() => updateValue("9")}
          >
            <b>9</b>
          </Button>
        </div>
        <div className="row">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FDB44E",
              borderRadius: 15,
              height: 50,
              width: 40,
            }}
            onClick={() => deleteLast()}
          >
            <b>DELETE</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#808080",
              borderRadius: 15,
              height: 50,
              width: 40,
            }}
            onClick={() => updateValue("0")}
          >
            <b>0</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FDB44E",
              borderRadius: 15,
              height: 50,
              width: 40,
            }}
            onClick={() => calculation()}
          >
            <b>=</b>
          </Button>
        </div>
        <div className="row">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FDB44E",
              borderRadius: 15,
              height: 50,
              width: 40,
              fontWeight: "20",
            }}
            onClick={() => updateValue("+")}
          >
            <b>+</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FDB44E",
              borderRadius: 15,
              height: 50,
              width: 40,
            }}
            onClick={() => updateValue("-")}
          >
            <b>-</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FDB44E",
              borderRadius: 15,
              height: 50,
              width: 40,
            }}
            onClick={() => updateValue("*")}
          >
            <b>*</b>
          </Button>
        </div>
        <div className="row">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FDB44E",
              borderRadius: 15,
              height: 50,
              width: 40,
            }}
            onClick={() => updateValue("/")}
          >
            <b>/</b>
          </Button>

          <Button
            variant="contained"
            style={{
              backgroundColor: "#FDB44E",
              borderRadius: 15,
              height: 50,
              width: 40,
            }}
            onClick={() => decimal(".")}
          >
            <b>.</b>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FF0000",
              borderRadius: 15,
              height: 50,
              width: 40,
            }}
            onClick={() => clear()}
          >
            <b>CLEAR</b>
          </Button>
        </div>
      </Box>
    </div>
  );
}
