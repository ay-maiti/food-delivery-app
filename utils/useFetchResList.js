import { useState, useEffect } from "react";
import { fetch_restaurant_list_url } from "./constants";

const useFetchResList = (setCurResList)=>{
    const [resList, setResList] = useState(null);
    useEffect(()=>{fetch_resList()}, [])
    const fetch_resList = async ()=>{
        const data_raw = await fetch(fetch_restaurant_list_url);
        const data = await data_raw.json();
        console.log(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setResList(data?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setCurResList(data?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return resList;
}

export default useFetchResList;