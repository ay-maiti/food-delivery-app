import { github_user_url } from "./constants"
import { useState, useEffect } from "react"
import credentials from "./credentials"

const useFetchUser = ()=>{
    const [username, setUsername] = useState()
    useEffect(()=>{
        fetchUser()
    }, [])

    async function fetchUser(){
        const data_raw = await fetch(github_user_url)
        const data = await data_raw.json()
        setUsername(data.login)
    }

    return [username, setUsername]
}

export default useFetchUser;