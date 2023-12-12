import { Route, Routes } from 'react-router-dom'
import Entrar from './pages/Entrar'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import CreatePage from './pages/CreatePage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Entrar' element={<Entrar />} />
      <Route path='/Cadastro' element={<Cadastro />} />
      <Route path='/CreatePage' element={<CreatePage />} />
    </Routes>
  )
}

export default App
