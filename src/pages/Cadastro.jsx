import FormCadastro from "../components/FormCadastro/FormCadastro";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import { useRef, useState } from "react";
import { supabase } from "../utils/supabase";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import hashPassword from "../utils/passwordHash";
import POST_SUPABASE from "../utils/postFunction";

export default function Cadastro() {

  const navigate = useNavigate("")

  const nameUser = useRef();
  const emailUser = useRef();
  const senhaUser = useRef();
  const confirmarSenhaUser = useRef();
  const cpfUser = useRef()

  const [user, setUser] = useState({})

  // const [resposta, setResposta] = useState("");

  const URL_SUPABASE = "https://ixdptueotrcwtqqrizar.supabase.co/rest/v1/candidato"
  // const API_KEY = import.meta.env.SUPABASE_API_KEY
  const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4ZHB0dWVvdHJjd3RxcXJpemFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNjIxNjgsImV4cCI6MjAxNDkzODE2OH0.Mo_Kp2NUYZ6APt-JmP8br6cOvPKM9HqZ33--cmpbstA"

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
        localStorage.setItem("userAuth", JSON.stringify(userJson))
        if(userJson.cpf != "") {
          await POST_SUPABASE("recrutador", {
            cpf: userJson.cpf,
            nome: userJson.nome,
            email: userJson.email,
            senha: userJson.senha
          })
        }
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
    
      <Footer />
    </section>
  );
}
