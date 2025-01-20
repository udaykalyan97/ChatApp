import RegisterAndLoginForm from "./RegisterAndLoginForm.jsx";
import { UserContext } from "./UserContext.jsx";
import { useContext } from "react";
import Chat from "./Chat.jsx";


const Routes = () => {

    const {username,id} = useContext(UserContext);

    if(username){
        return (
            <Chat />
        )
    }

    return(
        <RegisterAndLoginForm />
    )
};

export default Routes;