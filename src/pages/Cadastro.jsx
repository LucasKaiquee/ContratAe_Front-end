import FormCadastro from "../components/FormCadastro/FormCadastro";
import Navbar from "../components/NavBar/Navbar";
import { useRef } from "react";

export default function Cadastro() {

  const nameUser = useRef();
  const emailUser = useRef();
  const senhaUser = useRef();
  const cpfUser = useRef();
  const confirmarSenhaUser = useRef();

  // const [resposta, setResposta] = useState("");

  const url = "http://localhost:8000";

  const handleClick = async () => {
    try {
      const user = {
        flag_protocol: "GET",
        action: "login",
        nome: nameUser.current.value,
        email: emailUser.current.value,
        senha: senhaUser.current.value,
        type: "c",
        cpf: cpfUser.current.value,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      console.log(user)
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data)
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="cadastro-container">
      <Navbar />

      <div className="login">
        <div className="text-content-cadastro">
          <h3 className="logo-title">
            Contrat<span>Ae</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos illo nemo autem quo ducimus nulla commodi qui odio
            obcaecati perspiciatis deleniti itaque atque odit quisquam quos,
            totam rerum fuga laboriosam!
          </p>
        </div>
        <FormCadastro
          create={handleClick}
          nameUser={nameUser}
          emailUser={emailUser}
          cpfUser={cpfUser}
          senhaUser={senhaUser}
          confirmarSenhaUser={confirmarSenhaUser}
        />
      </div>
    </section>
  );
}
