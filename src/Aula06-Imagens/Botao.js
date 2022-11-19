function Botao(props) {

    const eventoBtn = (e) => {
        alert("Você clicou no botão! ");
    }

    return (
        <button onClick={eventoBtn}>{props.nome}</button>
    );
}

export default Botao;