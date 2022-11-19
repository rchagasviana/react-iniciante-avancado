const Titulo = (props) => {
    return (
        <div>
            <h1>{props.conteudo}</h1>
        </div>

    );
}

const SubTitulo = (props) => {

    let fontePadrao = (props.fonte === undefined ? 'Monospace' : props.fonte);
    let corPadrao = (props.cor === undefined ? 'blue': props.cor);

    return (
        <div style={{
            color: corPadrao,
            fontFamily: fontePadrao
        }}>
            <h4>{props.conteudo}</h4>
        </div>
    );
}

function App() {
    return (
        <div>
            <Titulo conteudo="Aula 01 - React do básico ao avançado"/>
            <SubTitulo conteudo="Enviados valores" fonte="Fantasy" cor="red"/>
            <SubTitulo conteudo="Não enviados valores"/>
        </div>
    );
}
export default App;
