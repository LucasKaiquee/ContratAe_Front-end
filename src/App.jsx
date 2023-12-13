import { Route, Routes } from 'react-router-dom'
import { useState} from 'react'
import Entrar from './pages/Entrar'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './utils/ProtectedRoute'

function App() {

  const [ authenticated, setAuthenticated ] = useState(false)

  return (
    <Routes>
      <Route path="/Entrar" element={<Entrar setAuthenticated={setAuthenticated} />} />
      <Route path='/Dashboard' element={<ProtectedRoute authenticated={authenticated} />}>
        <Route path='/Dashboard' element={<Dashboard/>} />
      </Route>
      <Route path='/' element={<Home />} />
      <Route path='/Cadastro' element={<Cadastro />} />
    </Routes>
  )
}

export default App
