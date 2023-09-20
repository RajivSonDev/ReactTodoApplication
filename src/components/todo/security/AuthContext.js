import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
// create Context

export const AuthContext=createContext()

// to make easier to assess the data 
export const useAuth = () => useContext(AuthContext)
// put some state in the context 



// share the created context with other component
// we are providing context through the AuthProvider to every component
export default function AuthProvider({children}){

    const [number,setNumber] = useState(0)
    const [isAuthenticated,setAuthenticated] = useState(false)
    const [username,setUsername]=useState(null)

    //setInterval(()=>setNumber(number+1),10000)
    //console.log(number)
    

    function login(userName,password){
        
        if(userName==="in28minutes" && password==="raj"){
            setAuthenticated(true)
            setUsername(userName)
            return true
         }else{
            setAuthenticated(false)
            setUsername(null)
            return false
         }
         
    }

    function logout(){
        setAuthenticated(false)
    }


    return (
        <AuthContext.Provider value={{number, isAuthenticated , setAuthenticated,login, logout, username}}>
            {children}
        </AuthContext.Provider>
    )
}


