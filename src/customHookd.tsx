import axios from "axios";
import { useEffect } from "react";




const useNotification = () => {


    useEffect(() => {
        try {

            (
                async () => {

                    const response = axios.get("https://sum-server.100xdevs.com/notifications")
                    return (await response).data
                }
            )()






        } catch (error: any) {
            console.log(error.message)

        }
    }, [])
}


export {
    useNotification
}