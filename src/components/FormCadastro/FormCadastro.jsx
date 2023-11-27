import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import './FormCadastro.css'

export default function FormCadastro() {
  const location = useLocation("");
  const stateType = location.state;

  const nameUser = useRef();
  const emailUser = useRef();
  const senhaUser = useRef();

  const [resposta, setResposta] = useState("");

  const url = "http://192.168.0.60:8000";

  const handleClick = async () => {
    try {
      const user = {
        nome: nameUser.current.value,
        email: emailUser.current.value,
        senha: senhaUser.current.value,
        type: "candidato",
        id: Math.random(1, 10000),
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setResposta(data);
    } catch (e) {
      console.error(e);
    }
  };

  const teste = () => {
    window.alert(stateType);
  };

  return (
    <form className="form-container"> 
      <input type="text" name="nome" placeholder="Nome" ref={nameUser} />
      <input type="text" name="email" placeholder="Email" ref={emailUser} />
      <input type="text" name="senha" placeholder="Senha" ref={senhaUser} />
      <button onClick={handleClick}>Enviar</button>
      <h1>{resposta}</h1>
    </form>
  );
}
