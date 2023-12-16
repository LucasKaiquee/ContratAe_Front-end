import Card from "../components/Card/Card"
import Navbar from "../components/NavBar/Navbar"
import Footer from "../components/Footer/Footer"
import { useNavigate } from "react-router-dom"
import SideBar from "../components/SideBar/SideBar"
import Perfil from "../components/Perfil/Perfil"

import { useEffect, useState } from "react"
import { Spinner } from "@material-tailwind/react"

import "./Dashboard.css"

export default function Dashboard() {
    const user = JSON.parse(sessionStorage.getItem("userAuth"))

    const navigate = useNavigate("")

    const [showPerfil, setShowPerfil] = useState({
        status: false,
        class: ""
    })
    const [vaga, setVaga] = useState([])
    const type = sessionStorage.getItem("type")

    const URL_SUPABASE = "https://ixdptueotrcwtqqrizar.supabase.co/rest/v1/vaga"
    const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4ZHB0dWVvdHJjd3RxcXJpemFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNjIxNjgsImV4cCI6MjAxNDkzODE2OH0.Mo_Kp2NUYZ6APt-JmP8br6cOvPKM9HqZ33--cmpbstA"

    const options = {
        method: 'GET',
        headers: {
          'apikey': API_KEY,
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      };

    const getSupabaseVaga = async () => {
        try {
            setShowPerfil({
                status: false,
                class: ""
            })
            const response = await fetch(URL_SUPABASE, options) 
            const data = await response.json()
            console.log(data)
            setVaga(data)
            
        } catch(e) {
            console.error(e)
        }
    }

    const handleShowPerfil = () => {
        setShowPerfil({
            status: true,
            class: "hidden"
        })
    }

    const showCandidaturas = async () => {

    }

    useEffect(() => {
        getSupabaseVaga()
    },[])


    return(
        <section className="dash-section">
            <Navbar />
            <aside className={vaga.length != 0 ? 'menu-lateral' : 'hidden'}>
                <SideBar
                    perfil={handleShowPerfil}
                    vaga={getSupabaseVaga}
                    candidatura={showCandidaturas}
                    type={type}
                />
            </aside>
            <div className={vaga.length != 0 ?'info-area ' + showPerfil.class : 'spinner-container'}>
                { vaga.length != 0 ?
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
                        />
                    )) : <Spinner
                            className="h-12 w-12"
                            color="blue"
                        />
                }
            </div>
            <div className={showPerfil.status ? "" : "hidden"}>
                <Perfil user={user} />
            </div>
            
            <Footer />
        </section>
    )
}