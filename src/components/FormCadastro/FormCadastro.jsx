import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import validaCPF from "../../utils/validaCPF";

export default function FormCadastro({
  nameUser,
  emailUser,
  senhaUser,
  confirmarSenhaUser,
  cpfUser,
  create
}) {

  const [validation, setValidation] = useState(true);

  const location = useLocation("");
  const [stateType, setStateType] = useState(location.state);

  useEffect(() => {
    localStorage.setItem("type", stateType);
  }, [stateType]);

  // const validarsenha = (senha, confirmar) => {
  //   if (senha === confirmar) setValidation(true);
  //   else setValidation(false);
  // };

  const handleButtonClick = () => {
    const cpfInput = cpfUser.current.value;
    if (validaCPF(cpfInput)) {
      setValidation(true)
      create
    } else {
      setValidation(false)
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
        <input
          type="text"
          name="cpf"
          className={stateType === "recrutador" ? "" : "hidden"}
          placeholder="CPF"
          ref={cpfUser}
        />
        <span className={validation ? "hidden" : "text-[red] text-lg w-[70%]"}>
          CPF inválido !
        </span>
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          ref={senhaUser}
        />
        <input
          type="password"
          name="senha"
          placeholder="Confirmar senha"
          ref={confirmarSenhaUser}
        />
        <span className={validation ? "hidden" : "text-[red] text-lg w-[70%]"}>
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
