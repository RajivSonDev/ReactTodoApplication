import CounterButton from './CounterButton';
import { useState } from 'react';

export default function Counter(){

    const [count,setCount] = useState(0) 

    function incrementParentCounterFuntion(by){
        setCount(count+by)
    }

    function minusParentCounterFuntion(by){
        setCount(count-by)
    }

    function resetCounterFuntion(by){
        setCount(0)
    }

    

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementParentCounterFuntion} minusMethod={minusParentCounterFuntion}/> 
            <CounterButton by={2} incrementMethod={incrementParentCounterFuntion}  minusMethod={minusParentCounterFuntion}/> 
            <CounterButton by={3} incrementMethod={incrementParentCounterFuntion} minusMethod={minusParentCounterFuntion}/> 
            <button className='counterButton' onClick={resetCounterFuntion}>Reset</button>
        </>
    )
}   
