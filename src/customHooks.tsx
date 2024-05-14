import axios from "axios";
import { useEffect, useState } from "react";




const useNotification = () => {
    const [notification, setNotification] = useState({})
    useEffect(() => {
        try {
            (
                async () => {
                    const response = await axios.get("https://sum-server.100xdevs.com/notifications")
                    setNotification(response.data)
                }
            )()
        } catch (error: any) {
            console.log(error?.message)
        }
    }, [])
    return {
        data: notification,
    }
}


const useFetch = (url: string) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        (async () => {
            setLoading(true)

            const response = await axios.get(url)
            if (!response) {
                return console.error("fetch error")
            }
            // console.log(response.data)
            setData(response.data)
            setLoading(false)
        })()
    }, [])

    // console.log(data, loading)
    return {
        data: data,
        loading: loading
    }
}


const useAutofetch = (sec: number, url: string) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const getData = async () => {
        setLoading(true)
        const response = await axios.get(url)
        setLoading(false)
        setData(response.data)
    }


    useEffect(() => {

        const value = setInterval(() => {
            getData()
        }, sec * 1000)

        axios.get(url).then(res => {
            setLoading(true)
            setData(res.data)
            setLoading(false)
        })

        return () => {
            clearInterval(value)
        }
    }, [sec])



    return {
        data: data,
        loading: loading
    }
}



const useMousePointer = () => {
    // window.addEventListener('mousemove', handleMouseMove);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    function handelMouseEvent(e) {
        setMousePosition({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        window.addEventListener('mousemove', handelMouseEvent)

        return () => {
            window.removeEventListener('mousemove', handelMouseEvent)
        }
    }, [])


    return mousePosition

}


const useIsOnline = () => {
    const [online, setOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        window.addEventListener(
            "online",
            () => {
                setOnline(true)
            }
        )

        window.addEventListener("offline", () => {
            setOnline(false)

        })
    }, [])

    return online
}


const useInterval = (callback, delay: number) => {
    useEffect(() => {
        const intervalId = setInterval(callback, delay)

        return () => {
            clearInterval(intervalId)
        }
    }, [callback, delay])
}


type InputValue = string | number

const useDebounce = (value: InputValue, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(timerId)
        }
    }, [value, delay])

    return debouncedValue

}


export {
    useNotification,
    useFetch,
    useAutofetch,
    useMousePointer,
    useIsOnline,
    useInterval,
    useDebounce
}