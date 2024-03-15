const MenuCategoryTitle = (props)=>{
 const title = props.data.card.card.title;

 if(title===undefined) return
 return (
    <div className="menu-category-title">
    <h4>{title}</h4>
    <div onClick={(event)=>{
        props.cb(!props.show)        
    }}>{props.show?"⬆️":"⬇️"}</div>
    </div>
 )
}

export default MenuCategoryTitle;