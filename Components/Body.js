import RestaurantCard from "./RestaurantCard";
import {useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useFetchResList from "../utils/useFetchResList";

const Body = ()=>{
    const [curResList, setCurResList] = useState([]);

    const [searchText, setSearchText] = useState([]);

    const resList = useFetchResList(setCurResList);

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
        curResList?.length>0?
        <div className="res-card-container">
            {curResList.map(restaurant=><Link key= {restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>)}
        </div>
        :<Shimmer/>
        }

      </div>
}

export default Body;