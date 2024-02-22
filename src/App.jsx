import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/Navbar'
import { Home, Contact, Services, Work, Custom404 } from './components/Pages'
import './App.css'

function App() {

  return (
    <Router basename={`/laura-kane-digital`}>
      <MyNavbar />

      <Routes>
        <Route path="/work" element={< Work />} />
        <Route path="/services" element={< Services />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/404" element={< Custom404 />} />
        <Route path="" element={< Home />} />
      </Routes>

    </Router>
  )
}

export default App
