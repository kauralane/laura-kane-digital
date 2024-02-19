import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/Navbar'
import { Home, Contact, Services, Work } from './components/Pages'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router basename={'/'}>
      <MyNavbar />

      <Routes>
        <Route path='/work' element={< Work />} />
        <Route path='/services' element={< Services />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='' element={< Home />} />
      </Routes>

    </Router>
  )
}

export default App
