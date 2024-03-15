import { useState, useEffect } from "react";


const useGetOnlineStatus = ()=>{
    
    const [status, setStatus] = useState(navigator.onLine);

    useEffect(()=>{
        window.addEventListener("online", (event)=>{
            console.log("you are now online")
            setStatus(true)});
        window.addEventListener("offline", (event)=>{
            console.log("you are now offline")
            setStatus(false)});
    }, [])

    console.log("mounted")
    return status;
}

export default useGetOnlineStatus;

