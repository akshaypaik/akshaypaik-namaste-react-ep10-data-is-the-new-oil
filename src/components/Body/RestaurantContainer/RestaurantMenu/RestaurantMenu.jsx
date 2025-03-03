import './RestaurantMenu.css';
import RestaurantMenuCard from '../RestaurantMenuCard/RestaurantMenuCard';
import { useParams } from 'react-router-dom';
import ShimmerUICard from '../ShimmerUI/ShimmerUICard/ShimmerUICard';
import useRestaurantMenu from '../../../../utils/CustomHooks/useRestaurantMenu';

export default function RestaurantMenu() {

    const { resturantId } = useParams();

    //This is a custom hook useRestaurantMenu()
    const { resInfo = {}, menuItemCards = [] } = useRestaurantMenu(resturantId);

    const { name, cuisines, costForTwoMessage } = resInfo;
    console.log("menuItemCards: ", menuItemCards);

    if (menuItemCards.length === 0) {
        return <ShimmerUICard />
    }

    return (
        <div className="res-menu">
            <h1>{name}</h1>
            <div> {cuisines?.join(", ").toUpperCase()} - <strong>{costForTwoMessage}</strong></div>
            <h2>Menu</h2>
            {menuItemCards.map(item => <RestaurantMenuCard menuCardDetails={item?.card?.info} key={item?.card?.info.id} />)}
        </div>
    )
}