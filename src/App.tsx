// import { isTSAnyKeyword } from '@babel/types';
import React, { ChangeEvent, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import ITask from './interfaces';
import ToDoTask from './ToDoTask';

function App() {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]); // ITask interface is a type of array, so that we push all tasks in array

  const handleChangeClick = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === "task"){
      setTask(event.target.value);
    }
    else{
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = () => {
    const newTask = { taskname: task, deadline: deadline }
    setTodo([...todo, newTask]);
    // console.log(todo);
    setTask("");
    setDeadline(0);
  }

  const completeTask = (tasknameToDelete: string): void => {
    setTodo(todo.filter((task) => {
      return task.taskname != tasknameToDelete;
    }))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>TO-DO List App</h2>
        <div className="col" style={{padding: '15px'}}>
          <input className="form-control" type="text" placeholder="Task Description" name="task" value={task} onChange={handleChangeClick} />
          <input className="form-control" type="number" placeholder="Deadline in days" name="deadline" value={deadline} onChange={handleChangeClick} />
        </div>
        <button onClick={addTask} className="btn btn-primary">Add Task</button>
      </header>

      <div className="App" style={{width: '500px', height: '32vw', float: 'left', border: '2px solid #282c34', borderRadius: '10px', color: 'white', backgroundColor: '#282c34', margin: '5px'}}>
          <h2 style={{transform: 'rotate(270deg)', marginTop: '190px'}}>Tasks List with Deadline</h2>
      </div>

      <div className="App">
        {todo.map((task: ITask, key: number) => {
          return <ToDoTask key={key} task={task} completeTask={completeTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
