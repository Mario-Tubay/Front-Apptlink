import { useEffect, useState } from "react"
import { getSession } from "../services/auth"

export const useSession = () => {
    const [status, setStatus] = useState("loading")
    const [data, setData] = useState(null)

    useEffect(()=> {
        const getData = async () => {
            const response = await getSession()
            setStatus(response?.status)
            setData(response?.data)
        }
        getData()
    }, [])

    return {
        status,
        data,
    }
}
