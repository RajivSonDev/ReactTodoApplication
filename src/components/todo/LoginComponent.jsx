import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from './security/AuthContext';


export default function LoginComponent(){


    // you need to use state to update the form values 
    const [userName,setUserName]=useState('in28minutes');
    const [password,setPassword]=useState('');
    const [showSuccessMessgae, setShowSuccessMessage]=useState(false)
    const [showErrorMessgae, setShowErrorMessage]=useState(false)

    const authContext=useAuth();

    const navigate=useNavigate()

    function handleUsernameChange(event){
        setUserName(event.target.value) // update user name in the state
       // console.log(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value) // update user name in the state
       //console.log(event.target.value)
        
    }

    function handleSubmit(){
    
        if(authContext.login(userName,password)){
           navigate(`/welcome/${userName}`)  // to route another component  ` we use this to pass the variables
    
        }else{
            setShowErrorMessage(true)
        }
        
    }

    function SuccessMessageComponent(){

        if(showSuccessMessgae){     
            return (
                <div className='successMessage'>Authenticated Successfully</div>
            )
        }
        return null
    }



    return (
        <div className="Login">
            <h1>Time to Login!</h1>
            {showErrorMessgae &&  <div className='successMessage'>Authentication Failed. Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username"  value={userName} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label> 
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="Login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}
