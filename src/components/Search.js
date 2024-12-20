import Button from "./Button";
import Input from "./Input";

import "../styles/components/search.css";

function handleSearch(){
    const nick = document.querySelector(".nick_input").value;
    const region = document.querySelector(".region_input").value;

    console.log(nick, region);
    window.location.href=`/summoner?region=${region}&nick=${nick}`;
}

export default function Search(){

    return (
        <div className="Search">
            <div className="region">
                <Input
                    classname="region_input"
                    type="region"
                ></Input>
            </div>
            <div className="nick">
                <Input
                    classname="nick_input"
                    type="text"
                    maxlength="30"
                    placeholder="Nick#Tag"
                ></Input>
            </div>


            <Button onclick={handleSearch}>Search</Button>
        </div>
    );
}