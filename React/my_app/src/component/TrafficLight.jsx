import { useEffect, useState } from "react"
import './App.css';
const TrafficLight = ()=>{

    const [currentLight, setCurrentLight] = useState('red')

    useEffect(()=>{

       const intervalId =  setInterval(()=>{
            setCurrentLight((prev)=>{
                if(prev ==='red') return 'yellow'
                if(prev == 'yellow') return 'green'
                return 'red'

            })

        },2000)

        return()=>{
            clearInterval(intervalId)
        }
    },[])


    return (<>
    <h1> Traffic Light - </h1>
    <div  style={{}} className="signal-light">

        <div className={`circle red ${ currentLight==='red'? 'active' : ''} `}>

        </div>
        <div className={`circle yellow ${ currentLight==='yellow'? 'active' : ''}`}>

        </div>
        <div className={`circle green ${ currentLight==='green'? 'active' : ''}`}>

        </div>

    </div>
    </>)
}

export default TrafficLight