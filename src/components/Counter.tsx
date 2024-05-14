import { useState } from "react"
import { useInterval } from "../customHooks";

const Counter = () => {
    const [count, setCount] = useState(0);
    useInterval(() => {
        setCount(c => c + 1)
    }, 1000)
    return (
        <div>count: {count}</div>
    )
}

export default Counter