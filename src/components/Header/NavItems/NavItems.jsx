import { useEffect, useState } from 'react';
import './NavItems.css';
import { Link } from 'react-router-dom';

export default function NavItems() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    console.log("NavItems rendered");

    // If no dependency array => useEffect is called on every component render 
    // If dependency array is empty = [] => useEffect is called on initial component render(only once)  
    // If dependency array is [isLoggedIn] => useEffect is called everytime isLoggedIn is updated
    useEffect(() => {
        console.log("useEffect called");
    }, []);

    return (
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><span className="cart-icon"></span>Cart</li>
                <button
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                    className='login-btn' style={{ backgroundColor: isLoggedIn ? 'rgb(233, 61, 61)' : 'green', color: 'white' }} >
                    {isLoggedIn ? 'Log Out' : 'Log In'}
                </button>
            </ul>
        </div>
    )
}