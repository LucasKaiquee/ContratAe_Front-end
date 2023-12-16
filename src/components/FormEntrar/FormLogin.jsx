import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function FormLogin({ login, cpfUser, senhaUser, emailUser}) {
  const location = useLocation("");
  const navigate = useNavigate("")

  const [stateType, setStateType] = useState(location.state)

  if (stateType) {
    return (
      <div className="form-container"> 
        <h3>Entrar como: <br/>
         {stateType}
        </h3>
        <input type="email" name="email" placeholder="Email" ref={emailUser} />
        <input type="text" name="CPF" placeholder="CPF" ref={cpfUser}  />
        <input type="text" name="senha" placeholder="Senha" ref={senhaUser}  />
        <button onClick={login}>Entrar</button>
        <p>Não tem cadastro ?</p>
        <button onClick={() => (navigate('/cadastro', {state: stateType}))}>Criar conta</button>
      </div>
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
