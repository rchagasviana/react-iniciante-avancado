import Titulo from "./Titulo";
import Equipe from "./Equipe";

function App() {
    return (
        <div>
            <Titulo texto="Aula 03 - Propriedades e Componentes" cor="blue" fonte="Fantasy"/>
            <Equipe nome="Rafael C. Viana" dataNascimento="10-10-1990" profissao="Engenheiro de Software"/>
            <Equipe nome="Rafael C. Viana" dataNascimento="11-11-1990" profissao="Engenheiro de Software"/>
            <Equipe nome="Rafael C. Viana" dataNascimento="12-12-1990" profissao="Engenheiro de Software"/>
            <Equipe nome="Rafael C. Viana" dataNascimento="06-06-1990" profissao="Engenheiro de Software"/>
        </div>
    );
}
export default App;