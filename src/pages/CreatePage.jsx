import CriarVaga from "../components/CriarVaga/CriarVaga";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

import { useRef } from "react";

import "./CreatePage.css";

export default function CreatePage() {
  const stateType = localStorage.getItem("type");
  const user = JSON.parse(localStorage.getItem("userAuth"));

  const userRef = {
    area: useRef(""),
    skill: useRef(""),
    cpf: useRef(""),
    descricao: useRef(""),
    uf: useRef(""),
    cidade: useRef(""),
  };

  const URL_SUPABASE =
    "https://ixdptueotrcwtqqrizar.supabase.co/rest/v1/candidato";
  const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4ZHB0dWVvdHJjd3RxcXJpemFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNjIxNjgsImV4cCI6MjAxNDkzODE2OH0.Mo_Kp2NUYZ6APt-JmP8br6cOvPKM9HqZ33--cmpbstA";

  const createCandidato = async () => {
    try {
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

      console.log(userCandidato);

      const options = {
        method: "POST",
        headers: {
          apikey: API_KEY,
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCandidato),
      };

      await fetch(URL_SUPABASE, options);
      localStorage.setItem("userAuth", JSON.stringify(userCandidato))
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
          buttonAction={createCandidato}
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
          buttonAction={null}
          buttonTitle={"Criar Vaga"}
        />
        <Footer />
      </section>
    );
  }
}
