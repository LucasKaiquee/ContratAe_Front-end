import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function FormCadastro() {
  //const navigate = useNavigate("");
  const location = useLocation("");

  const [stateType, setStateType] = useState(location.state);

  const nameUser = useRef();
  const emailUser = useRef();
  const senhaUser = useRef();

  //const [resposta, setResposta] = useState("");

  const url = " https://47ea-200-129-79-47.ngrok-free.app";
  
  const handleClick = async () => {
    try {
      const user = {
        nome: nameUser.current.value,
        email: emailUser.current.value,
        senha: senhaUser.current.value,
        type: stateType,
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
      console.log(data)
    } catch (e) {
      console.error(e);
    }
  };

  if (stateType) {
    return (
      <form className="form-container">
        <h3>
          Criar conta: <br /> 
        </h3>
        <input name="nome" placeholder="Nome" ref={nameUser} />
        <input type="text" name="email" placeholder="Email" ref={emailUser} />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          ref={senhaUser}
        />
        <input
          type="password"
          name="senha"
          placeholder="Confirmar Senha"
          ref={senhaUser}
        />
        <button onClick={handleClick}>Criar conta</button>
      </form>
    );
    
  } else {
    return (
      <div className="question-type-user">
        <h3>Você é ?</h3>
        <button
          className="button-type-user"
          onClick={() => setStateType("recrutador")}
        >
          Recrutador
        </button>
        <button
          className="button-type-user"
          onClick={() => setStateType("candidato")}
        >
          Candidato
        </button>
      </div>
    );
  }
}
