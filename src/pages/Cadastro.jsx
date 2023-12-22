import FormCadastro from "../components/FormCadastro/FormCadastro";
import Navbar from "../components/NavBar/Navbar";
import { useRef } from "react";
import { supabase } from "../utils/supabase";
import { useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import hashPassword from "../utils/passwordHash";
import POST_SPC from "../utils/postFunction";

export default function Cadastro() {
  const type = sessionStorage.getItem("type")
  const navigate = useNavigate("")

  const nameUser = useRef("");
  const emailUser = useRef("");
  const senhaUser = useRef("");
  const confirmarSenhaUser = useRef("");
  const cpfUser = useRef("");
  const empresa = useRef("");

  const handleClick = async () => {
    try {
        const senha = await hashPassword(senhaUser.current.value)
        const response = await POST_SPC({
            "protocol_msg": "criar",
            "nome": nameUser.current.value,
            "email": emailUser.current.value,
            "cpf": cpfUser.current.value,
            "type": type === "candiadato" ? "c" : "r",
            "senha": senha,
            "empresa": empresa.current.value
        })
        const data = await response.json();
        console.log(data)
        if(data.status == "201 Created") {
          sessionStorage.setItem("authenticated", true)
          sessionStorage.setItem("userAuth", data.data)
          navigate("/CreatePage")
        } else if (data.status === "400 Bad Request") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data.message,
          });
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
          Em um cenário profissional desafiador, a escolha certa pode ser a chave para o sucesso. ContratAe não é apenas uma plataforma de empregos; é uma ferramenta de transformação. Ao escolher ContratAe, você não apenas busca empregos; busca oportunidades que alinham-se com seus objetivos. Nossa inovação em recrutamento utiliza algoritmos avançados para sugerir oportunidades personalizadas, indo além das buscas convencionais.
          </p>
        </div>
        <FormCadastro
          create={handleClick}
          nameUser={nameUser}
          emailUser={emailUser}
          senhaUser={senhaUser}
          cpfUser={cpfUser}
          confirmarSenhaUser={confirmarSenhaUser}
          empresa={empresa}
        />
      </div>
    </section>
  );
}
