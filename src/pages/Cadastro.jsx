import FormCadastro from "../components/FormCadastro/FormCadastro";

import './Cadastro.css'

export default function Cadastro() {

  return (
    <section className="cadastro-container">
        <div className="nav-temp"><h3>Contrat<span>Ae</span></h3></div>

        <div className="login">
            <h3>Contrat<span>Ae</span></h3>
            <FormCadastro />
        </div>
    </section>
  );
}
