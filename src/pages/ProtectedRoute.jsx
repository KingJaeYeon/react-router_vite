import {useAuth} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function ProtectedRoute({children}) {
    const {isAuthenticated} = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        if (!isAuthenticated){
            navigate('/')
        }
    },[isAuthenticated,navigate])

    return isAuthenticated ? children: ''
}

export default ProtectedRoute;