import {useState} from "react";
import Botao from "../Aula04/Botao";


function Dados() {
    const [dado, setDado] = useState(0);
    return (<div>
        <p>Valor: {dado}</p>
        <Botao nome="Hook-Parte2" />
    </div>);
}

export default Dados;