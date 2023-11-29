import "./Navbar.css"
import { useNavigate } from "react-router-dom"

export default function Navbar() {

    const navigate = useNavigate('')

    const handleCLick = (path) => {
        path === 'home' ? navigate('/') : null
        path === 'cadastro' ? navigate('/cadastro') : null
        path === 'Entrar' ? navigate('/Entrar') : null
    }

    return (
        <header className="navbar">
            <h3 className="logo-navbar" onClick={() => handleCLick('home') }>Contrat<span>Ae</span></h3>
            <nav>
                <ul>
                    <li className="menu-item">Quem somos</li>
                    <li className="menu-item" onClick={() => handleCLick('Entrar')}>Entrar</li>
                    <li className="menu-item create" onClick={() => handleCLick('cadastro')}>Criar conta</li>
                </ul>
            </nav>
        </header>
    )
}