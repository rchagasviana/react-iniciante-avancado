function Imagem(props) {
    return (
        <div>
            <img src={props.caminho} alt={props.descricao}/>
        </div>
    );
}
export default Imagem;