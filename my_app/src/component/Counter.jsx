import { useEffect, useState } from "react";



const Counter = ()=>{
    const [count,SetCount] =  useState()

    useEffect(()=>{
        const saveCount =  localStorage.getItem('Count')
        console.log("gettiinng value",saveCount)

        
        if(saveCount){
            SetCount(parseInt(saveCount,10))
        }


    },[])

    useEffect(()=>{
        console.log('hii ')
        localStorage.setItem('Count',count)

    },[count])
     
    const handelIncrease =()=>{
        SetCount((prev)=>prev +1)
        
        // console.log('inside handelIncrease-',count)
       

    }

 
    const handelDec= ()=>{
        SetCount(count-1)
    }
    return <>
    <h1>Counter</h1>
    <h2>counter value is - {count} </h2>

    <button onClick={handelIncrease}> Increment</button>
    <button onClick={handelDec}> decrement</button>
    
    </>
}

export default Counter;