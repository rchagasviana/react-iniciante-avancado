function Titulo(props) {
    let fontePadrao = (props.fonte === undefined ? 'Monospace' : props.fonte);
    let corPadrao = (props.cor === undefined ? 'blue' : props.cor);
    return (
        <div style={{color: corPadrao, fontFamily: fontePadrao}}>
            <h1>{props.texto}</h1>
        </div>
    );
}
export default Titulo;