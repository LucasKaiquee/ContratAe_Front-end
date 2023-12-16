import { useEffect, useState } from "react";
import "./Perfil.css"

export default function Perfil(){
    const [user, setUser] = useState({})

    async function getPerfil(){
        const URL_SUPABASE = "https://ixdptueotrcwtqqrizar.supabase.co/rest/v1/candidato"
        // const API_KEY = import.meta.env.SUPABASE_API_KEY
        const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4ZHB0dWVvdHJjd3RxcXJpemFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNjIxNjgsImV4cCI6MjAxNDkzODE2OH0.Mo_Kp2NUYZ6APt-JmP8br6cOvPKM9HqZ33--cmpbstA"
    
        
        const options = {
            method: 'GET',
            headers: {
              'apikey': API_KEY,
              'Authorization': `Bearer ${API_KEY}`,
              'Content-Type': 'application/json',
            },
        };
    
        const response = await fetch(URL_SUPABASE, options);
        const responseData = await response.json()
        setUser(responseData[38])
        console.log(responseData[38])
    }
    useEffect(() => {
        getPerfil()
    }, [])
    return(
        <section>
            <h1>Perfil</h1>
            <div className="top-area">
                <div className="left-area">
                    <div className="info">
                        <h2>{user.nome}</h2>
                        <p>{user.area}</p>
                    </div>
                    <div className="skills">
                        <h2>Habilidades</h2>
                        <p>{user.skills}</p>
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
                        <p>{user.estado}</p>
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