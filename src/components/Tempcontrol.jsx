import { useState } from 'react';
import './Temp.css'
const Tempcontrol=()=>{
    const [count,setCount] = useState(0)

    const increament =()=>{
        setCount(count + 1)

    }
    const decrement =()=>{
        setCount(count - 1)
    }
    return(
        <div className="w-100 vh-100 bg-dark text-light mx-auto d-flex align-items-center justify-content-center">
            <div className="">
                <h1>Welcome to React</h1>
                <div className="w-100 bg-black  mx-auto rounded">
                    <div className="p-5">
                        <h2>Temp control app</h2>
                        <div className="rounded-circle border border-danger w-50 p-3 mx-auto circle mt-4" style={{backgroundColor :count>=25 ? 'orange' :'gray'}} >
                            <h2 >{count}<sup className='p-1'>o</sup>C</h2>
                            <h2>{count >=25 ? '😰':'😀'}</h2>
                        </div>
                        <h3 className='pt-2'>{count >= 25 ? 'Its to hot!!!!' : 'Its Normal Temp !!!'}</h3>
                    </div>
                </div>
                    <div className="mt-4">
                        <button className="rounded-circle me-5" onClick={increament}>+</button>
                        <button className="rounded-circle" onClick={decrement}>-</button>
                        
                    </div>
            </div>
        </div>
    )

}
export default Tempcontrol;