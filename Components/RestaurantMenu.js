import { useParams} from "react-router-dom";

import useFetchResMenu from "../utils/useFetchResMenu";
import MenuHeader from "./MenuHeader";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = ()=>{
  //  const [expand, setExpand] = useState(false)
    const resId = useParams();
    console.log(resId.resId)
    const menuData = useFetchResMenu(resId.resId)
    if(menuData===null){
        return <div></div>
    }
    const menu = menuData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
    console.log("menu: "+typeof(menu))
    return  (
    <div className="menu">
        <MenuHeader data={menuData}/>
       { menu.map(card=><MenuCategory data={card}/>)}
    </div>
    )
}

export default RestaurantMenu;