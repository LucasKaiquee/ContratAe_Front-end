import Card from "../components/Card/Card";
import { Spinner } from "@material-tailwind/react";

export default function RecruiterMenu() {
  const vaga = JSON.parse(sessionStorage.getItem("vagasRecutador"));
    console.log(vaga)
  return (
    <section className="recruiter-menu">
        <h1>Olá</h1>
      <div
      >
        {vaga.length != 0 ? (
          vaga.map((e, i) => (
            <Card
              key={i}
              nome={e.nome}
              area={e.area}
              descricao={e.descricao}
              nomeEmpresa={e.nome_empresa}
              quantidade={e.quantidade}
              requisito={e.requisito}
              salario={e.salario}
            />
          ))
        ) : (
          <Spinner className="h-12 w-12" color="blue" />
        )}
      </div>
    </section>
  );
}
