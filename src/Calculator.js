import React, { useEffect, useState } from "react";
import { evaluate } from "mathjs";

function Calculator() {
  const [result, setResult] = useState("");
  const [exp, setExp] = useState("");

  const makeExp = (char) => {
    if (char === "c") {
      setExp("");
      setResult("");
      return;
    }
    if (char === "x") {
      setExp((prev) => prev.slice(0, -1));
      return;
    }
    setExp((prev) => prev + char);
    // return ;
  };

  useEffect(() => {
    calculateResult("");
  }, [exp]);
  const calculateResult = (type) => {
    try {
      const res = evaluate(exp);
      setResult(res);
    } catch {
      if (type === "=") setResult("Expression Error");
    }
  };

  const main = {
    border: "2px solid yellow",
    width: "368px",
    margin: "0 auto",
  };
  const textfield = {
    height: "70px",
    textAlign: "right",
    paddingRight: "10px",
    borderBottom: "1px solid yellow",
  };

  return (
    <>
      <div className="main" style={main}>
        <div className="textfield" style={textfield}>
          <h2>{exp}</h2>
          <h3>{result}</h3>
        </div>
        <div className="grid">
          <div className="row1">
            <button className="" onClick={() => makeExp("c")}>
              C
            </button>
            <button className="" onClick={() => makeExp("%")}>
              %
            </button>
            <button className="" onClick={() => makeExp("x")}>
              X
            </button>
            <button className="" onClick={() => makeExp("/")}>
              /
            </button>
          </div>
          <div className="row1">
            <button className="" onClick={() => makeExp("7")}>
              7
            </button>
            <button className="" onClick={() => makeExp("8")}>
              8
            </button>
            <button className="" onClick={() => makeExp("9")}>
              9
            </button>
            <button className="" onClick={() => makeExp("*")}>
              *
            </button>
          </div>
          <div className="row1">
            <button className="" onClick={() => makeExp("4")}>
              4
            </button>
            <button className="" onClick={() => makeExp("5")}>
              5
            </button>
            <button className="" onClick={() => makeExp("6")}>
              6
            </button>
            <button className="" onClick={() => makeExp("-")}>
              -
            </button>
          </div>
          <div className="row1">
            <button className="" onClick={() => makeExp("1")}>
              1
            </button>
            <button className="" onClick={() => makeExp("2")}>
              2
            </button>
            <button className="" onClick={() => makeExp("3")}>
              3
            </button>
            <button className="" onClick={() => makeExp("+")}>
              +
            </button>
          </div>
          <div className="row1">
            <button className="" onClick={() => makeExp("00")}>
              00
            </button>
            <button className="" onClick={() => makeExp("0")}>
              0
            </button>
            <button className="" onClick={() => makeExp(".")}>
              .
            </button>
            <button className="" onClick={() => calculateResult("=")}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Calculator;
