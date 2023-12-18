import FormLogin from "../components/FormEntrar/FormLogin";
import Navbar from "../components/NavBar/Navbar";
import { useNavigate } from "react-router-dom/dist";
import { useRef } from "react";
import { supabase } from "../utils/supabase";
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
export default function Entrar() {
  const navigate = useNavigate('')

  const senhaUser = useRef("");
  const emailUser = useRef("");
  
  const handleButtonClick = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailUser.current.value,
        password: senhaUser.current.value
      })
  
      if(error) {
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email ou senha inválido !"
        });

      } else {

        const {data: user, e} = await supabase
        .from("candidato") 
        .select('*')
        .eq('uid', data.user.id);
        
        if(user.length === 0) {
          const {data: user, e} = await supabase
          .from("recrutador") 
          .select('*')
          .eq('uid', data.user.id);
          console.log(data.user.id)
          console.log(user)

          sessionStorage.setItem("userAuth", JSON.stringify(user[0]))
          sessionStorage.setItem("authenticated", true)
          navigate("/RecruiterArea")
          
        } else {

          sessionStorage.setItem("userAuth", JSON.stringify(user[0]))
          sessionStorage.setItem("authenticated", true)
          navigate("/Dashboard") 

        }
      }
  
      console.log(data.user)
    } catch(e) {
      console.error(e)
    }
    
  }

  return (
    <section className="cadastro-container">
        <Navbar />
        <div className="login">
          <div className="text-content-cadastro"> 
            <h3 className="logo-title">Contrat<span>Ae</span></h3>
            <p>Em um cenário profissional desafiador, a escolha certa pode ser a chave para o sucesso. ContratAe não é apenas uma plataforma de empregos; é uma ferramenta de transformação. Ao escolher ContratAe, você não apenas busca empregos; busca oportunidades que alinham-se com seus objetivos. Nossa inovação em recrutamento utiliza algoritmos avançados para sugerir oportunidades personalizadas, indo além das buscas convencionais.</p>
          </div>
            <FormLogin
             login={handleButtonClick}
             senhaUser={senhaUser}
             emailUser={emailUser}
             />
        </div>

    </section>
  );
}
