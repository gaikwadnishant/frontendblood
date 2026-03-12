import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Log } from './Components/Log'
import { Sign } from './Components/Sign'
import { Navbar } from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Log></Log> */}
      {/* <Sign/> */}
      <Navbar/>
    </>
  )
}

export default App
