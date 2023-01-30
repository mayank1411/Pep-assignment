import './App.css';
import { useState } from 'react';
import Welcome from './Welcome';


function App() {
  const [name, setName] = useState("")
  const [regNo,setRegNo] = useState("")
  const [submit,setSubmit] = useState(false)
  return (
    
   <div>
    <div>
    <label>Name</label>
    <input
     placeholder='Enter name' 
     value={name} 
     onChange={(event)=>{setName(event.target.value)}}></input>
    <label>Registration Number</label>
    <input placeholder='Enter Registration Number'
    value={regNo} 
     onChange={(event)=>{setRegNo(event.target.value)}}
    ></input>
    </div>
    <div><button onClick={()=>{setSubmit(!submit)}}>Submit</button></div>
   
    {(submit && name && regNo) && <Welcome name={name} regNo={regNo}></Welcome>}
    
   </div>
  );
}

export default App;
