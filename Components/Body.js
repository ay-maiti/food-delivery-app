import RestaurantCard from "./RestaurantCard";
import res_data from "../utils/data"
import {fetch_restaurant_list_url} from "../utils/constants"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{
    const [resList, setResList] = useState([])
    const [curResList, setCurResList] = useState([]);

    const [searchText, setSearchText] = useState([]);

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async ()=>{
        const data_json = await fetch(fetch_restaurant_list_url)
        const data = await data_json.json();
        console.log(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setResList(data?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setCurResList(data?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return <div className="body">
        <div className="filter_container">
            <div className="search">
                <input className="search-input" value={searchText} onChange={e=>setSearchText(e.target.value)}/>
                <button onClick={()=>{
                    const filtered_res_list = resList.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setCurResList(filtered_res_list)
                }}>Search</button>
            </div>
            <button className="filter_top_restaurants" onClick={()=>{
                const filtered_res = resList.filter(res=>res.info.avgRating>=4.5)
                console.log(filtered_res)
                setCurResList(filtered_res)
            }}>Show Top Restaurants</button>
        </div>
        {
        curResList.length>0?
        <div className="res-card-container">
            {curResList.map(restaurant=><RestaurantCard key= {restaurant.info.id} resData={restaurant}/>)}
        </div>
        :<Shimmer/>
        }

      </div>
}

export default Body;