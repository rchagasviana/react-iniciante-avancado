import Titulo from "./Titulo";
import Equipe from "./Equipe";
import Botao from "./Botao";

function App(props) {

    const olaMundo =() =>{
        alert("DEUS Seja sempre louvado!")
    };

    return (
        <div>
            <Titulo texto="Aula 04 - Eventos" cor="red" fonte="Fantasy"/>
            <Equipe nome="Rafael C. Viana" dataNascimento="10-10-1990" profissao="Engenheiro de Software"/>
            <button onClick={olaMundo}>Iniciar</button>

            <Botao nome="Começar"/>
            <Botao nome="Cancelar"/>
        </div>
    );
}
export default App;