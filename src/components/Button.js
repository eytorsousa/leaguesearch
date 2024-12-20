export default function Button({children, type, onclick}){

    return (
        <button className="Button"
            type={type}
            onClick={onclick}
        >
            {children}
        </button>
    ); 
}