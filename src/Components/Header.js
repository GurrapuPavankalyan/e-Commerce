import React from 'react';
import '../App.css';
import { CART_LOGO_URL, COMPANY_LOGO_URL, SEARCH_ICON, USER_ICON } from '../Utils/constants';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const clickHandler = () =>{
    navigate("/home");
  };

  return (
    <div className='header-container'>
        <img alt='company-logo' className='company-logo' src={COMPANY_LOGO_URL} />
  
        <p className='home' onClick={clickHandler}>Home</p>
        
        <div className='searchbar-container'>
          <input className='search-bar' type='text' placeholder='Search for Products in E-Commerce.in' />
          <img alt='search-icon' className='search-icon' src={SEARCH_ICON} />
        </div>
        <img alt='user-icon' className='user-icon' src={USER_ICON} />
        <div className='cart-container' onClick={() => navigate("/cart")}>
          <div className='cart-logo-container'>
            <img alt="cart-logo" className="cart-logo" src={CART_LOGO_URL} />
          </div>
          <div>
            <p className='cart'>Cart</p>
          </div>
        </div>
    </div>
  );
};

export default Header;