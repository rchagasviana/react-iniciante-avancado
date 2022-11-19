import Titulo from "./Titulo";
import Equipe from "./Equipe";
import Imagem from "./Imagem";

import Salmos from "../assets/salmos89.png"


function App() {
    return (
        <div>
            <Titulo texto="Aula 06-Imagens na pasta public e assets" cor="green" fonte="Fantasy"/>
            <Equipe nome="Rafael C. Viana" dataNascimento="10-10-1990" profissao="Engenheiro de Software"/>

            {/*Imagem em public*/}
            <Imagem caminho="/react-native.png" descricao="Símbolo do React Native"/>
            {/*Imagem em assets*/}
           <Imagem caminho={Salmos} descricao="Salmos 89"></Imagem>
        </div>
    );
}

export default App;