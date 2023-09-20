import { useState } from 'react';
import './Counter.css';


export default function CounterButton({by,incrementMethod,minusMethod}){




  /*  const buttonStyle = {
        fontSize:"16px",
        backgroundColor:"#00a5ab",
        width:"100px",
        margin:"10px",
        color:"white",
        padding:"15px",
        borderRadius:"30px"
    }
 
    */

    function minusCounterFuntion(){
        
        minusMethod(by)
    }
 
 
    return (
        <div className="Counter">
            <div>
                <button className='counterButton' onClick={()=>incrementMethod(by)}>+{by}</button>
                <button className='counterButton' onClick={()=>minusMethod(by)}>-{by}</button>
            </div>
        </div>
    )
}




// validate type of paramater it can accept
