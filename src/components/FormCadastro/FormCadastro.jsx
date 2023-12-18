import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function FormCadastro({
  nameUser,
  emailUser,
  senhaUser,
  confirmarSenhaUser,
  cpfUser,
  create
}) {

  const [validation, setValidation] = useState({
    senha: true,
    email: true,
    cpf: true,
    senhaConfirm: true,
  });

  const location = useLocation("");
  const [stateType, setStateType] = useState(location.state);

  useEffect(() => {
    sessionStorage.setItem("type", stateType);
  }, [stateType]);

  const handleButtonClick = () => {

    let cpfInput = cpfUser.current.value;
    const senha = senhaUser.current.value;
    const senhaconfirm = confirmarSenhaUser.current.value;
    const email = emailUser.current.value;

    const cpfRegex = /^\d{3}\d{3}\d{3}\d{2}$/;
    if(stateType === "recrutador") {
      if (cpfRegex.test(cpfInput)) {
        setValidation(prevValidation => ({ ...prevValidation, cpf: true }));
      } else {
        setValidation(prevValidation => ({ ...prevValidation, cpf: false }));
      }
    } else {
      cpfInput = 12312312312;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setValidation(prevValidation => ({ ...prevValidation, email: true }));
    } else {
      setValidation(prevValidation => ({ ...prevValidation, email: false }));
    }

    if (senha.length >= 6) {
      setValidation(prevValidation => ({ ...prevValidation, senha: true }));
    } else {
      setValidation(prevValidation => ({ ...prevValidation, senha: false }));
    }

    if (senha === senhaconfirm) {
      setValidation(prevValidation => ({ ...prevValidation, senhaConfirm: true }));
    } else {
      setValidation(prevValidation => ({ ...prevValidation, senhaConfirm: false }));
    }

    if (
      cpfRegex.test(cpfInput) &&
      emailRegex.test(email) &&
      senha.length >= 6 &&
      senha === senhaconfirm
    ) {
      create();
    }
  };

  if (stateType) {
    return (
      <div className="form-container">
        <h3 className="">
          Criar conta: <br />
          {stateType}
        </h3>
        <input name="nome" placeholder="Nome" ref={nameUser} />
        <input type="text" name="email" placeholder="Email" ref={emailUser} />
        <span className={validation.email ? "hidden" : "text-[red] text-lg w-[70%]"}>
          Email inválido !
        </span>
        <input
          type="text"
          name="cpf"
          className={stateType === "recrutador" ? "" : "hidden"}
          placeholder="CPF"
          ref={cpfUser}
        />
        <span className={validation.cpf ? "hidden" : "text-[red] text-lg w-[70%]"}>
          CPF inválido !
        </span>
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          ref={senhaUser}
        />
        <span className={validation.senha ? "hidden" : "text-[red] text-lg w-[70%]"}>
          A senha deve ter 6 ou mais caracteres !
        </span>
        <input
          type="password"
          name="senha"
          placeholder="Confirmar senha"
          ref={confirmarSenhaUser}
        />
        <span className={validation.senhaConfirm ? "hidden" : "text-[red] text-lg w-[70%]"}>
          Senhas diferentes !
        </span>
        <button onClick={handleButtonClick}>Criar conta</button>
      </div>
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
