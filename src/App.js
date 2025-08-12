// App.jsx
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

import { Background } from './components/background/Background'
import { SidebarMenu } from './components/sidebarMenu/sidebarMenu'
import { GamePage } from './pages/GamePage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { WelcomePage } from './pages/WelcomePage'

function App() {
  const location = useLocation()
  const hideSidebarRoutes = ['/login', '/register', '/']

  return (
    <>
      <Background />
      {!hideSidebarRoutes.includes(location.pathname) && <SidebarMenu />}

      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/game/:id' element={<GamePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
