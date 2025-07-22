import { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { GamePage } from './pages/GamePage'
import { HomePage } from './pages/HomePage'

function App() {
  useEffect(() => {
    document.title = 'Mind Game'
  }, [])
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/game' element={<GamePage />} />
      </Routes>
    </Router>
  )
}

export default App
