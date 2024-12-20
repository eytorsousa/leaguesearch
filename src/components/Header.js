import Link from "./Link";
import Logo from "./Logo";

import "../styles/components/header.css";

export default function Header(){
    return (
        <div className="Header">

            {/* <section className="logo">
                <Logo></Logo>
            </section> */}

            <section className="links">
                <Link 
                    href="/"
                >
                    HOME
                </Link>
                <Link 
                    href="/"
                >
                    CHAMPIONS
                </Link>
                <Link 
                    href="/"
                >
                    RANKED
                </Link>
            </section>
        </div>
    );
}