import React, { useState } from "react";
import "./tikTacToe.css";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TikTacToe = () => {
  const [count, setCount] = useState(0); // corectare pentru useState
  const [lock, setLock] = useState(false); // corectare pentru useState

  const toggle = (e, num) => {
    if (lock) {
      return;
    }
    if (data[num]) {
      return; // prevenim suprascrierea unei celule deja completate
    }

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}' alt='Cross' />`;
      data[num] = "x";
      setCount(count + 1);
    } else {
      e.target.innerHTML = `<img src='${circle_icon}' alt='Circle' />`;
      data[num] = "o";
      setCount(count + 1);
    }

    // Verifică câștigător după fiecare mișcare
    checkWinner();
  };

  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        alert(`Player ${data[a]} wins!`);
        setLock(true);
        return;
      }
    }

    if (!data.includes("")) {
      alert("It's a draw!");
      setLock(true);
    }
  };

  const resetGame = () => {
    data = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll(".boxes").forEach((box) => (box.innerHTML = ""));
    setCount(0);
    setLock(false);
  };

  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Game <span>React</span>
      </h1>
      <div className="board">
        <div className="row-1">
          <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row-2">
          <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row-3">
          <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default TikTacToe;
