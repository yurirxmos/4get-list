import React, { useState, useEffect } from "react";
import "./List.css";
import Delete from "../../assets/imgs/delete.svg";

export default function List() {
    const [items, setItems] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        const storedItems = localStorage.getItem("todoListItems");
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []); // Este useEffect será executado apenas uma vez quando o componente for montado

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        const newItems = [...items, { text, completed: false }];
        setItems(newItems);

        localStorage.setItem("todoListItems", JSON.stringify(newItems)); // Salvando no localStorage ao adicionar um novo item

        setText("");
    };

    const handleDelete = (index) => {
        // Exibir alerta de confirmação
        const confirmDelete = window.confirm("Tem certeza que deseja deletar este item?");
    
        // Se o usuário confirmar, prosseguir com a exclusão
        if (confirmDelete) {
            const updatedItems = items.filter((_, i) => i !== index);
            setItems(updatedItems);
            localStorage.setItem("todoListItems", JSON.stringify(updatedItems)); // Salvando no localStorage ao excluir um item
        }
    };
    

    const handleToggleComplete = (index) => {
        const updatedItems = [...items];
        updatedItems[index].completed = !updatedItems[index].completed;
        setItems(updatedItems);
        localStorage.setItem("todoListItems", JSON.stringify(updatedItems)); // Salvando no localStorage ao marcar/desmarcar uma tarefa como concluída
    };

    return (
        <div className="list">
            <form onSubmit={handleSubmit}>
                <div className="item">
                    <input type="text" value={text} onChange={handleChange} placeholder="Fazer atividade, lavar o carro, etc ..." maxLength={50}/>
                    <button type="submit">+</button>
                </div>
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className={`task ${item.completed ? "completed" : ""}`}>
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                id={`checkbox-${index}`}
                                checked={item.completed}
                                onChange={() => handleToggleComplete(index)}
                            />
                            <label htmlFor={`checkbox-${index}`}></label>
                        </div>
                        <span className="text">{item.text}</span>
                        <button onClick={() => handleDelete(index)}>
                            <img src={Delete} alt="Delete" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
