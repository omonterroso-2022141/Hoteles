import { useState } from "react";
import { logOut } from "./useLogOut.jsx";

const getDetails = () =>{
    const useDetails = localStorage.getItem('user')
    if(useDetails){
        //return JSON.parse(useDetails)
    }
    return null
}

export const useDetails = ()=>{
    const [useDetails, setUseDetails] = useState(getDetails)

    const logoutSys = ()=> {
        logOut()
    }
    return {
        isLogged: Boolean(useDetails),
        email: useDetails?.email ? useDetails?.email : 'Invitado',
        logoutSys
    }

}