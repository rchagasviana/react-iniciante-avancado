
const Titulo = (props)=>{
    return (
        <div>
            <h1>{props.conteudo}</h1>
        </div>

    );
}

function Principal() {

  return (
      <div>
        <Titulo conteudo="Aula 01 - React do básico ao avançado"/>
      </div>
  );
}

export default Principal;
