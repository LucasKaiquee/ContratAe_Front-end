import CriarVaga from "../components/CriarVaga/CriarVaga";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import POST_SUPABASE from "../utils/postFunction";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase";

import { useRef } from "react";

import "./CreatePage.css";

export default function CreatePage() {
  const stateType = sessionStorage.getItem("type");
  const user = JSON.parse(sessionStorage.getItem("userAuth"));
  const navigate = useNavigate("");

  const userRef = {
    area: useRef(""),
    skill: useRef(""),
    cpf: useRef(""),
    descricao: useRef(""),
    uf: useRef(""),
    cidade: useRef(""),
  };

  const vagaRef = {
    nome: useRef(""),
    area: useRef(""),
    descricao: useRef(""),
    quantidade: useRef(""),
    nome_empresa: useRef(""),
    salario: useRef(""),
    requisito: useRef(""),
  };
    
  const create = async () => {
    try {
      const vagaCompleted = {
        id_vaga: Math.floor(Math.random() * 999999) + 1,
        nome: vagaRef.nome.current.value,
        id_recrutador: user.cpf,
        area: vagaRef.area.current.value,
        descricao: vagaRef.descricao.current.value,
        quantidade: vagaRef.quantidade.current.value,
        nome_empresa: vagaRef.nome_empresa.current.value,
        salario: vagaRef.salario.current.value,
        requisito: vagaRef.requisito.current.value,
      };

      const userCandidato = {
        cpf: userRef.cpf.current.value,
        nome: user.nome,
        email: user.email,
        senha: user.senha,
        skills: userRef.skill.current.value,
        area: userRef.area.current.value,
        descricao: userRef.descricao.current.value,
        cidade: userRef.cidade.current.value,
        uf: userRef.uf.current.value,
        uid: user.id,
      };

      
      if( stateType === "candidato") {
        await POST_SUPABASE(stateType, userCandidato)
        const {data: userAt, e} = await supabase
        .from('candidato') 
        .select('*')
        .eq('uid', user.id);
        sessionStorage.setItem("userAuth", JSON.stringify(userAt[0]))
        navigate("/Dashboard")
      } else {
        await POST_SUPABASE("vaga", vagaCompleted)
        const {data: userAt, e} = await supabase
        .from('recrutador') 
        .select('*')
        .eq('uid', user.id);
        sessionStorage.setItem("userAuth", JSON.stringify(userAt[0]))
        navigate("/RecruiterArea")
      }
      
    } catch (e) {
      window.alert("CPF já cadastrado na ContratAe.");
      console.error(e);
    }
  };

  if (stateType === "candidato") {
    return (
      <section className="section-create">
        <Navbar />

        <CriarVaga
          title={"Completar Perfil"}
          input1={"Área de atuação"}
          input2={"Digite suas Habilidades separadas por vírgula."}
          input3={"UF"}
          input4={"Cidade"}
          buttonAction={create}
          buttonTitle={"Completar Perfil"}
          type={stateType}
          userRef={userRef}
        />

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

        <Footer />
      </section>
    );
  } else {
    return (
      <section className="section-create">
        <Navbar />
        <CriarVaga
          title={"Criar vaga"}
          input1={"Título da vaga"}
          input2={"Competências separadas por virgula"}
          input3={"Área"}
          input4={"Empresa"}
          buttonAction={create}
          type={stateType}
          buttonTitle={"Criar Vaga"}
          userRef={vagaRef}
        />
        <Footer />
      </section>
    );
  }
}
