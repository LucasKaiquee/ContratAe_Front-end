import FormLogin from "../components/FormEntrar/FormLogin";
import Navbar from "../components/NavBar/Navbar";

export default function Entrar() {

  const handleClick = async () => {
    const url = "http://localhost:8000";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  return (
    <section className="cadastro-container">
        <Navbar />
        <div className="login">
          <div className="text-content-cadastro"> 
            <h3 className="logo-title">Contrat<span>Ae</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illo nemo autem quo ducimus nulla commodi qui odio obcaecati perspiciatis deleniti itaque atque odit quisquam quos, totam rerum fuga laboriosam!</p>
          </div>
            <FormLogin login={handleClick()}/>
        </div>
    </section>
  );
}
