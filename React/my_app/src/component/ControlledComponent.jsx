import { useState } from "react";

const ControlledComponent = ()=>{

    const [formData,setFormData] = useState({
        fname : "",
        lname : "",
        email : "",
        phone:"",
       
        
    })
    
    const handleChange = (e)=>{
        const {name, value} = e.target
        console.log(`${name}=> ${value}`)

        setFormData({
            ...formData,
           [name] : value // missmatch


        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("form submitted",formData)
    }
    
    
    return(<>
    <form onSubmit={handleSubmit}>
        <label >
        First Name:<input type="text" placeholder="enter ur first name" name='fname' value = {formData.fname} onChange={handleChange} />
        </label> <br/>
        <label >
        Last Name:<input type="text" placeholder="enter ur first name" name='lname' value = {formData.lname} onChange={handleChange} />
        </label><br/>
        <label >
        Email:<input type="text" placeholder="enter ur first name" name='email' value = {formData.email} onChange={handleChange} />
        </label><br/>
        <label >
        Phone No:<input type="text" placeholder="enter ur first name" name='phone' value = {formData.phone} onChange={handleChange} />
        </label><br/>
        <button type="submit">submit</button>

    </form>
    
    </>)

}  

export default ControlledComponent;