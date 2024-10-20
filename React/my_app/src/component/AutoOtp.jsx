import { useEffect, useState } from "react"

const AutoOtp= ()=>{
    const [otp, setOtp] = useState('')
    const [counter, setCounter] = useState(20)

    const generateOtp = ()=>{
        const newOtp = Math.floor(1000 + Math.random()*9000)
        setOtp(newOtp)
    }


    useEffect(()=>{
        generateOtp()
        
       //new otp in 20sec

   const otpTimerId = setInterval(()=>{
            generateOtp()
            setCounter(20)

        },20000)

        // counter logic
    const counterTimerId =  setInterval(()=>{
            setCounter((prev)=>prev>0 ? prev-1 : prev)
        },1000)

    return ()=>{
        console.log("i m die")
        clearInterval(otpTimerId)
        clearInterval(counterTimerId)
    }


    },[])





    return<>
    <h1>here is your Otp - {otp}</h1>
    <h2>New Otp is generate in {counter} seconds</h2>
    </>
}

export default AutoOtp;