import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(1);

    const increaseCount = () => {
        setCount(
            count+counter
        )
    }

    const decreaseCount = () => {
        setCount(
            count-counter
        )
    }

    const counterStep = (value: number) => {
        setCounter(value);
    }
    
    const resetCounter = () => {
        setCounter(1);
    }

    return (
        <div className="main-content flex justify-around h-full py-50 items-center-safe">
            <button className="counter cursor-pointer w-1/5" onClick={() => decreaseCount()}>-</button>
            <div className="px-5 py-4 border-2">{count}</div>
            <button className="counter cursor-pointer w-1/5" onClick={() => increaseCount()}>+</button>
            <label htmlFor="step">Step Size</label>
            <input className="border-2" type="number" value={counter} name="step" onChange={(e) => counterStep(Number(e.target.value))} />
            <button className="cursor-pointer" onClick={resetCounter}>Reset</button>
        </div>
    )
}