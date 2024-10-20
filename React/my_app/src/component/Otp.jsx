import { useState } from "react"

const Otp = ()=>{

    const [otp, setOtp] = useState('')

    const generateOtp = ()=>{
        const newOtp = Math.floor(1000 + Math.random()*9000)
        setOtp(newOtp)
        
    }

    return (<>

    <h1>Generate OTP</h1> <br/>
    <h2>Your Otp is {otp}</h2>

    <button onClick={generateOtp}>Click me</button>

    </>)
}

export default Otp;