import { useEffect, useState } from "react";
import "./Perfil.css";

export default function Perfil({ user }) {
  console.log(user)
  const lista = user.skills
  return (
    <section className="perfil-section">
      <div className="top-area">
        <div className="left-area">
          <div className="info">
            <h2>{user.nome}</h2>
            <p>Área de atuação: {user.area}</p>
          </div>
          <div className="skills">
            <h2>Habilidades</h2>
            <div className="skill-area">
              {/* {lista.map((skill, index) => (
                <p key={index} className="skill-element">
                  {skill}
                </p>
              ))} */}
            </div>
            <div className="email-area">
              <h2>Email:</h2>
              <p>{user.email}</p>
            </div>
            <div className="addr-area">
              <h2>Cidade:</h2>
              <p>{user.cidade}</p>
              <h2>Estado:</h2>
              <p>{user.uf}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="description-area">
        <h2>Descrição:</h2>
        <p>{user.descricao}</p>
      </div>
    </section>
  );
}
