import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [todolist, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const newToDoList = [...todolist, newTask];
    setToDoList(newToDoList);
  }
  return (
    <div className="App">
      <div className="addTask">
        <input onchange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todolist.map((task) => {
          return <h1>{task}</h1 >

        })}
      </div>
     
    </div>
  );
}

export default App;
