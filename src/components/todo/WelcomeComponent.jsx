import {useParams, Link} from 'react-router-dom'; 
import { retrieveHelloWorldBean } from './api/HelloWorldApiService';
import { useState } from 'react';

export default function WelcomeComponent(){

    const {username}=useParams()  // deconstruct the object 

    console.log(username)

    const [message, setmessage] = useState("");


    function callHelloWorldRestApi(){
        //console.log("Button Press")
        
        // return the promise
        /*axios.get('http://localhost:8080/hello-world').then(
            // success response
            (response)=>successfulResponse(response)
        ).catch(
            // error response
            (error)=>errorfulResponse(error)
        ).finally(
            // final response
            ()=>console.log("Clean Up")
        )*/

        retrieveHelloWorldBean().then(
            (response)=>successfulResponse(response)
        ).catch(
            (error)=>errorfulResponse(error)
        ).finally(
            ()=>console.log("clean up")
        )


    }


    function successfulResponse(response){
        console.log(response.data.messgae)
        setmessage(response.data.messgae)
    }

    
    function errorfulResponse(response){
        console.log(response)
    }

    return (
        <div className="Welcome">
            <h1>Welcome in28minutes</h1>
            <div>
            {
                // use Link instead of a to move another page, because it will load only certain 
                // part of the component which is changing
            }
                Manage Your todos. <Link to='/todos'>Go There</Link>
            </div>

            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>
                    Call REST Api {message}
                </button>
            </div>

        </div>
    )
}