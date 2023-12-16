import "./SideBar.css";
export default function SideBar(){
    return (
        <section className="sidebar">
            <div className="sidebar-title">
                <h1>Bem Vindo(a)!</h1>
            </div>
            <div className="sidebar-options">
                <ul>
                    <li>Minhas Vagas</li>
                    <li>Ver candidatos</li>
                </ul>
                <button className="sidebar-btn">Sair</button>
            </div>
                
        </section>
    )
}