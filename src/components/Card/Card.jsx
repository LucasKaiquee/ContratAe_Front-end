import "./Card.css"

// eslint-disable-next-line react/prop-types
export default function Card({ nome, area, descricao, nomeEmpresa, quantidade, requisito, salario, buttonAction, buttonTitle }) {

    // eslint-disable-next-line react/prop-types
    const listaRequisitos = requisito.split(",")

    return(
        <div className="container-card-vaga">
            <h2 className="title-vaga">{nome}</h2>

            <div className="card-infos">
                <div className="area-info">
                    <p>
                        Área: {area}<br/>
                        Empresa: {nomeEmpresa}<br/>
                        Salário: R$ {salario}
                    </p>
                </div>

                <div className="info-extra">
                    <p>
                        Tipo:<br/>
                        Remoto<br/>
                        Limite de Candidaturas:<br/>
                        {quantidade}
                    </p>
                </div>
            </div>

            <div>
                <p>Requisitos:</p>

                <div className="skills-content">
                    {listaRequisitos.map((e, i) => (
                        <p key={i} className="skill-element">{e}</p>
                    ))}
                </div>
            </div>

            <div className="description">
                <p>
                    Descrição: {descricao}
                </p>
            </div>

            <button className="button-card" onClick={buttonAction}>{buttonTitle}</button>
        </div>
    )
}