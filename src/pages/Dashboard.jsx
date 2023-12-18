import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2";
import Perfil from "../components/Perfil/Perfil";
import POST_SUPABASE from "../utils/postFunction";
import { Spinner } from "@material-tailwind/react";
import "./Dashboard.css";

export default function Dashboard() {
  const user = JSON.parse(sessionStorage.getItem("userAuth"));

  const [showPerfil, setShowPerfil] = useState({
    status: false,
    class: "",
  });
  const [showSidebar, setShowSidebar] = useState(false);
  const [vaga, setVaga] = useState([]);
  const type = sessionStorage.getItem("type");

  const URL_SUPABASE = "https://ixdptueotrcwtqqrizar.supabase.co/rest/v1/vaga";
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

  const getSupabaseVaga = async () => {
    try {
      setShowPerfil({
        status: false,
        class: "",
      });

      const response = await fetch(URL_SUPABASE, options);
      const data = await response.json();

      setVaga(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleShowPerfil = () => {
    setShowPerfil({
      status: true,
      class: "hidden",
    });
  };

  const showCandidaturas = () => {
    Swal.fire("Em fase de testes ! Logo estará disponível");
  };

  const candidatar = async (vaga) => {
    const response = await POST_SUPABASE("candidaturas", {
      id_candidato: user.cpf,
      id_vaga: vaga,
    });

    if (response.ok) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Candidatura Registrada !",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Você já se candidatou",
      });
    }
  };

  useEffect(() => {
    getSupabaseVaga();
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <section className="dash-section">
      <Navbar />
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
        {showSidebar ? <IoMdClose /> : <FaBars />}
      </button>
      <aside className={showSidebar ? "menu-lateral" : "hidden"}>
        <SideBar
          perfil={handleShowPerfil}
          vaga={getSupabaseVaga}
          candidatura={showCandidaturas}
          type={type}
        />
      </aside>
      <div
        className={
          vaga.length !== 0
            ? "info-area " + showPerfil.class
            : "spinner-container"
        }
      >
        {vaga.length !== 0 ? (
          vaga.map((e, i) => (
            <Card
              key={i}
              nome={e.nome}
              area={e.area}
              descricao={e.descricao}
              nomeEmpresa={e.nome_empresa}
              quantidade={e.quantidade}
              requisito={e.requisito}
              salario={e.salario}
              buttonAction={() => candidatar(vaga[i].id_vaga)}
              buttonTitle={"Cndidatar - se"}
            />
          ))
        ) : (
          <Spinner className="h-12 w-12" color="blue" />
        )}
      </div>
      <div className={showPerfil.status ? "" : "hidden"}>
        <Perfil user={user} />
      </div>
      <Footer />
    </section>
  );
}
