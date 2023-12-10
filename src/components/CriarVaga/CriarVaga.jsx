import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CriarVaga.css"


export default function CriarVaga(){
    return(
        <section className="criar-vaga">
            <form className="form-vaga">
                <h1>criar vaga</h1>
                <div className="input-section">
                	<div className="input-left-section">
                            <input type="text" name="vaga" placeholder="Título da vaga" />
                        	<input type="text" name="requisitos" placeholder="Requisitos" />
                        	<input type="text" name="tipo" placeholder="Tipo" />
                        	<input type="text" name="desc" className="text-box" placeholder="Descrição" />
                    </div>
                    <div className="input-right-section">    
                    	<input type="text" name="desc" placeholder="Área" />
                    	<input type="text" name="desc" placeholder="Empresa" />
                    	<input type="text" name="desc" placeholder="Salário" />
                    	<input type="text" name="desc" placeholder="Limite da candidaturas" />
                    </div>
                </div>
                <button className="form-btn">Criar Vaga</button>
            </form>
        </section>
    )
}