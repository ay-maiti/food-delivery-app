
const MenuCategoryItems = (props) => {
    if(!props.show){
        return
    }
    const items = props.data?.card?.card?.itemCards
    
    return (
        <div>{items?.map(item=> <p>{item.card.info.name}</p>)}</div>
    )
}

export default MenuCategoryItems