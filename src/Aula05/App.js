import Titulo from "./Titulo";
import Equipe from "./Equipe";
import Botao from "./Botao";

function App() {


    return (
        <div>
            <Titulo texto="Aula 05 - Funções no Evento" cor="green" fonte="Fantasy"/>
            <Equipe nome="Rafael C. Viana" dataNascimento="10-10-1990" profissao="Engenheiro de Software"/>

            <button onClick={() => {
                alert("Evento inline")
            }}>Iniciar Evento
            </button>

            <Botao nome="Começar"/>

        </div>
    );
}

export default App;