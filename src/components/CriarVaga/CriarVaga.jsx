import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CriarVaga.css"


export default function CriarVaga(){
    return(
        <section className="criar-vaga">
            <div className="title">
                <h1>criar vaga</h1>
            </div>
            <form className="form-vaga">
                <div className="input-section">
                	<div className="input-left-section">
                            <input type="text"className="input-border" name="vaga" placeholder="Título da vaga" />
                        	<input type="text"className="input-border" name="requisitos" placeholder="Requisitos" />
                        	<input type="text" className="input-border"name="tipo" placeholder="Tipo" />
                        	<textarea className="text-box"name="desc-txt" id="desc-txt" cols="30" rows="10" placeholder="Descrição"></textarea>
                    </div>
                    <div className="input-right-section">    
                    	<input type="text" className="input-border"name="desc" placeholder="Área" />
                    	<input type="text"className="input-border" name="desc" placeholder="Empresa" />
                    	<input type="text"className="input-border" name="desc" placeholder="Salário" />
                    	<input type="text"className="input-border" name="desc" placeholder="Limite da candidaturas" />
                    </div>
                </div>
            <button className="form-btn">Criar Vaga</button>
            </form>
        </section>
    )
}