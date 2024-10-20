import { useEffect, useState } from "react"


const Stopwatch = ()=>{

    const  [ time , setTime] = useState(0)

    const [isRunning, SetIsRunning] = useState(false)

    useEffect(()=>{
        let timerId;

        if(isRunning){
        timerId = setInterval(()=>{
                setTime((prev)=>prev+10)
            },10)
        }
        else{
            clearInterval(timerId)

        }

        return ()=>{
            clearInterval(timerId)

        }



    },[isRunning])

    const FormatTime =(time)=>{
        const miliSec = `${Math.floor(time%1000)}`.slice(-2)
        const seconds = `0${(Math.floor(time/1000)%60)}`.slice(-2)
        const min = `0${Math.floor((time/60000)%60)}`.slice(-2)

        return `${min}:${seconds}:${miliSec}`

    }




    return (<>
    <div>
    <h1>Stop watch</h1>
    <div>
        {FormatTime(time)}

    </div>

    <div>
        <button onClick={ ()=>SetIsRunning(true)} > Start</button>
        <button onClick={()=>SetIsRunning(false)}>Stop</button>
        <button onClick={()=>{{setTime(0);SetIsRunning(false)}}}>Reset</button>
        <button onClick={()=>{{SetIsRunning(false)}}}>Pause</button>
    </div>

    </div>
    
    
    </>)


}
export default Stopwatch