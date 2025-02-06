import React from 'react';
import Header from '../Components/Header';
import { useSelector, useState } from 'react-redux';

const Cart = () => {
    // const [cartItems, setCartItems] = useState([]);
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
            { cartItems.length===0 && <div>No Items in the Cart</div>}
        </div>
        
        <div>
            {cartItems.map((cart) => (
                <div className='cart-item-container' key={cart.id}>
                    <div className='cart-item'>
                        <img src={cart.image} alt={cart.title} className='cart-image-container'/>
                        <p>{cart.title}</p>
                        <p>{cart.price}</p>
                    </div>

                </div>
            ))
            }
        </div>
    </div>
  );
};

export default Cart;