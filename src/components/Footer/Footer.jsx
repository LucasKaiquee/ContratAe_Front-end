import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import './Footer.css' 

export default function Footer(){
    return (
        <>
        <footer>
            <div className="card footer-logo">
                <h2>Contrat<span>Ae</span></h2>
                <p className='mt-[-10px]'>By Securitas Inc.</p>
                <p className='mt-5'>Conectando Talentos ao Futuro Professional.</p>
            </div>
            <div className='card footer-redes'>
                <p id='nossasRedes'>Nossas redes</p>
                <div id='icons'>
                    <i><FaInstagram/></i> 
                    <i><FaFacebookSquare/></i>
                    <i><FaLinkedin/></i>
                </div>
                <p>Copyright © 2023 ContratAe.</p>
                <p>Uma empresa do Grupo Securitas Inc.</p>
                <p>Todos os direitos reservados.</p>
            </div>
            <div className='card footer-links'>
                <p ><span>Links úteis:</span></p>
                <p className='cursor-pointer'>Quem somos</p>
                <a href='https://lucaskaiquee.github.io/Projeto_LM/' target="__blank" ><p>Conheça a Securitas Inc.</p></a>
                <p className='cursor-pointer'>FAQ</p>
            </div>
        </footer>
        </>
    )
}