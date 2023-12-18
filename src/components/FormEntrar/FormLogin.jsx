import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function FormLogin({ login, senhaUser, emailUser}) {
  const location = useLocation("");
  const navigate = useNavigate("")

  const [stateType, setStateType] = useState(location.state)
  const [validation, setValidation] = useState({
    email: true,
    senha: true,
  });

  const handleLogin = () => {

    const email = emailUser.current.value;
    const senha = senhaUser.current.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setValidation(prevValidation => ({ ...prevValidation, email: true }));
    } else {
      setValidation(prevValidation => ({ ...prevValidation, email: false }));
    }

    if (senha) {
      setValidation(prevValidation => ({ ...prevValidation, senha: true }));
    } else {
      setValidation(prevValidation => ({ ...prevValidation, senha: false }));
    }

    if (emailRegex.test(email) && senha) {
      login();
    }
  }

  useEffect(() => {
    sessionStorage.setItem("type", stateType);
  }, [stateType]);

  if (stateType) {
    return (
      <div className="form-container"> 
        <h3>Entrar como: <br/>
         {stateType}
        </h3>
        <input type="email" name="email" placeholder="Email" ref={emailUser} />
        <span className={validation.email ? "hidden" : "text-[red] text-lg w-[70%]"}>
          Email inválido!
        </span>
        <input type="text" name="senha" placeholder="Senha" ref={senhaUser}  />
        <span className={validation.senha ? "hidden" : "text-[red] text-lg w-[70%]"}>
          Senha obrigatória!
        </span>
        <button onClick={handleLogin}>Entrar</button>
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
