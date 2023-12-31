import { useEffect, useState } from "react";
import { Square } from "./square";

import "./App.css"

const resetState=["","","","","","","","","",]

function App() {

  const [gameState, updateGameState] = useState(resetState);
  const [isXChance, updateIsXChance] = useState(false)
  const onUserClicked = (index) => {
     
    let temp = [...gameState];
    if (temp[index]) {
      return;
    }

    temp[index] = isXChance ? "X" : "O";
    updateIsXChance(!isXChance)
    updateGameState([...temp])
    


  }

  const handleReset = () => {
    updateGameState(resetState)
  }
  useEffect(() => {
    let winner = checkWinner();
    console.log(winner,"winner")
    if (winner==="X" || winner==="O") {
        handleReset();
        alert(`Congratulations, ${winner}, Looks like it is victory for ya!!`)
    } else if (winner === "draw") {
    
      alert(`Game ends in DRAW!!!`)
      handleReset();
    }
}, [gameState])

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let count = 0;
   
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] !== "" && gameState[b] !== "" && gameState[c] !== "") {
        count++;
}

      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
}

      if (count === 8) {
        return "draw"
      }
    }
    return null;
  }
  

  return (
    <div className="Game container" >
      <h1 className="title">Tic-Tac-Toe App</h1>
      <div className="row" >
        <Square classes1={"b-bottom-right"}  onClick={()=>onUserClicked(0)}  state={gameState[0]}  />
        <Square classes1={"b-bottom-right"} onClick={()=>onUserClicked(1)}  state={gameState[1]}  />
        <Square classes1="b-bottom" onClick={()=>onUserClicked(2)}  state={gameState[2]}  />
      </div>
      <div className="row">
        <Square classes1={"b-bottom-right"} onClick={()=>onUserClicked(3)}  state={gameState[3]}  />
        <Square classes1={"b-bottom-right"} onClick={()=>onUserClicked(4)}  state={gameState[4]}  />
        <Square classes1="b-bottom" onClick={()=>onUserClicked(5)}  state={gameState[5]}  />
      </div>
      <div className="row">
        <Square classes1="b-right" onClick={()=>onUserClicked(6)}  state={gameState[6]}  />
        <Square classes1="b-right" onClick={()=>onUserClicked(7)}  state={gameState[7]}  />
        <Square  onClick={()=>onUserClicked(8)}  state={gameState[8]}  />
      </div>
      <button onClick={handleReset} className="reset-btn">Reset Game</button>  
    </div>
  );
}

export default App; 
