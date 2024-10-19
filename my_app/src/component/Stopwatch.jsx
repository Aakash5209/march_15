import { useEffect, useState } from "react"


const Stopwatch = () => {
    const [time, seTime] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {

        let intervalId;

        if (running) {

            intervalId = setInterval(() => {
                seTime((prev) =>  prev + 10 )

            }, 10)
        }
        else {
          
            clearInterval(intervalId)
        }

        return () => clearInterval(intervalId)
    }, [running])

    const hadleStart = () => {
        console.log("start-", true)
        setRunning(true)

    }
    const hadleStop = () => {
        console.log("stop-", false)

        setRunning(false)
    }

    const FormatTime= (time)=>{
        const milisec = `0${Math.floor(time%1000)/10}`.slice(-2)
        const sec = `0${Math.floor(time/1000)%60}`.slice(-2)
        const min = `0${Math.floor(time/60000)%60}`.slice(-2)

        return `${min} : ${sec} : ${milisec}`

    }
    return <>
        <h1>Stop watch</h1>
        <h2>current Timer - {FormatTime(time)}</h2>
        <button onClick={hadleStart}>Start</button>
        <button onClick={hadleStop}>Stop</button>
    </>
}

export default Stopwatch