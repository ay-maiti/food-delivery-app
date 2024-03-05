import { useEffect } from "react";
import { useParams} from "react-router-dom";
import { restaurant_menu_url } from "../utils/constants";

const RestaurantMenu = ()=>{
    const resId = useParams();
    console.log(resId)
    useEffect(()=>{
        fetchMenu()
    }, [])

    const fetchMenu = async()=>{
        const data_raw = await fetch(restaurant_menu_url+resId.resId)
        const data = await data_raw.json()
        console.log(data)
    }
    return <div>RestaurantMenu</div>
}

export default RestaurantMenu;