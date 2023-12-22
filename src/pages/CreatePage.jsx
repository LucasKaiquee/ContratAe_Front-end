import CriarVaga from "../components/CriarVaga/CriarVaga";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import POST_SPC from "../utils/postFunction";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { useRef } from "react";

import "./CreatePage.css";

export default function CreatePage() {
  const stateType = sessionStorage.getItem("type");
  const user = sessionStorage.getItem("userAuth");
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
      console.log(stateType)
      if (stateType === "candidato") {
        const response = await POST_SPC({
          "protocol_msg": "completarPerfil",
          "cpf": user,
          "skills": userRef.skill.current.value,
          "area": userRef.area.current.value,
          "descricao": userRef.descricao.current.value,
          "cidade": userRef.cidade.current.value,
          "uf": userRef.uf.current.value,
        });
        
        const data = await response.json()
        console.log(data)
        if(data.status === "201 Created") {
          navigate("/Dashboard");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Estamos com Problemas tecnicos !",
          });
        }

      } else {
        const response = await POST_SPC({
          "protocol_msg": "criarVaga",
          "cpf": user,
          "vaga_info" : {
            "nome_vaga": vagaRef.nome.current.value,
            "area_vaga": vagaRef.area.current.value,
            "descricao_vaga": vagaRef.descricao.current.value,
            "quant_candidaturas": vagaRef.quantidade.current.value,
            "salario_vaga": vagaRef.salario.current.value,
            "requisitos": vagaRef.requisito.current.value,
          }
        })
        const data = await response.json()
        if (data.status === "201 Created") {
          navigate("/RecruiterArea");
        }
      }
    } catch (e) {
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
