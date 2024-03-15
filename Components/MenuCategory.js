import MenuCategoryItems from "./MenuCategoryItems";
import MenuCategoryTitle from "./MenuCategoryTitle";
import {useState} from "react"

const MenuCategory = (props) =>{
    const [expand, setExpand] = useState(false)
    return (
        <div>
            <MenuCategoryTitle data={props.data} show= {expand} cb={setExpand}/>
            <MenuCategoryItems data={props.data} show={expand}/>
        </div>
    )
}

export default MenuCategory;