// // counter

// import { useEffect, useState } from "react"

// const Counter = () => {

//     // lazy initialization
//     const [count, setCount]  = useState(()=>{
//         const savecnt = localStorage.getItem('cnt')
//         console.log("hi i m fire")
//         return savecnt ? parseInt(savecnt,10):0
//     })


//     // const [count , setCount]  = useState(localStorage.getItem('cnt'))




//     // useEffect(() => {
//     //     localStorage.setItem('cnt', count)

//     // }, [count])

   

//     const style = {
//         container: {
//             display: 'flex'
//         }
//     }

//     const increment = () => {

//         // setCount((prev)=>prev+1) 

        

//         setCount(count + 1) 

//         // setCount(count + 1)

//         // setTimeout(()=>{

//         // setCount(count + 1) 

//         // setCount(count + 1)

//         // setCount(count + 1)

//         // },1000)



//     }

//     // setCount(count + 1)

//     console.log("count in after increment fxn",count)

//     const decrement = () => {

//         setCount(count - 1)


//     }
//     // const reset = ()=>{

//     // }

//     return (<>
//         <h1>counter - </h1>
//         <h2>{count}</h2>
//         <button onClick={increment}> Increment</button>
//         <button onClick={decrement}>Decrement</button>
//         <button onClick={() => { setCount(0) }}>Reset</button>

//     </>)
// }

// export default Counter



import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0, // Initial count
    };
  }

  // Method to increment the count
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Method to decrement the count
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  // Method to reset the count to zero
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment} style={{ margin: '5px' }}>
          Increment
        </button>
        <button onClick={this.decrement} style={{ margin: '5px' }}>
          Decrement
        </button>
        <button onClick={this.reset} style={{ margin: '5px' }}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
