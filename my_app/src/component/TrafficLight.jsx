import { useEffect, useState } from "react";
import './app.css'


const TrafficLight = ()=>{

    const [currentLight,setCurrentLight] = useState('red')

    useEffect(()=>{
       const intervalId = setInterval(()=>{
        
            setCurrentLight((prevLight)=> {
                if(prevLight=='red') return'yellow'
                if(prevLight==='yellow') return 'green'
                // if(prevLight==='green') return 'red'
                return 'red'


            })

        },5000)
        
        return ()=>{
            clearInterval(intervalId)
        }

    },[])


    return(<>
    <h1>Traffic Light</h1>

    <div className="signal-light">

        <div className= {`circle red ${currentLight==='red' ? 'active':''} `}> </div>
        <div className= {`circle yellow ${currentLight==='yellow' ? 'active':''} `}> </div>
        <div className= {`circle green ${currentLight==='green' ? 'active':''} `}> </div>


        
        
        

    </div>

    </>)
}

export default TrafficLight;