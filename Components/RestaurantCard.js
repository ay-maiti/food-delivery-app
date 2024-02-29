const RestaurantCard = (props)=>{
    const {name, rating, delTime, cuisine, location} = props;
    return <div className="res-card">
        <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/oy1fu3a6ztlv9mqpeq5u"/>
        <div className="card-text">
            <h3 className="res name">{name}</h3>
            <h4 className="res ratings-deltime">⭐ {rating} . {delTime}</h4>
            <h4 className="res cuisine">{cuisine}</h4>
            <h4 className="res location">{location}</h4>
        </div>
    </div>
}

export default RestaurantCard; 