import { useParams} from "react-router-dom";
import useFetchResMenu from "../utils/useFetchResMenu";

const RestaurantMenu = ()=>{
    const resId = useParams();
    const menu_data = useFetchResMenu(resId.resId)
    return <div>{menu_data?.deviceId}</div>
}

export default RestaurantMenu;