export default function Link({href, target, children}){

    return (
        <a className="Link"
            href={href}
            target={target ?  target : "_self"}
            rel={target ? "external" : ""}
        >
            {children}
        </a>
    ); 
}