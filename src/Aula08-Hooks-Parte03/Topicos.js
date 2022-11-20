function Topicos(props) {
    return (
        <div>
            <ul>
                {props.topicos.map(
                    (topico, i) =>
                        <li key={i}> {topico}</li>
                )}
            </ul>
        </div>

    );
}

export default Topicos;