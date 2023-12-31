import "./CriarVaga.css";

import image from "../../assets/imgs/scott-graham-5fNmWej4tAA-unsplash 1.png";

export default function CriarVaga({
  title,
  input1,
  input2,
  input3,
  input4,
  buttonAction,
  buttonTitle,
  type,
  userRef,
}) {
  return (
    <section className="criar-vaga">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="form-vaga">
        <div className="input-section">
          <div className="input-left-section">
            <input
              type="text"
              className="input-border"
              name="vaga"
              placeholder={input1}
              ref={type === "candidato" ? userRef.area : userRef.nome}
            />
            <input
              type="text"
              className="input-border"
              name="requisitos"
              placeholder={input2}
              ref={type === "candidato" ? userRef.skill : userRef.requisito}
            />
            <input
              type="text"
              className="input-border"
              name="tipo"
              placeholder={type === "candidato" ? "CPF" : "Tipo"}
              ref={type === "candidato" ? userRef.cpf: null}
            />
            <textarea
              className="text-box"
              name="desc-txt"
              id="desc-txt"
              cols="30"
              rows="10"
              placeholder="Descrição"
              ref={userRef.descricao}
            ></textarea>
          </div>
          <div className="input-right-section">
            <input
              type="text"
              className="input-border"
              name="desc"
              placeholder={input3}
              ref={type === "candidato" ? userRef.uf : userRef.area}
            />
            <input
              type="text"
              className="input-border"
              name="desc"
              placeholder={input4}
              ref={type === "candidato" ? userRef.cidade : userRef.nome_empresa}
            />
            <input
              type="text"
              className={type === "candidato" ? "hidden" : "input-border"}
              name="desc"
              placeholder="Salário"
              ref={type === "candidato" ? null : userRef.salario}
            />
            <input
              type="number"
              className={type === "candidato" ? "hidden" : "input-border"}
              name="desc"
              placeholder="Limite da candidaturas"
              ref={type === "candidato" ? null : userRef.quantidade}
            />
            <img
              src={image}
              alt="Imagem de pessoas trabalhando com papel e notebooks em um escritorio."
              className={type === "candidato" ? "img-create-page" : "hidden"}
            />
          </div>
        </div>
        <button className="form-btn" onClick={buttonAction}>
          {buttonTitle}
        </button>
      </div>
    </section>
  );
}
