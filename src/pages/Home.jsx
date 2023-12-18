import { useNavigate } from "react-router-dom"
import "./Home.css"

import Navbar from "../components/NavBar/Navbar"
import Footer from "../components/Footer/Footer"

export default function Home() {
    const auth = sessionStorage.getItem("authenticated")
    
    const navigate = useNavigate('')

    const handleClick = (type) => {
        navigate('/Entrar', {state: type})
    }

    return (
        <section className='home-container'>
            <Navbar />
            <h1 className="title-home">Conectando Talentos ao Futuro Profissional.</h1>
            <p className={auth === "true" ?  "hidden": "font-bold"}>Entrar Como:</p>
            <div className={auth === "true" ?  "hidden": "button-container"}>
                <button className='button-type-user' onClick={() => handleClick('recrutador')}>Recrutador</button>
                <button className='button-type-user' onClick={() => handleClick('candidato')}>Candidato</button>
            </div>
            <h3 className="text-[40px] font-bold text-center mt-[2rem]">
          Confira nossas dicas para se destacar na Contrat<span>Ae</span>
        </h3>
        <ul className="lista-dicas">
          <li>
            Experiência impactante: Foque em experiências profissionais
            relevantes, destacando conquistas específicas.
          </li>
          <li>
            Quantifique resultados: Use números para mostrar impacto e
            realizações.
          </li>
          <li>
            Inclua conquistas acadêmicas: Destaque realizações educacionais
            relevantes.
          </li>
          <li>
            Objetivo claro: Comece com uma declaração concisa de seus objetivos
            profissionais.
          </li>
          <li>
            Destaque habilidades: Liste habilidades-chave relevantes para a vaga
            desejada.
          </li>
        </ul>
            <div className="footer-area"><Footer/></div>
        </section>
    )
}