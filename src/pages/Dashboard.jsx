import Card from "../components/Card/Card"
import Navbar from "../components/NavBar/Navbar"
import Footer from "../components/Footer/Footer"
import { useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"
import { Spinner } from "@material-tailwind/react"


import "./Dashboard.css"

export default function Dashboard() {

    const navigate = useNavigate("")

    const [vaga, setVaga] = useState([])

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
            const response = await fetch(URL_SUPABASE, options) 
            const data = await response.json()
            console.log(data)
            setVaga(data)
            
        } catch(e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getSupabaseVaga()
    },[])

    return(
        <section className="dash-section">
            <Navbar />
            <aside className={vaga.length != 0 ?'menu-lateral' : 'hidden'}>
                <button>Ver vagas</button>
                <button>Ver candidaturas</button>
                <button onClick={() => navigate("/")}>Sair</button>
            </aside>
            <div className={vaga.length != 0 ?'info-area' : 'spinner-container'}>
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
            <Footer />
        </section>
    )
}