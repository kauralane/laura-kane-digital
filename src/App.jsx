import { useState } from 'react'
import MyNavbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyNavbar />
    </>
  )
}

export default App
 