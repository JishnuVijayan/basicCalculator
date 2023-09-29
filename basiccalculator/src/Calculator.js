import Box from "@mui/material/Box";
import "./calculator.css";
import Button from "@mui/material/Button";

export default function Calculator() {
  return (
    <div className="main">
      <h1 style={{ fontSize: 70 }}>CALCULATOR</h1>
      <Box className="Box">
        <div className="textField">
          <span> 0</span>
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
          >
            <b>CLEAR</b>
          </Button>
        </div>
      </Box>
    </div>
  );
}
