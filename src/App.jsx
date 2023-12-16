import { Route, Routes } from 'react-router-dom'
import { useState} from 'react'
import Entrar from './pages/Entrar'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './utils/ProtectedRoute'
import CreatePage from './pages/CreatePage'
import { useEffect } from 'react'


function App() {
  
  return (
    <Routes>
      <Route path="/Entrar" element={<Entrar />} />
      <Route path='/Dashboard' element={<ProtectedRoute />}>
        <Route path='/Dashboard' element={<Dashboard/>} />
      </Route>
      <Route path='/' element={<Home />} />
      <Route path='/Cadastro' element={<Cadastro />} />
      <Route path='/CreatePage' element={<CreatePage />} />
    </Routes>
  )
}

export default App
