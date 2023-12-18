import { useNavigate } from "react-router-dom";
import "./SideBar.css";

export default function SideBar({
  perfil,
  vaga,
  candidatura,
  buttonAction,
  type,
}) {
  const navigate = useNavigate("");
  return (
    <section className="sidebar">
      <div className="sidebar-title">
        <h1>Bem Vindo(a)!</h1>
      </div>
      <div className="sidebar-options">
        <ul>
          <li onClick={perfil}>
            Perfil
          </li>
          <li onClick={vaga}>
            Ver vagas
          </li>
          <li onClick={candidatura}>
            Minhas candidaturas
          </li>
        </ul>
        <button
          className="sidebar-btn"
          onClick={() => {
            sessionStorage.setItem("authenticated", false);
            navigate("/");
          }}
        >
          Sair
        </button>
      </div>
    </section>
  );
}
