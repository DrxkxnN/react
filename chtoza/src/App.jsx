import { useState } from 'react'
import gif from './assets/что-за-бизнес-мелстрой.mp4'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <video autoplay="autoplay" controls="controls" src={gif} className='gif' alt="" />
      </div>
      <h1>WHAT a business bitch</h1>
      <div className="card">
        <p>
        </p>
      </div>
      <p className="read-the-docs">
      </p>
    </>
  )
}

export default App
