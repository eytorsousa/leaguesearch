import league from "../images/icons/league.png";

import "../styles/components/logo.css";

export default function Logo(){
    return (
        <div className="Logo">
            <div className="image">
                <img src={league} alt="League" />
            </div>
        </div>
    ); 
}