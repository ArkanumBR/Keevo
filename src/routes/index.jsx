import Login from "../pages/login/login";
import Dashboard from "../pages/dashboard";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";


const RoutesMain = () => {
    
    const { userLogged } = useContext(AuthContext);

    return(
    <AnimatePresence wait>
    <Routes>        
        <Route path="/" element={<Login/>} />
        <Route path="*" element={<Navigate to={"/"}/>} />
        {userLogged? 
        <Route path="/dashboard" element={<Dashboard />} /> 
        :
        <Route path="*" element={<Navigate to={"/"}/>} />  
    }
        
        
        
       
                 
    </Routes>
    </AnimatePresence>
    )
}

export default RoutesMain

