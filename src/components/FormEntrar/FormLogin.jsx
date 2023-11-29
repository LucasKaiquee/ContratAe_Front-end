import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function FormLogin() {
  const location = useLocation("");
  const navigate = useNavigate("")
  
  const [resposta, setResposta] = useState("");
  const [stateType, setStateType] = useState(location.state)

  const emailUser = useRef();
  const senhaUser = useRef();

  const url = "https://localhost:8080";

  const handleClick = async () => {
    try {

      const user = {
        email: emailUser.current.value,
        senha: senhaUser.current.value,
        type: stateType,
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

  // const teste = () => {
  //   window.alert(stateType);
  // };

  if (stateType) {
    return (
      <form className="form-container"> 
        <h3>Entrar como: <br/> {stateType}</h3>
        <input type="text" name="email" placeholder="Email" ref={emailUser} />
        <input type="text" name="senha" placeholder="Senha" ref={senhaUser} />
        <button onClick={handleClick}>Entrar</button>
        <p>Não tem cadastro ?</p>
        <button onClick={() => (navigate('/cadastro', {state: stateType}))}>Criar conta</button>
      </form>
    );
  } else {

    return (
        <div className="question-type-user">
          <h3>
            Você é ?
          </h3>
          <button className="button-type-user" onClick={() => (setStateType('recrutador'))}>Recrutador</button>
          <button className="button-type-user" onClick={() => (setStateType('candidato'))}>Candidato</button>
        </div>
    );
  }

 
}
