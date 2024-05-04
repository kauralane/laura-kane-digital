import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/Navbar'
import { Home, Contact, Services, Work, Custom404 } from './components/Pages'
import './App.css'
import MyFooter from './components/Footer'

function App() {

  return (
    <Router basename={`/laura-kane-digital`}>
      <MyNavbar />

      <Routes>
        <Route path='/work' element={< Work />} />
        <Route path='/services' element={< Services />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/404' element={< Custom404 />} />
        <Route path='' element={< Home />} />
      </Routes>

      <MyFooter />
    </Router>
  )
}

export default App
