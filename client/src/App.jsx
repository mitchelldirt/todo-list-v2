import { useState } from 'react'
// import { getResponse, postResponse } from './services/testAPI'
import reactLogo from './assets/react.svg'
import './App.css'
import { Task } from './components/main/task/task'

// console.log(await postResponse.text())
// console.log(await getResponse.text())

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Task 
        title='hello'
        description='This task is cool'
        dueDate='2022-11-30'
        priority='5' />
    </div>
  )
}

export default App
