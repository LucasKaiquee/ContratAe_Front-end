import FormLogin from "../components/FormEntrar/FormLogin";
import Navbar from "../components/NavBar/Navbar";
import { useNavigate } from "react-router-dom/dist";
import { useRef, useState } from "react";
import { supabase } from "../utils/supabase";


// eslint-disable-next-line react/prop-types
export default function Entrar({ setAuthenticated }) {
  const navigate = useNavigate('')

  const [user, setUser] = useState("")

  const cpfUser = useRef();
  const senhaUser = useRef();
  const emailuser = useRef();

  // const URL_SUPABASE = import.meta.env.SUPABASE_API_URL
  // console.log(URL_SUPABASE)
  const URL_SUPABASE = "https://ixdptueotrcwtqqrizar.supabase.co/rest/v1/candidato"
  // const API_KEY = import.meta.env.SUPABASE_API_KEY
  const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4ZHB0dWVvdHJjd3RxcXJpemFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNjIxNjgsImV4cCI6MjAxNDkzODE2OH0.Mo_Kp2NUYZ6APt-JmP8br6cOvPKM9HqZ33--cmpbstA"

  const teste = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'lucaskaique32244@gmail.com',
      password: 'tijolo1',
    })

    console.log(data)
  }

  const handleClick = async () => {
    try {

    // const { data, error } = await supabase.auth.signInWithIdToken({
    //   provider: 'google',
    //   token: API_KEY
    // })

    // console.log(data)
    setUser(data.user)
    console.log(data.user)
    console.log(data.user.id)
    // console.log(error)

    const newUSer = {
          "cpf": cpfUser.current.value,
          "nome": "Lucas Teste",
          "email": "lucaskaique32244@gmail.com",
          "senha": senhaUser.current.value,
          "uid": data.user.id
    }

    const options = {
      method: 'POST',
      headers: {
        'apikey': API_KEY,
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUSer)
    };

    const response = await fetch(URL_SUPABASE, options)
    const data1 = await response.json()

    console.log(data1)
    
    } catch(e) {
      console.error(e)
    }
    

  //   try {
  //   //   const response = await supabase
  //   //     .from("candidato")
  //   //     .select("*")
  //   //     .eq("cpf", cpfUser.current.value)
  //   //     .single();

  //   //     setUser(response.data)
  //   //     console.log(user)
  //   //     if (senhaUser.current.value != user.senha) {
  //   //       console.log("Senha inválida")
  //   //     }

  //   // } catch(e) {
  //   //   console.error(e)
  //   // }

  //   // // setAuthenticated(true)
  //   // // navigate("/Dashboard")
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
             login={teste}
             cpfUser={cpfUser}
             senhaUser={senhaUser}
             emailuser={emailuser}
             />
        </div>
    </section>
  );
}
