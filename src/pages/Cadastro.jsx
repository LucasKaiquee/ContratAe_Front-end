import FormCadastro from "../components/FormCadastro/FormCadastro";
import Navbar from "../components/NavBar/Navbar";
import { useRef, useState } from "react";
import { supabase } from "../utils/supabase";

export default function Cadastro() {

  const nameUser = useRef();
  const emailUser = useRef();
  const senhaUser = useRef();
  const cpfUser = useRef();
  const confirmarSenhaUser = useRef();

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
      } else {
        const newUser = {
          cpf: cpfUser.current.value,
          nome: nameUser.current.value,
          email: emailUser.current.value,
          senha: senhaUser.current.value,
          uid: data.user.id
        };
  
        const options = {
          method: 'POST',
          headers: {
            'apikey': API_KEY,
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser)
        };

        console.log(user)

        const response = await fetch(URL_SUPABASE, options);
        const responseData = await response.json()
        console.log(responseData)
        // setUser(response)
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
          cpfUser={cpfUser}
          senhaUser={senhaUser}
          confirmarSenhaUser={confirmarSenhaUser}
        />
      </div>
    </section>
  );
}
