
import { useState } from 'react'
import './lift.css'

const Elevator = ()=>{

    const [currentFloor, setCurrentFloor] = useState(1)
    const [targetFloor, setTargetFloor] = useState(null)
    const [isMoving, setIsMoving] = useState(false)


    const floors = [1,2,3,4,5,6,7,8,9,10]

    const moveToFloor = (floor)=>{
        setTargetFloor(floor)
        setIsMoving(true)

        const timeToMove = Math.abs(floor - currentFloor)*1000

        setTimeout(()=>{
            setIsMoving(false)
            setCurrentFloor(floor)

        },timeToMove)






    }

    return (<>
    <div className="elevator-container">
        <div className="elevator-shaft">
            <div className={`elevator ${isMoving?'moving':''}`}
            style={{bottom: `${(currentFloor -1) *10}%`}}
            >
                {isMoving? 'moving...': `Floor ${currentFloor}`}
               
            </div>

        </div>

        <div className="controls">
            {
                floors.map((floor)=>(
                    <button
                    
                    onClick={()=>moveToFloor(floor)}
                    >
                        {`Go to Floor ${floor}`}
                    </button>

                ))
            }

        </div>

    </div>
    </>)
}


export default Elevator