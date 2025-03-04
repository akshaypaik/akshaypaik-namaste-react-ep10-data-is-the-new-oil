import './RestaurantMenu.css';
import RestaurantMenuCard from '../RestaurantMenuCard/RestaurantMenuCard';
import { useParams } from 'react-router-dom';
import ShimmerUICard from '../ShimmerUI/ShimmerUICard/ShimmerUICard';
import useRestaurantMenu from '../../../../utils/CustomHooks/useRestaurantMenu';
import RestaurantMenuCategory from '../RestaurantMenuCategory/RestaurantMenuCategory';
import { useState } from 'react';

export default function RestaurantMenu() {

    const { resturantId } = useParams();

    //This is a custom hook useRestaurantMenu()
    const { resInfo = {}, menuItemCards = [] } = useRestaurantMenu(resturantId);
    const [selectedCategory, setSelectedCategory] = useState("");

    const { name, cuisines, costForTwoMessage } = resInfo;
    console.log("menuItemCards: ", menuItemCards);

    const menuCategories = new Set([]);
    const menuItemDataWithCategory = [];

    menuItemCards.forEach((menuItem) => {
        menuCategories.add(menuItem.title);
    });
    menuCategories.forEach((category) => {
        const data = menuItemCards.filter(item => item.title === category);
        menuItemDataWithCategory.push({ category, data });
    });
    console.log("menuCategories: ", menuCategories);
    console.log("menuItemDataWithCategory: ", menuItemDataWithCategory);

    if (menuItemCards.length === 0) {
        return <ShimmerUICard />
    }

    const handleSelectedCategory = (category) => {
        setSelectedCategory(category);
    }


    return (
        <div className="res-menu">
            <h1>{name}</h1>
            <div> {cuisines?.join(", ").toUpperCase()} - <strong>{costForTwoMessage}</strong></div>
            <h2>Menu</h2>
            {menuItemDataWithCategory.map((menu, index) => {
                return <RestaurantMenuCategory category={menu.category}
                    categoryInfos={menu.data}
                    key={menu.category}
                    isFirstCategory={index === 0 ? true : false}
                />
            })}
        </div>
    )
}