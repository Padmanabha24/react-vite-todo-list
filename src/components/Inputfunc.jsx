import React from 'react'

function Inputfunc({ inputVal, writetodo, addtask }) {
  return (
    <div className='Input-container'>
      <h1>Todo list using react</h1>
      <input type="text" value={inputVal} onChange={writetodo} />
      <button onClick={addtask}>Add</button>
      
    </div>
  )
}

export default Inputfunc
