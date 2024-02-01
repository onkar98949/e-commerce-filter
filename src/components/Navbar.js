import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state)=> state.cart.items);

    return (
        <div className='navdiv'>
            <span className='logo'><i class="ri-store-3-line"></i> STORE</span>
            <div className='navitems'>
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Products</Link></li>
                <li className='homebtn'><Link to='/'><i class="ri-home-3-line"></i></Link></li>
                <li className='flex'><Link to='/cart'><i class="ri-shopping-cart-line"></i><span>{items.length}</span></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar