import "./counter.css";

import { useState } from "react";
import { ChevronDown } from "react-feather";
import { ChevronUp } from "react-feather";
import { RefreshCcw } from "react-feather";
import { ChevronsDown } from "react-feather";
import { ChevronsUp } from "react-feather";
import { Hash } from "react-feather";

function CounterApp() {
  const [counter, setCounter] = useState(0);
  // Function is called everytime increment button is clicked
  const handleClickAdd1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };
  const handleClickAdd10 = () => {
    // Counter state is incremented
    setCounter(counter + 10);
  };
  const handleClickSub1 = () => {
    setCounter(counter - 1);
  };
  const handleClickSub10 = () => {
    setCounter(counter - 10);
  };
  const handleClickReset = () => {
    setCounter(0);
  };
  const handleClickRandom = () => {
    let min = 1;
    let max = 100;
    let newNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setCounter(newNum);
  };
  return (
    <div className="container">
      <div className="sub-container">
        <p>Current value is :</p>
        <span>{counter}</span>
        <div className="icons">
          <div onClick={handleClickAdd1}>
            <ChevronUp color="black" size={20} />
          </div>
          <div onClick={handleClickAdd10}>
            <ChevronsUp color="black" size={20} />
          </div>
          <div onClick={handleClickReset}>
            <RefreshCcw color="black" size={20} />
          </div>
          <div onClick={handleClickRandom}>
            <Hash color="black" size={20} />
          </div>
          <div onClick={handleClickSub1}>
            <ChevronDown color="black" size={20} />
          </div>
          <div onClick={handleClickSub10}>
            <ChevronsDown color="black" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CounterApp;
