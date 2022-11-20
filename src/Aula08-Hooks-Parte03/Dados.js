import {useState} from "react";
import {Button} from "react-bootstrap";


function Dados() {
    let [dado, setDado] = useState(0);

    const incrementar = () => {
        dado = dado + 1;
        setDado(dado);
    };

    const decrementar = () => {
        dado = dado - 1;
        setDado(dado);
    };


    return (<div>
        <p>Valor: {dado}</p>

        <Button as="a" onClick={incrementar} variant="success">
            Incrementar
        </Button>

        <Button as="a" onClick={decrementar} variant="danger">
            Decrementar
        </Button>
    </div>);
}

export default Dados;