import Perfil from "../components/Perfil/Perfil";
import Card from "../components/Card/Card";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import { Spinner } from "@material-tailwind/react";
import { FaPlusCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { useNavigate } from "react-router-dom";
import "./RecruiterArea.css";

export default function RecruiterArea() {
  const [data, setData] = useState({
    data: [],
    showVaga: false
  });
  const navigate = useNavigate("");
  // const [showVaga, setShowVaga] = useState(false);
  const userRecruiter = JSON.parse(sessionStorage.getItem("userAuth"));

  const URL_SUPABASE =
    "https://ixdptueotrcwtqqrizar.supabase.co/rest/v1/candidato";
  const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4ZHB0dWVvdHJjd3RxcXJpemFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNjIxNjgsImV4cCI6MjAxNDkzODE2OH0.Mo_Kp2NUYZ6APt-JmP8br6cOvPKM9HqZ33--cmpbstA";

  const options = {
    method: "GET",
    headers: {
      apikey: API_KEY,
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  };

  const hadleShowVagas = async () => {
    try {
      const { data: vaga, error } = await supabase
        .from("vaga")
        .select("*")
        .eq("id_recrutador", userRecruiter.cpf);

      if (error) {
        console.error(error);
        return;
      }
      
      setData({
        data: vaga,
        showVaga: true
      })
      
    } catch (error) {
      console.error(error);
    }
  };

  const getSupabaseCandidatos = async () => {
    try {
      const response = await fetch(URL_SUPABASE, options);
      const data = await response.json();

      setData({
        data: data,
        showVaga: false
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSupabaseCandidatos();
  }, []);

  return (
    <section className="recruiter-area">
      <Navbar />
      <button onClick={() => {navigate("/CreatePage")}} className="button-new-vaga" title="Criar vaga"><FaPlusCircle /></button>
      <div className="button-recuiter-area">
        <button onClick={() => {hadleShowVagas()}} className="button-action-recruiter">Ver minhas vagas</button>
        <button onClick={() => {getSupabaseCandidatos()}} className="button-action-recruiter">Ver Candidatos</button>
      </div>
      
      <div className="card-recruiter">
        {data.showVaga ? (
          data.data.map((e, i) => (
            <Card
              key={i}
              nome={e.nome}
              area={e.area}
              descricao={e.descricao}
              nomeEmpresa={e.nome_empresa}
              quantidade={e.quantidade}
              requisito={e.requisito}
              salario={e.salario}
              buttonAction={null}
              buttonTitle={"Ver Aplicações"}
            />
          ))
        ) : data.data.length !== 0 ? (
          data.data.map((e, i) => <Perfil key={i} user={e} />)
        ) : (
          <Spinner className="h-12 w-12 m-[auto] my-[20%]" color="blue" />
        )}
      </div>
      <Footer />
    </section>
  );
}