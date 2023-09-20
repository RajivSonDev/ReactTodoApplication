import { useParams,useNavigate } from "react-router-dom"
import { retrieveTodoDetails, updateTodo } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect } from "react";
import { useState } from "react";

export default function TodoComponent(){
   
    const {id}=useParams()
    const authContext=useAuth()
    const navigate=useNavigate()
    const username=authContext.username
    const [description,setDescription]=useState('')
    const [date,setDate]=useState('')

    // when id value change then useEffect will be load again
    useEffect(() => {
       retrevieTodo()
    }, [id]);

    function retrevieTodo(){
        
        retrieveTodoDetails(id).then(
            (response)=>{
               // console.log(response)
                setDescription(response.data.description)
                setDate(response.data.targetDate)
            })
        .catch(
            (error)=>console.log(error)
        )
    }


    function handleDescriptionChange(event){
        //console.log(event.target.value)
        setDescription(event.target.value)
    }
    

    function handleChangeofDate(event){
       // console.log(event.target.value)
        setDate(event.target.value)
    }

    function sendUpdateRequest(event){
      //  console.log(description,date)

        const todo={
            id:id,
            username:username,
            description:description,
            targetDate:date,
            done:false
        }

        console.log(todo)

        if(validate()){
            console.log("send request")
            updateTodo(id,username,todo).
            then(
                response=>navigate('/todos')
            ).catch(
               (error)=>console.log(error)
            )
            //console.log(todo)
        }

    }

    function validate(){

        if(description.length<5){
            alert("Enter Aleast 5 Characters")
            return false
        }

        if(date == null){
            alert("Please Select Date")
            return false
        }

        return true
    }

    
    return (
        <div className="container">
            <div>
                <div>
                    <div>
                        <label>Description</label>
                        <input type="text" value={description} onChange={handleDescriptionChange}></input>
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="date" value={date} onChange={handleChangeofDate}></input>
                    </div>
                    <div>
                        <button type="button" className="btn btn-success mt-5" onClick={sendUpdateRequest}>Save</button>
                    </div>

                </div>
            </div>
        </div>
    )
}