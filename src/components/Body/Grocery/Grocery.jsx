import useGroceryList from './../../../utils/CustomHooks/useGroceryList';
import './Grocery.css';
import GroceryCard from './GroceryCard/GroceryCard';

const Grocery = () => {

    const groceryList = useGroceryList();

    console.log("groceryList: ", groceryList);


    return (
        <>
            <h1>Welcome to Grocery Store!</h1>
            <div className='grocery-container'>
                {groceryList.map((groceryItem) => <GroceryCard key={groceryItem.id} groceryInfo={groceryItem} />)}
            </div>
        </>
    )
}

export default Grocery;