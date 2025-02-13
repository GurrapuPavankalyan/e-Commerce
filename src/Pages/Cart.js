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
        {cartItems.length===0 ? (<div className='empty-cart'>Your Cart is Empty</div>) : (
            <div className='main-cart-container'>
                <div>
                    {cartItems.length===0 ? (<div>No Items in the Cart</div>) :  (
                        <div className='cart-item-container'>
                            {cartItems.map((cart) => (
                                <div className='cart-item' key={cart.id} >
                                    <div className='image-quanity-container'>
                                        <img src={cart.image} alt={cart.title} className='cart-image-container' onClick={()=>{navigate(`/product/${cart.id}`)}}/>
                                        <div className='quantity-container'>
                                            <button className='decrement-quantity' onClick={()=>{dispatch(decrementQuantity({id: cart.id}))}}>-</button>
                                            <div className='item-quantity'>{cart.quantity}</div>
                                            <button className='increment-quantity' onClick={()=>{dispatch(incrementQuantity({id: cart.id}))}}>+</button>
                                        </div>
                                    </div>
                                    <div className='title-price-container'>
                                        <p>{cart.title}</p>
                                        <p>Rs.{Math.round(cart.price*cart.quantity*85)}</p>
                                        <button className='remove' onClick={()=>{dispatch(removeItem({id: cart.id}))}}>Remove</button>
                                    </div>
                                </div>
                            ))
                            }
                            <div className='place-order-button-container'>
                                <button className='place-order-button'>PLACE ORDER</button>
                            </div>
                        </div>
                    )}
                </div>
                <div className='price-details-container'>
                    <div className='price-details'>
                        <h2>PRICE DETAILS</h2>
                        <p>Price:  <span className='price-span'>₹
                            {cartItems.reduce((total, item) => Math.round(total + item.price * item.quantity * 85), 0)}</span>
                        </p>
                        <p>Discount:  <span className='discount-span'>-₹{cartItems.reduce((total, item) => Math.round(total + item.price * item.quantity * 85 * 0.3), 0)}</span></p>
                        <p>Delivery Charges: <span className='text-decoration'>₹120</span> <span className='delivery-charges-span'>Free</span></p>
                        <h3>Total Amount: <span className='total-amount-span'>₹{cartItems.reduce((total, item) => Math.round(total + item.price * item.quantity * 85 * 0.7), 0)}</span></h3>
                    </div> 
                </div>    
            </div>
            )}                
    </div>
  );
};

export default Cart;