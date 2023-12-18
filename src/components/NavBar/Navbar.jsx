import "./Navbar.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const auth = sessionStorage.getItem("authenticated");
  const stateType = sessionStorage.getItem("type")
  const [userType, setUserType] = useState("")

  const navigate = useNavigate("");

  const handleCLick = (path) => {
    if(path === "/") {
        sessionStorage.setItem("authenticated", false)
        navigate("/")
    } else {
        navigate(`/${path}`);
    }
  };

  useEffect(() => {
    {stateType === "candidato" ? setUserType("Dashboard") : setUserType("RecruiterArea")}
  }, [])
  

  if (auth === null || auth === "false") {
    return (
      <header className="navbar">
        <h3 className="logo-navbar" onClick={() => handleCLick("")}>
          Contrat<span>Ae</span>
        </h3>
        <nav>
          <ul>
            <li className="menu-item" onClick={() => handleCLick("Entrar")}>
              Entrar
            </li>
            <li
              className="menu-item create"
              onClick={() => handleCLick("cadastro")}
            >
              Criar conta
            </li>
          </ul>
        </nav>
      </header>
    );
  } else if(auth === "true") {
    return (
      <header className="navbar">
        <h3 className="logo-navbar" onClick={() => handleCLick("")}>
          Contrat<span>Ae</span>
        </h3>
        <nav>
          <ul>
            <li className="menu-item" onClick={() => handleCLick("/")}>
              Sair
            </li>
            <li
              className="menu-item create"
              onClick={() => handleCLick(userType)}
            >
              Vagas
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
