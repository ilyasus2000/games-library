import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

import { GamePage } from './pages/GamePage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/game/:id' element={<GamePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
