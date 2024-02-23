import "./Header.css";
import Logo from "../../assets/imgs/favicon.ico";

export default function Header() {
    return (
        <div className="header">
            <h1>
                <img src={Logo}/>
                /4get 
                <p>List</p>
            </h1>


            <small>Lembre as suas tarefas de maneira <b>simples</b>.</small>
        </div>
    );
}
