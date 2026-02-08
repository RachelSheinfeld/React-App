import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './componnents/Message'
import Mod from './componnents/Mode'
import Timer from './componnents/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Message/>
   <Mod/>
   <Timer/>
    </>
  )
}

export default App
