import "./Card.css"

export default function Card() {

    const teste = [
        "React",
        "CSS",
        "JavaScript",
        "Java",
        "Python",
        "HTML",
        "Testes",
        "Tailwind",
        "Sass",
        "Figma"
    ]

    return(
        <div className="container-card-vaga">
            <h2 className="title-vaga">Desenvolvedor Front - End</h2>

            <div className="card-infos">
                <div className="area-info">
                    <p>
                        Área: Desenvolvedor React Js<br/>
                        Empresa: Securitas Inc.<br/>
                        Salário: R$ 20.000,00
                    </p>
                </div>

                <div className="info-extra">
                    <p>
                        Tipo:<br/>
                        Remoto<br/>
                        Limite de Candidaturas:<br/>
                        10
                    </p>
                </div>
            </div>

            <div>
                <p>Requisitos:</p>

                <div className="skills-content">
                    {teste.map((e, i) => (
                        <p key={i} className="skill-element">{e}</p>
                    ))}
                </div>
            </div>

            <div className="description">
                <p>
                    Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium velit ipsam recusandae sint ipsum porro possimus laboriosam, maxime vero rerum voluptates nisi enim quidem corrupti eveniet distinctio doloremque sequi odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem, quibusdam consequatur ipsa officiis debitis dignissimos quo laborum nostrum, fugiat, distinctio commodi nihil quasi neque odit eos quos voluptatibus iusto!
                </p>
            </div>

            <button className="button-card">Candidatar-se</button>
        </div>
    )
}