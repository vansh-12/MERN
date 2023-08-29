import React,{useState} from 'react'

function InputBanner(props) {
    const [inivalue,setvalue]=useState("");
    const addingtask=()=>{
      //intercommunicate components to parent app.js
        props.acceptNewTask(inivalue)
        setvalue("");
    }
    const setthetask = (e)=>{
      //final updated
        setvalue(e.target.value)
    }
    //console.log(thetask);
  return (
    <div className='input'>
    <input type='text' className='me-2 p-2 ms-2' value={inivalue} 
    onChange={setthetask}></input>
    <button className='btn btn-primary' onClick={addingtask}  color='blue'>+ Task</button>  
    </div>
  )
}

export default InputBanner
