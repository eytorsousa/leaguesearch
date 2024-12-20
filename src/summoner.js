import Header from "./components/Header.js";

import "./styles/pages/summoner.css";

// const [region, setRegion] = useState(null);
// const [fullNick, setFullNick] = useState(null);

// useEffect(() => {
//     // Obtém os parâmetros da URL quando o componente é montado
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);

//     const regionParam = urlParams.get('region');
//     const fullNickParam = urlParams.get('nick');

//     // Atualiza o estado com os valores obtidos
//     setRegion(regionParam);
//     setFullNick(fullNickParam);

//     console.log(regionParam, fullNickParam); // Só irá logar quando os valores forem obtidos
// }, []);

export default function Summoner(){

    return (
        <div className="Summoner">
            <Header></Header>
           <main>
                <div>teste</div>
           </main>
        </div>
    ); 
}