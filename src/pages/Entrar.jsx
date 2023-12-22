import FormLogin from "../components/FormEntrar/FormLogin";
import Navbar from "../components/NavBar/Navbar";
import POST_SPC from "../utils/postFunction";
import { useNavigate } from "react-router-dom/dist";
import { useRef } from "react";
import hashPassword from "../utils/passwordHash";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
export default function Entrar() {
  const type = sessionStorage.getItem("type")
  const navigate = useNavigate("");

  const senhaUser = useRef("");
  const cpfUser = useRef("");

  const handleButtonClick = async () => {
    try {
      const senha = await hashPassword(senhaUser.current.value);
      const response = await POST_SPC({
        protocol_msg: "login",
        type: type === "candiadato" ? "c" : "r",
        cpf: cpfUser.current.value,
        senha: senha,
      });

      const data = await response.json();

      console.log(data);

      if (
        data.status === "401 Unauthorized" ||
        data.status === "404 Not Found"
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email ou senha inválido !",
        });
      } else {
        sessionStorage.setItem("userAuth", cpfUser.current.value)
        sessionStorage.setItem("authenticated", true)
        navigate("/Dashboard")
      }
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
            Em um cenário profissional desafiador, a escolha certa pode ser a
            chave para o sucesso. ContratAe não é apenas uma plataforma de
            empregos; é uma ferramenta de transformação. Ao escolher ContratAe,
            você não apenas busca empregos; busca oportunidades que alinham-se
            com seus objetivos. Nossa inovação em recrutamento utiliza
            algoritmos avançados para sugerir oportunidades personalizadas, indo
            além das buscas convencionais.
          </p>
        </div>
        <FormLogin
          login={handleButtonClick}
          senhaUser={senhaUser}
          cpfUser={cpfUser}
        />
      </div>
    </section>
  );
}
