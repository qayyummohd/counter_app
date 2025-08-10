import React,{ useState } from 'react';
import './App.css';
function Counter(){
  const [count,setcount]=useState(0);
  return(
    <div className="App">
      <h1>Counter</h1>
      <div className="display">
        <span>{count}</span>
      </div>
      <div className="buttons">
        <button className="inc" onClick={()=>setcount(count+1)}>+</button>
        <button className="dec" onClick={()=>setcount(count-1)}>-</button>
        <button className="reset" onClick={()=>setcount(0)}>Reset</button>
      </div>
    </div>
  )
}
export default Counter;
