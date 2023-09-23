import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'

function App() {

  function increase() {
    alert("Hello Mr")
  }
  const increase2 = () => {
    alert("Btn 2 clicked")
  }

  return (
    <>

      <h1>Vite + React</h1>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium earum excepturi aspernatur enim numquam? Quam unde dolore in non provident. Recusandae, esse neque ullam fuga quidem repellat numquam ipsum, voluptatibus laudantium minus beatae. Ex, explicabo.</p>
      <button onClick={Team}><Team></Team></button>
      <button onClick={increase}>Increase</button>
      <button onClick={increase2}>Click 2 </button>

    </>
  )
}

export default App
