import FormCadastro from "../components/FormCadastro/FormCadastro";
import Navbar from "../components/NavBar/Navbar";
import { useRef } from "react";
import { supabase } from "../utils/supabase";
import { useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import hashPassword from "../utils/passwordHash";
import POST_SUPABASE from "../utils/postFunction";

export default function Cadastro() {

  const navigate = useNavigate("")

  const nameUser = useRef("");
  const emailUser = useRef("");
  const senhaUser = useRef("");
  const confirmarSenhaUser = useRef("");
  const cpfUser = useRef("");

  const handleClick = async () => {
    try {
      const {data, error} = await supabase.auth.signUp({
        email: emailUser.current.value,
        password: senhaUser.current.value,
      })

      if (error) {
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Esse Email já está registrado !"
        });
      } else {
        const userJson = data.user
        userJson.nome = nameUser.current.value
        const senha = await hashPassword(senhaUser.current.value)
        userJson.senha = senha
        userJson.cpf = cpfUser.current.value
        sessionStorage.setItem("userAuth", JSON.stringify(userJson))
        if(userJson.cpf != "") {
          await POST_SUPABASE("recrutador", {
            cpf: userJson.cpf,
            nome: userJson.nome,
            email: userJson.email,
            senha: userJson.senha,
            uid: userJson.id
          })
        }
        sessionStorage.setItem("authenticated", true)
        navigate("/CreatePage")
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
          senhaUser={senhaUser}
          cpfUser={cpfUser}
          confirmarSenhaUser={confirmarSenhaUser}
        />
      </div>
    </section>
  );
}
