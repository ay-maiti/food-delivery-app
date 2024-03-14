import { res_img_url } from "../utils/constants";
const RestaurantCard = (props)=>{
    const {cloudinaryImageId, name, avgRating, sla, cuisines, locality} = props.resData.info;
    let cuisineString;
    if(cuisines.length>3){
        cuisineString = cuisines[0]+", "+cuisines[1]+", "+cuisines[2]+" ..."
    }
    else{
        cuisineString = cuisines.join(", ")
    }
    return <div className="res-card">
        <img className="res-logo" src={res_img_url+cloudinaryImageId}/>
        <div className="card-text">
            <h3 className="res name">{name}</h3>
            <h4 className="res ratings-deltime">⭐ {avgRating} . {sla.slaString}</h4>
            <h4 className="res cuisine">{cuisineString}</h4>
            <h4 className="res location">{locality}</h4>
        </div>
    </div>
}

export const addVegLabel = (RestaurantCard)=>{
    return (props)=>{
        return <div>
                <label className="veg-label">VEG</label>
                <RestaurantCard {...props}/>
               </div>
    }
}

export default RestaurantCard; 