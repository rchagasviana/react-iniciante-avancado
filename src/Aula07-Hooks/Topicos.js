
function Topicos(props) {
    return (
        props.topicos.map(
            (topico) =>
                <li> {topico}</li>
        )
    );
}

export default Topicos;