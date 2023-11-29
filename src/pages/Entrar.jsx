import FormLogin from "../components/FormEntrar/FormLogin";
import Navbar from "../components/NavBar/Navbar";

export default function Entrar() {

  return (
    <section className="cadastro-container">
        <Navbar />
        <div className="login">
          <div className="text-content-cadastro"> 
            <h3 className="logo-title">Contrat<span>Ae</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illo nemo autem quo ducimus nulla commodi qui odio obcaecati perspiciatis deleniti itaque atque odit quisquam quos, totam rerum fuga laboriosam!</p>
          </div>
            <FormLogin/>
        </div>
    </section>
  );
}
