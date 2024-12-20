import league from "../images/icons/league.png";

import "../styles/components/mainlogo.css";

export default function MainLogo(){
    return (
        <div className="MainLogo">
            <div className="search">
                <span>Search</span>
            </div>
            <div className="league">
                <img src={league} alt="League" />
                <span>eague</span>
            </div>
        </div>
    ); 
}