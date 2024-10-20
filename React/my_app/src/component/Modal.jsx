import { useState } from "react"
import './App.css'



const Modal = ()=>{

    const [isOpen,setIsOpen]  = useState(false)

    const openModel = ()=> setIsOpen(true)
    
    const closeModel = ()=> setIsOpen(false)

    

    return(<>
    {/* <h1>hey i m modal</h1> */}
    <div className="modal-conatiner">
        <button className="btnOPen" onClick={openModel}>open Model</button>

        {
            isOpen && (
                <div className="model-overlay" onClick={closeModel }>
                    <div className="model" onClick={(e)=>e.stopPropagation()}>
                    <h2> hi i m model</h2>
                    <button className="btnClose" onClick={closeModel}> close model</button>
                    </div>
                   

                </div>
            )
        }

    </div>

    </>)
}

export default Modal