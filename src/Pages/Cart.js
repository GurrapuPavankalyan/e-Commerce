import React from 'react';
import Header from '../Components/Header';
import { useDispatch, useSelector, useState } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { decrementQuantity, incrementQuantity, removeItem } from '../Utils/cartSlice';

const Cart = () => {
    // const [cartItems, setCartItems] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => {
        console.log(state);
        console.log(state.cart.items);
        return state.cart.items;
    });
    console.log(cartItems);

  return (
    <div>
        <Header />
        <div>
            {cartItems.length===0 ? (<div>No Items in the Cart</div>) :  (
                <div className='cart-item-container'>
                    {cartItems.map((cart) => (
                        <div className='cart-item' key={cart.id} >
                            <img src={cart.image} alt={cart.title} className='cart-image-container' onClick={()=>{navigate(`/product/${cart.id}`)}}/>
                            <div className='quantity-container'>
                                <button className='decrement-quantity' onClick={()=>{dispatch(decrementQuantity({id: cart.id}))}}>-</button>
                                <div className='item-quantity'>{cart.quantity}</div>
                                <button className='increment-quantity' onClick={()=>{dispatch(incrementQuantity({id: cart.id}))}}>+</button>
                            </div>
                            <button className='remove' onClick={()=>{dispatch(removeItem({id: cart.id}))}}>Remove</button>
                            <p>{cart.title}</p>
                            <p>Rs.{Math.round(cart.price*cart.quantity*85)}</p>
                        </div>
                    ))
                    }
                </div>
            )}
        </div>   
    </div>
  );
};

export default Cart;