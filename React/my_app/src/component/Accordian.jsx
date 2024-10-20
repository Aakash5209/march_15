import { useState } from "react"
import './App.css'


const data = [
    {title : 'setcion 1', content: 'hey i m section 1' },
    {title : 'setcion 2', content: 'hey i m section 2' },
    {title : 'setcion 3', content: 'hey i m section 3' },
    {title : 'setcion 4', content: 'hey i m section 4' },
]

const Accordian = ()=>{

    const [activeIndex, setactiveIndex] = useState(null)

    const toggle = (index)=>{
        setactiveIndex(activeIndex===index?null:index)


    }
    

    return(<>
    <h1>hey i m Accordian</h1>
    <div className="accordianContainer" >
        {data.map((item,index)=>( 
            <>
           <button className="accBTN" onClick={()=>toggle(index)}>{item.title}</button>

            {activeIndex===index && <p  className="accpara"> {item.content}</p>}

            </>
            )




            
        )}


    </div>

    </>)
}

export default Accordian;