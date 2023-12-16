import { useEffect, useState } from "react";
import "./Perfil.css"

export default function Perfil( {user} ){

    const lista = user.skills.split(",")
    return(
        <section className="perfil-section">
            <h1>Perfil</h1>
            <div className="top-area">
                <div className="left-area">
                    <div className="info">
                        <h2>{user.nome}</h2>
                        <p>{user.area}</p>
                    </div>
                    <div className="skills">
                        <h2>Habilidades</h2>
                        <div className="skill-area">
                            {lista.map((skill, index) => (
                                <p key={index} className="skill-element">{skill.split(',')}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="right-area">
                    <div className="email-area">
                        <h2>Email</h2>
                        <p>{user.email}</p>
                    </div>
                    <div className="addr-area">
                        <h2>Cidade</h2>
                        <p>{user.cidade}</p>
                        <h2>Estado</h2>
                        <p>{user.uf}</p>
                    </div>
                </div>
            </div>
            <div className="bottom-area">
                <h2>Descrição</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, deserunt! Modi harum accusamus reiciendis perspiciatis facere totam quam eligendi obcaecati maxime dolores! Tenetur quisquam et at eligendi, minima maiores minus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio vero voluptates, officiis in molestiae, sed est dolore iste, qui doloremque consequuntur. Fuga quaerat sit inventore voluptates excepturi labore, voluptate nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nisi tempora eaque consequatur maxime maiores eos? Doloribus, nobis. Consequatur, illum! Officia dolorem maiores eos similique neque totam sunt iste porro! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia odit deserunt autem quaerat, rem praesentium quisquam quas molestias officiis eos incidunt fuga dolorem sunt, voluptatibus, animi neque asperiores harum pariatur!
                </p>
            </div>
        </section>
    )
}