import Perfil from "../components/Perfil/Perfil";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import POST_SPC from "../utils/postFunction";
import { useNavigate } from "react-router-dom";
import { FaGrinBeamSweat } from "react-icons/fa";
import "./RecruiterArea.css";

export default function RecruiterArea() {
  const navigate = useNavigate("");
  const [showCandidato, setShowCandidato] = useState([]);
  const userRecruiter = sessionStorage.getItem("userAuth")

  const showCandidaturas = async () => {
    try {
      const response = await POST_SPC({
        "protocol_msg": "recuperarVaga",
        "cpf": userRecruiter
    }) 
      const data = await response.json()
      if (data.status === "404 Not Found") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.message 
        });

        navigate("/CreatePage")
      } else {
        const responseServer = await POST_SPC({
          "protocol_msg": "verCandidaturas",
          "type": "r",
          "cpf": userRecruiter,
          "idVaga": data.data
      }) 
      const dataServer = await responseServer.json()
      console.log(dataServer)
      if(dataServer.status === "200 OK") {
        setShowCandidato(dataServer.data)
      } 
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showCandidaturas()
  }, []);

  return (
    <section className="recruiter-area">
      <Navbar />
      {/* <button onClick={() => {navigate("/CreatePage")}} className="button-new-vaga" title="Criar vaga"><FaPlusCircle /></button> */}
      <div className="card-recruiter">
        <h3 className="text-center text-[20px] font-bold">Candidaturas</h3>
        {showCandidato.length != 0 ? 
          showCandidato.map((e, i) => (
            <Perfil key={i} user={e}/>
          ))
        : 
          <div className="w-[100vw] h-[80vh] text-center text-[70px] mt-[-30px] flex items-center justify-center gap-5">
            <h1 className="">Sua vaga não possui candidaturas !</h1>
            <i className="text-[#00AFF9]"><FaGrinBeamSweat /></i> 
          </div>
          
        }
      </div>
      <Footer />
    </section>
  );
}