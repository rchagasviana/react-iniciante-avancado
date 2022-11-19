import {useState} from "react";


function Dados() {
    let dado1 = 10;
    const [dado, setDado] = useState(20);

    return (<div>

        {/*Sem usar o hok useSate*/}
        <p>Valor: {dado1}</p>
        <button onClick={() => (dado1 = 31)}>Mudar valor sem hook</button>

        {/*Resolvendo problema com useSate*/}
        <p>Valor: {dado}</p>
        <button onClick={()=>setDado(50)}  >Mudar valor-com hook</button>
    </div>);
}

export default Dados;