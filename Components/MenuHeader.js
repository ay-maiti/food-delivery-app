const MenuHeader = (props) => {
    const menu_data = props?.data;
    return <div className="menu-header">
                <div className="menu-header-left">
                    <h3 className="menu-header-title">{menu_data?.data.cards[0].card.card.info.name}</h3>
                    <p className="menu-header-content">{menu_data?.data.cards[0].card.card.info.cuisines.join(", ")}</p>
                    <p className="menu-header-content">{menu_data?.data.cards[0].card.card.info.areaName}</p>
                </div>
                <div className="menu-header-right">
                    <p className="menu-header-content">{"⭐ "+menu_data?.data.cards[0].card.card.info.avgRatingString}</p>
                    <p className="menu-header-content">{menu_data?.data.cards[0].card.card.info.totalRatingsString}</p>
                </div>
            </div>
}

export default MenuHeader;