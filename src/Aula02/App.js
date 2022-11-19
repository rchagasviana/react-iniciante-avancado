import Bemvindo from "./Bemvindo";
import Titulo from "./Titulo";

function App() {
    return (
        <div>
            <Titulo texto="Aula 02 - Propriedades e Componentes" cor="green" fonte="Fantasy"/>
            <Bemvindo nome="Rafael à esta aula!"/>
        </div>
    );
}
export default App;