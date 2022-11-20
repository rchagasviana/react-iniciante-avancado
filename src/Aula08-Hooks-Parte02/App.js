import Titulo from "./Titulo";
import Topicos from "./Topicos";
import Dados from "./Dados";
import {Button} from "react-bootstrap";


function App() {
    let lista = [];
    lista.push("Recursos do React que tem diversas funções;");
    lista.push("Como: guardar e alterar o estado de algum dado na nossa aplicação;");
    lista.push("Todos os hooks começam com a palavra use, por exemplo: useState;");
    lista.push("Podemos criar nossos hooks, isso é chamado de custom hook;");
    lista.push("Os hooks precisam ser importados;");
    lista.push("Geralmente são úteis em todas as aplicações, utilizaremos diversos ao longo do curso;");

    return (
        <div>
            <Titulo texto="Aula 07 - Hooks" cor="green" fonte="Fantasy"/>
            <Titulo texto="O que são hooks?"/>
            <Topicos descricao="Aula sobre hooks" topicos={lista}/>
            <hr/>
            <Dados/>


        </div>
    );
}

export default App;