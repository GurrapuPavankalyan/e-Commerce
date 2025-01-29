import React from 'react';
import '../App.css';
import { CART_LOGO_URL, COMPANY_LOGO_URL, SEARCH_ICON, USER_ICON } from '../Utils/constants';

const Header = () => {
  return (
    <div className='header-container'>
        <img alt='company-logo' className='company-logo' src={COMPANY_LOGO_URL} />
        <div className='searchbar-container'>
          <input className='search-bar' type='text' placeholder='Search for Products in E-Commerce.in' />
          <img alt='search-icon' className='search-icon' src={SEARCH_ICON} />
        </div>
        <img alt='user-icon' className='user-icon' src={USER_ICON} />
        <div className='cart-container'>
          <img alt="cart-logo" className="cart-logo" src={CART_LOGO_URL} />
          <div>
            <p className='cart'>Cart</p>
          </div>
          
        </div>
        
        
    </div>
  );
};

export default Header;