import { useEffect, useState } from 'react';
import RestaurantMenuCard from '../RestaurantMenuCard/RestaurantMenuCard';
import './RestaurantMenuCategory.css';

export default function RestaurantMenuCategory({ category, categoryInfos, isFirstCategory }) {

    const [showMenuCard, setShowMenuCard] = useState(false);
    const [firstCategory, setFirstCategory] = useState(false);

    useEffect(() => {
        setFirstCategory(isFirstCategory);
    }, []);

    return (
        <div className='res-menu-category' onClick={() => {firstCategory ? setFirstCategory(false) : setShowMenuCard(!showMenuCard)}}>
            <div className='category-name-accordion' onClick={() => {  }}>
                <span>{category} ({categoryInfos.length})</span>
                <span>🔽</span>
            </div>

            {(showMenuCard || firstCategory) && categoryInfos.map((item, index) =>
                <RestaurantMenuCard menuCardDetails={item?.card?.info} key={item?.card?.info.id}
                />)}

        </div>
    )
}