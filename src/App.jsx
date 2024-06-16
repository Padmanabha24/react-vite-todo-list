import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inputfunc from './components/Inputfunc'
import Deletefunc from './components/Deletefunc'

function App() {
  const [inputVal, setInput] = useState('')
  const [task, setTask] = useState([])

  function writetodo(e) {
    setInput(e.target.value)
  }

  function addtask() {
    if (inputVal.trim() !== '') {
      setTask((previousTask) => [...previousTask, inputVal])
      setInput('')
    }
  }
  function delTodo (todoIndex) {
    setTask((previousTask) =>previousTask.filter((previousTask, Previndex) => {
      return Previndex != todoIndex
    })
    )
  }
  

  return (
    <>
      <Inputfunc inputVal={inputVal} writetodo={writetodo} addtask={addtask} />
      <Deletefunc task={task} delTodo={delTodo} />
    </>
  )
}

export default App
