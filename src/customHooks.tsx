import axios from "axios";
import { useEffect, useState } from "react";




const useNotification = () => {

    const [notification, setNotification] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        try {
            (
                async () => {
                    setLoading(true)
                    const response = await axios.get("https://sum-server.100xdevs.com/notifications")
                    setLoading(false)
                    setNotification(response.data)
                }
            )()
        } catch (error: any) {
            console.log(error?.message)
        }
    }, [])
    return {
        data: notification,
        loading: loading
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
        setInterval(() => {
            getData()
        }, sec * 1000)
    }, [sec])

    return {
        data: data,
        loading: loading
    }
}


export {
    useNotification,
    useFetch,
    useAutofetch
}