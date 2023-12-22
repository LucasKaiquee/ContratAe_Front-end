import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2";
import Perfil from "../components/Perfil/Perfil";
import POST_SPC from "../utils/postFunction";
import { Spinner } from "@material-tailwind/react";
import "./Dashboard.css";

export default function Dashboard() {
  const user = sessionStorage.getItem("userAuth");

  const [showPerfil, setShowPerfil] = useState({
    status: false,
    class: "",
    cand: false
  });

  const [showSidebar, setShowSidebar] = useState(true);
  const [vaga, setVaga] = useState([]);
  const [userPerfil, setUserPerfil] = useState({});
  const type = sessionStorage.getItem("type");

  const getVaga = async (protocolMsg) => {
    try {
      toggleSidebar()
      const response = await POST_SPC({
        protocol_msg: protocolMsg,
        type: "c",
        cpf: user,
      });
      const data = await response.json();

      if (protocolMsg === "verPerfil") {
        setUserPerfil(data.data);
        setVaga([]);
        setShowPerfil({
          status: true,
          class: "hidden",
          cand: false
        });
      } else if (protocolMsg === "verVagas") {
        setShowPerfil({
          status: false,
          class: "",
          cand: false
        });
        setVaga(data.data);
      } else {
        if(data.status === "200 OK"){
          setVaga(data.data);
          setShowPerfil({
            status: false,
            class: "",
            cand: true
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data.message,
          });
        }

      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getVaga("verVagas");
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const candidatura = async (protocol, vaga, i) => {
    const response = await POST_SPC({
        "protocol_msg": protocol,
        "idVaga": vaga[i].id_vaga,
        "cpf": user
    })
    const data = await response.json()
    console.log(data)
    if(data.status === "200 OK") {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sucesso !",
        showConfirmButton: false,
        timer: 1500
      }) 

      if(vaga.length === 1) {
        protocol === "cancelarCandidatura" ? getVaga("verVagas") : null
      } else {
        protocol === "cancelarCandidatura" ? getVaga("verCandidaturas") : null
      }
    } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.message 
        });
      }
  }

  if (showPerfil.status != true) {
    return (
      <section className="dash-section">
        <Navbar />
        <button className="toggle-sidebar-button" onClick={toggleSidebar}>
          {showSidebar ? <IoMdClose /> : <FaBars />}
        </button>
        <aside className={showSidebar ? "menu-lateral" : "hidden"}>
          <SideBar
            perfil={() => getVaga("verPerfil")}
            vaga={() => getVaga("verVagas")}
            candidatura={() => getVaga("verCandidaturas")}
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
                buttonAction={() =>{
                  showPerfil.cand ? candidatura("cancelarCandidatura", vaga, i) : candidatura("candidatar", vaga, i)
                }}
                buttonTitle={showPerfil.cand ? "Cancelar" : "Candidatar - se"}
              />
            ))
          ) : (
            <Spinner className="h-12 w-12" color="blue" />
          )}
        </div>
        <Footer />
      </section>
    );
  } else {
    return (
      <section className="dash-section">
        <Navbar />
        <button className="toggle-sidebar-button" onClick={toggleSidebar}>
          {showSidebar ? <IoMdClose /> : <FaBars />}
        </button>
        <aside className={showSidebar ? "menu-lateral" : "hidden"}>
          <SideBar
            perfil={() => getVaga("verPerfil")}
            vaga={() => getVaga("verVagas")}
            candidatura={() => getVaga("verCandidaturas")}
            type={type}
          />
        </aside>
        <div className="w-[100vw]">
          <Perfil user={userPerfil} />
        </div>
      </section>
    )
  }
}
