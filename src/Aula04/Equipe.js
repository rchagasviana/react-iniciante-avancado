import Funcionario from "./Funcionario";

function Equipe(props) {
    return (
        <div>
            <Funcionario nome={props.nome} dataNascimento={props.dataNascimento} profissao={props.profissao}/>
            <hr/>
        </div>
    );
}

export default Equipe;