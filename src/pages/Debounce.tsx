import { useState } from "react"
import { useDebounce } from "../customHooks"

const Debounce = () => {
    const [value, setValue] = useState("")
    const debounceValue = useDebounce(value, 500)
    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <br />
            <h2>
                Debounce value Appear here
            </h2>
            <h3>
                {debounceValue}
            </h3>

        </div>
    )
}

export default Debounce