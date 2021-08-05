import { contact } from "../../data";

const Contact = () => {

    return(
        <div>
            <ul>
                <li>Nombre: {contact.name}</li>
                <li>Residencia: {contact.direction}</li>
                <li>Email: {contact.email}</li>
            </ul>
            <div>
                logotipo linkedin y github
            </div>
        </div>
    )
    
    }
    export default Contact;
    