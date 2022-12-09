import React from "react";
import { useState, useReducer } from "react";

const reduceCurrNumber =(currState, action) => {
    console.log(currState, action)
    switch (action.type) {
        case 'increment' :
            return currState + action.data
        case 'decrement' :
            return currState - action.data
        default:
            return currState
    }
}

export default function CounterEx() {
  const [currNumber, setCurrNumber] = useReducer(reduceCurrNumber, 0)

  return (
    <div style={{display:'flex' ,justifyContent:'center'}}>
      <div style={{border: '1px solid black',borderRadius: '3px',maxWidth:'200px', display:'flex', justifyContent:'center'}}>{currNumber}</div>
      <button onClick={() => {
        setCurrNumber({
            type: 'increment',
            data: 1
        })
      }}>+1</button>
      <button onClick={() => {
        setCurrNumber({
            type: 'increment',
            data: 5
        })
      }}>+5</button>
      <button onClick={() => {
        setCurrNumber({
            type : 'decrement',
            data: 1
        })
      }}>-1</button>
      <button onClick={() => {
        setCurrNumber({
            type: 'decrement',
            data: 5
        })
      }}>-5</button>
    </div>
  );
}
