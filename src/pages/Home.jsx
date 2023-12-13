import { useNavigate } from "react-router-dom"
import "./Home.css"

import Navbar from "../components/NavBar/Navbar"

export default function Home() {
    
    const navigate = useNavigate('')

    const handleClick = (type) => {
        navigate('/Entrar', {state: type})
    }

    return (
        <section className='home-container'>
            <Navbar />
            <h1 className="title-home">Conectando Talentos ao Futuro Profissional.</h1>
            <p>Entrar Como:</p>
            <div className="button-container">
                <button className='button-type-user' onClick={() => handleClick('recrutador')}>Recrutador</button>
                <button className='button-type-user' onClick={() => handleClick('candidato')}>Candidato</button>
            </div>
            
        </section>
    )
}