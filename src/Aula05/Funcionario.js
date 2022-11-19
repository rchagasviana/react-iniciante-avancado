function Funcionario(props) {
    return (
        <div>
            <p><b>Nome:</b> {props.nome}</p>
            <p><b>Data de Nascimento:</b> {props.dataNascimento}</p>
            <p><b>Profissão:</b> {props.profissao}</p>
        </div>
    );
}
export default Funcionario;