import React,{useState} from 'react'

function InputBanner(props) {
    const [inivalue,setvalue]=useState("");
    const addingtask=()=>{
        props.acceptNewTask(inivalue)
        setvalue("");
    }
    const setthetask = (e)=>{
        setvalue(e.target.value)
    }
    //console.log(thetask);
  return (
    <div className='input'>
    <input type='text' value={inivalue} onChange={setthetask}></input>
    <button onClick={addingtask}  color='blue'>+ Task</button>  
    </div>
  )
}

export default InputBanner
