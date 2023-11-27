import { Route, Routes } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cadastro' element={<Cadastro />} />
    </Routes>
  )
}

export default App
