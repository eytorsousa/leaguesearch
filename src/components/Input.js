export default function Input({classname, type, placeholder, maxlength, max, min}){
    if(type == "region"){
        return(
            <select className={`Input ${classname}`} >
                <option value="" selected disabled>Region</option>
                <option value="br">Brazil</option>
                <option value="na">North America</option>
                <option value="me">Middle East</option>
                <option value="ew">Europe West</option>
                <option value="ene">Europe Nordic & East</option>
                <option value="oc">Oceania</option>
                <option value="kr">Korea</option>
                <option value="jp">Japan</option>
                <option value="las">LAS</option>
                <option value="lan">LAN</option>
                <option value="ru">Russia</option>
                <option value="tu">Turkey</option>
                <option value="si">Singapure</option>
                <option value="ph">Philippines</option>
                <option value="ta">Taiwan</option>
                <option value="vi">Vietnam</option>
                <option value="th">Thailand</option>
            </select>
        );
    }

    return (
        <input className={`Input ${classname}`}  type={type} placeholder={placeholder} maxlength={maxlength} max={max} min={min} required/>
    );
}