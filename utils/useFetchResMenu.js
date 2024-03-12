import {restaurant_menu_url} from "./constants"
import { useState, useEffect } from "react";

const useFetchResMenu = function(resId){
    const [menuData, setMenuData] = useState(null);
    useEffect(fetch_menu,[])

    function fetch_menu(){        
        getData()
    }

    const getData = async ()=>{
        const data_raw = await fetch(restaurant_menu_url+resId);
        const data = await data_raw.json();
        setMenuData(data);
    }
    
    console.log(menuData)
    return menuData;
}

export default useFetchResMenu;