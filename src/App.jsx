import { useRef, useState} from 'react'
import './App.css'

function App() {
  const nameUser = useRef()
  const emailUser = useRef()
  const senhaUser = useRef()

  const [resposta, setResposta] = useState("") 

  const url = "http://192.168.56.1:8000"

  const handleClick = async () => {
    try {
      const user = {
        nome: nameUser.current.value,
        email: emailUser.current.value,
        senha: senhaUser.current.value,
        type: "candidato",
        id: Math.random(1, 10000)
      }

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }

      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)
      setResposta(data)

    } catch(e) {
      console.error(e)
    }

  }

  return (
    <>
      <input type="text" name="nome" ref={nameUser}/>
      <input type="text" name='email' ref={emailUser}/>
      <input type="text" name='skill' ref={senhaUser}/>
      <button onClick={handleClick}>Enviar</button>
      <h1>{resposta.mensagem}</h1>
    </>
  )
}

export default App
