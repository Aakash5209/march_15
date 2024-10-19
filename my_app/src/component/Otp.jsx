import { useEffect, useState } from "react"

const Otp = () =>{

    const [otp, setOtp] = useState('')
    const [counter,setCounter] = useState(20)
    
    const generateOtp = ()=>{
        const newOtp = Math.floor(1000 + Math.random() * 9000)
        setOtp(newOtp)
    }

    useEffect(()=>{

        generateOtp()

        const otpTimerId = setInterval(()=>{
            generateOtp()
            //reset counter
            setCounter(20)

        },20000)
    
        // handling counter logic
        const counterTimerId = setInterval(()=>{
            setCounter((prev)=>prev>0?prev-1:prev)

        },1000)

        // clean up task
        return ()=>{
            clearInterval(otpTimerId)
            clearInterval(counterTimerId)
        }

    },[])


    return(<>
    <h1>Generate Otp</h1>
    <h2>Your OTP - {otp}</h2>

    <h2>New OTP in : {counter} seconds </h2>
    </>)


}

export default Otp