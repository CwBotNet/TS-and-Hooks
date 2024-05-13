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
            console.log(error.message)
        }
    }, [])
    return notification
}


export {
    useNotification
}