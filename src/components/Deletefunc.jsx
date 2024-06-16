import React from 'react';
import Task from './Task';
// import './App.css';

function DeleteFunc({ task, delTodo }) {
  return (
    <div className="tasks-section border-solid">
      {task.map((task, index) => (
        <Task key={index} task={task} index={index} delTodo={delTodo} />
      ))}
    </div>
  );
}

export default DeleteFunc;
