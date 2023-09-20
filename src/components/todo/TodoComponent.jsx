import { useParams } from "react-router-dom"
import { retrieveTodoDetails } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect } from "react";
import { useState } from "react";

export default function TodoComponent(){
   
    const {id}=useParams()
    const authContext=useAuth()
    const username=authContext.username

    const [description,setDescription]=useState('')


    // when id value change then useEffect will be load again
    useEffect(() => {
       retrevieTodo()
    }, [id]);

    function retrevieTodo(){
        
        retrieveTodoDetails(id).then(
            (response)=>{
                setDescription(response.data.description)
            })
        .catch(
            (error)=>console.log(error)
        )
    }
   
    return (
        <div className="container">
            <h1>Enter Todo Application</h1>
            <div>
                Description : {description}
            </div>
        </div>
    )
}