import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { textarea } from "@material-tailwind/react";

export default function FormLogin(props) {
  // const location = useLocation("");
  // const navigate = useNavigate("")
  
  // const [resposta, setResposta] = useState("");
  // const [stateType, setStateType] = useState(location.state)

  //const emailUser = useRef();
  //const senhaUser = useRef();

  const url = "https://localhost:8000";

  // const handleClick = async () => {
  //   try {

  //     const user = {
  //       flag_protocol: "GET",
  //       action: "login",
  //       email: emailUser.current.value,
  //       senha: senhaUser.current.value,
  //       type: 'c',
  //     };

  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     };

  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //     window.alert(data)
  //     setResposta(data);

  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // const handleClick = () => {
  //   axios
  //     .get(`http://localhost:8000`)
  //     .then((response) => {
  //       // setResposta(response.data.results)
  //       console.log(response)
  //     })
  //     .catch((error) =>{
  //       console.error(error)
  //     })
  // }

  // const teste = () => {
  //   window.alert(stateType);
  // };

  //if (stateType) {
    return (
      <form className="form-container"> 
        <h3>Entrar como: <br/> </h3>
        <input type="text" name="email" placeholder="Email"  />
        <input type="text" name="senha" placeholder="Senha"  />
        <button onClick={props.handleClick}>Entrar</button>
        <p>Não tem cadastro ?</p>
        {/* <button onClick={() => (navigate('/cadastro', {state: stateType}))}>Criar conta</button> */}
      </form>
    );
  // } else {

  //   return (
  //       <div className="question-type-user">
  //         <h3>
  //           Você é ?
  //         </h3>
  //         <button className="button-type-user" onClick={() => (setStateType('recrutador'))}>Recrutador</button>
  //         <button className="button-type-user" onClick={() => (setStateType('candidato'))}>Candidato</button>
  //       </div>
  //   );
  // }

 
}
