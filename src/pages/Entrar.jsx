import FormLogin from "../components/FormEntrar/FormLogin";
import Navbar from "../components/NavBar/Navbar";
import { useNavigate } from "react-router-dom/dist";
import { useRef } from "react";
import { supabase } from "../utils/supabase";
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
export default function Entrar() {
  const navigate = useNavigate('')
  const stateType = sessionStorage.getItem("type")

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
        console.log(user)
        sessionStorage.setItem("userAuth", JSON.stringify(user[0]))
        sessionStorage.setItem("authenticated", true)
        navigate("/Dashboard")
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illo nemo autem quo ducimus nulla commodi qui odio obcaecati perspiciatis deleniti itaque atque odit quisquam quos, totam rerum fuga laboriosam!</p>
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
