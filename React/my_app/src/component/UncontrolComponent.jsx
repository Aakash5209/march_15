import { useRef } from "react";

const UncontrolComponent = ()=>{

    const inputRef = useRef(null)
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(e)
        console.log(inputRef.current.value,)
    }
    console.log('Hiii')


    return<>
    <form onSubmit={handleSubmit}>
    Name:<input type="text"  placeholder="enter ur name" name="fname" ref ={inputRef}  />
    <button type='submit'>submit</button>
    </form>
    </>
}

export default UncontrolComponent;