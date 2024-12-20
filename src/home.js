import MainLogo from "./components/MainLogo.js";
import Header from "./components/Header.js";
import Search from "./components/Search.js";

import "./styles/pages/home.css";

export default function Home(){

    return (
        <div className="Home">
            <Header></Header>
           <main>
                <MainLogo></MainLogo>
                <Search></Search>
           </main>
        </div>
    ); 
}