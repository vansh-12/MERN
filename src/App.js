//import logo from './logo.svg';
import './App.css';
import Todo from './Component/Todo';
import InputBanner from './Component/InputBanner';
import OutputBanner from './Component/OutputBanner';
import React,{useState,useEffect} from 'react';


function App() {
  let [items,setitems] = useState([]);
  const acceptNewTask = (task) =>{
    let newTaskArr = [...items,task];
    setitems(newTaskArr)
  }
  return (
    
      <div>
        <h1>Welcome To Todo list</h1>
        <InputBanner acceptNewTask={acceptNewTask}></InputBanner>
        <OutputBanner list={items}></OutputBanner>

        <Todo />
      </div>
    
  );
}

export default App;
