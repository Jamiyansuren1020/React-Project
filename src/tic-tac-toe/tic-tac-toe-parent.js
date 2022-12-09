import React, { useState } from "react";
// import GameTool from "./tic-tac-toe-child";

const winProb = [
  [0, 1, 2],
  [(0, 3, 6)],
  [(0, 4, 8)],
  [(1, 4, 7)],
  [(2, 4, 6)],
  [(2, 5, 8)],
  [(3, 4, 5)],
  [(6, 7, 8)],
];

const GameIndex = () => {
  const [toy, setToy] = useState();
  const [tileData, setTileData] = useState({});
  const [currSymbol, setCurrSymbol] = useState('X')
  
  const check = (tileIdx)=>{
    setTileData ((currState)=> {
        return {...currState, [tileIdx] : currSymbol}
    })
     winProb.forEach(winner)
     function winner(arr) {

     }



    setCurrSymbol((currState)=>{
        return currState==='X' ? "O" : "X"
    })
  }

  return (
    <div>
      <div className="container-tic-tac" style={{ display: 'flex', flexWrap: 'wrap',width:'130px', justifyContent:'center'}}>
        {[...Array(9)].map((tile, tileIdx) => {
          return <button style={{width:'40px',justifyContent:'center', alignContent:'center'}}key={tileIdx} onClick={()=> {
           !tileData[tileIdx] && check(tileIdx)
           
         
          }}>{tileData[tileIdx]}</button>;
        })}
      </div>
      
      <div>{JSON.stringify(tileData, null, 2)}</div>
    </div>
  );
};

export default GameIndex;
