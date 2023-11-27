import { useNavigate } from "react-router-dom"
import "./Home.css"

export default function Home() {
    
    const navigate = useNavigate('')

    const handleClick = (type) => {
        navigate('/cadastro', {state: type})
    }

    return (
        <section className='home-container'>
            <div className="nav-temp"><h3>Contrat<span>Ae</span></h3></div>
            <h1 className="title-home">Conectando Talentos ao Futuro Profissional.</h1>
            <h2>Entrar Como:</h2>
            <div className="button-container">
                <button className='button-type-user' onClick={() => handleClick('recrutador')}>Recrutador</button>
                <button className='button-type-user' onClick={() => handleClick('candidato')}>Candidato</button>
            </div>
            
        </section>
    )
}