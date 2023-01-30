import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter,setCounter] = useState(0)
  const Inc = ()=>{
    setCounter(counter+1)
  }
  const Desc = ()=>{
    setCounter(counter-1)
  }
  return (
    <div className="App">
      <div className="Box">
        <h1>Count</h1>
      <h2>{counter}</h2>
     <div className="btn">
     <button onClick={Inc} style={{"background":"#90EE90"}}>Increment</button>
      <button onClick={Desc} style={{"background":"red"}} disabled={!counter}>Decrement</button>
     </div>
     </div>
     <div><h4>Done by Mayank-12017110</h4></div>
    </div>
  );
}
