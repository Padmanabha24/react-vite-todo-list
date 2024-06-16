import React from 'react'

function Task({ task,index,delTodo }) {
  return (
    <div className="delete-container border-solid">
      <p>{task}</p>
      <div className="actions">
        <input type="checkbox" />
        <button onClick={()=>delTodo(index)}>delete</button>
      </div>
    </div>
  )
}

export default Task
