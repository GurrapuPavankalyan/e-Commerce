import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Components/Header';
import { decrementQuantity, incrementQuantity, removeItem } from '../Utils/cartSlice';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const [showAddress, setShowAddress] = useState(false);
    const [saveStatus, setSaveStatus] = useState(false);
    const [editAddress, setEditAddress] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => {
        return state.cart.items;
    });
    const user = useSelector((state) => state.user.user) || {};

    const displayName = user?.displayName || "Guest";
    const email = user?.email || "No email provided";

    const toggleAddressButton = () => {
        setShowAddress(!showAddress);
    }

    console.log(saveStatus);

    const handleSaveStatus = () => {
        if(showAddress){
            setSaveStatus(true);
            console.log(saveStatus);
        }
    }

    const handleEditAddress = () => {
        setEditAddress(!editAddress);
    }

    const handleSaveButton = () => {
        setShowAddress(!showAddress);
    }

    const handlePayment = () => {
        alert(`Processing ${paymentMethod} payment...`);
        /*const timer = setTimeout(()=>{
          alert("Payment successful");  
        }, 100);*/
        //clearInterval(timer);
        setTimeout(()=>{
            alert("Payment successful");  
          }, 300);
    }

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [apartment, setApartment] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [postcode, setPostcode] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div>
        <Header />
        <div className='checkout-container'>
            <div className='checkout-details'>
                <div className='login-details-container'>
                    <div className='checkout-login'>
                        <div className='login'>
                            <p className='index'>1</p>
                            <h4>LOGIN</h4>
                        </div>
                        <button className='Change-button'>CHANGE</button>    
                    </div>
                    <div className='user-name'>
                        <p>User: {displayName}</p>
                        <p>Email: {email}</p>
                    </div>               
                </div>
                <div className='delivery-address-container'>
                    <div className='checkout-address'>
                        <div className='address'>
                            <p className='index'>2</p>
                            <h4>DELIVERY ADDRESS</h4>
                        </div>               
                        {!saveStatus && <button onClick={()=>{toggleAddressButton(); handleSaveStatus();}}>{showAddress ? "Save Address" : "Add Address"}</button>}
                        {/*<button onClick={()=>{toggleAddressButton(); handleSaveStatus();}}>{showAddress ? "Save Address" : "Add Address"}</button>*/}
                        {saveStatus && <button onClick={()=>{handleEditAddress(); handleSaveButton();}}>{editAddress ? "SAVE" : "CHANGE"}</button>}
                    </div>
                    {(showAddress||editAddress) && 
                        <div class="input-container">
                        <div className='name-container'>
                            <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='first-name' required />
                            <input type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} className='last-name' required />
                        </div>
                        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className='address' />
                        <input type="text" placeholder="Apartment, suite, etc. (optional)" value={apartment} onChange={(e) => setApartment(e.target.value)} className='apartment' />
                        <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className='city' />
                        <div className='country-details'>
                            <input type="text" placeholder="country" value={country} onChange={(e) => setCountry(e.target.value)} className='country' />
                            <input type="text" placeholder="state" value={state} onChange={(e) => setState(e.target.value)} className='state' />
                            <input type="number" placeholder="postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} className='postcode' />
                        </div>
                        <input type="number" placeholder="Phone number for updates" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} className='phonenumber' />
                        </div>
                    }
                    {(!editAddress && !showAddress) && 
                        <div class="saved-address-container">
                            <div className='name-phonenumber-container'>
                                <h4>{firstName+""+lastName}</h4>
                                <h4>{phonenumber}</h4>
                            </div>
                            <div>
                                <p>{address} {apartment} {city} {state} {country} {postcode}</p>
                            </div>
                        </div>
                    }
                    {/*{
                        editAddress &&  
                        <div class="input-container">
                        <div className='name-container'>
                            <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='first-name' required />
                            <input type="text" placeholder="Last name"  value={lastName} onChange={(e) => setLastName(e.target.value)} className='last-name' required />
                        </div>
                        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className='address' />
                        <input type="text" placeholder="Apartment, suite, etc. (optional)" value={apartment} onChange={(e) => setApartment(e.target.value)} className='apartment' />
                        <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className='city'  />
                        <div className='country-details'>
                            <input type="text" placeholder="country" value={country} onChange={(e) => setCountry(e.target.value)} className='country' />
                            <input type="text" placeholder="state" value={state} onChange={(e) => setState(e.target.value)} className='state' />
                            <input type="number" placeholder="postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} className='postcode' />
                        </div>
                        <input type="number" placeholder="Phone number for updates" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} className='phonenumber' />
                        </div>
                    }*/}
                    
                </div>
                <div className='order-summary-container'>
                    <div className='order-container'>
                        <div className='order'>
                            <p className='index'>3</p>
                            <h4>ORDER SUMMARY</h4>
                        </div>
                    </div>
                        <div className='order-item-container'>
                        {cartItems.map((cart) => (
                            <div className='order-item' key={cart.id} >
                                <div className='image-quanity-container'>
                                    <img src={cart.image} alt={cart.title} className='order-image-container' onClick={()=>{navigate(`/product/${cart.id}`)}}/>
                                    <div className='order-quantity-container'>
                                        <button className='order-decrement-quantity' onClick={()=>{dispatch(decrementQuantity({id: cart.id}))}}>-</button>
                                        <div className='order-quantity'>{cart.quantity}</div>
                                        <button className='order-increment-quantity' onClick={()=>{dispatch(incrementQuantity({id: cart.id}))}}>+</button>
                                    </div>
                                </div>
                                <div className='title-price-container'>
                                    <div className='delivery-time'>
                                        <h4>{cart.title}</h4>
                                        <p>Delivery by next 5 days</p>
                                    </div>
                                    <p>Rs.{Math.round(cart.price*cart.quantity*85)}</p>
                                    <button className='remove' onClick={()=>{dispatch(removeItem({id: cart.id}))}}>Remove</button>
                                </div>
                            </div>
                        ))
                        }
                        </div>
                    
                    
                    {/*<div className='cart-item-container'>
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
                    </div>*/}
                </div>
                <div className='payment-option-container'>
                    <div className='pay-title'>
                        <p className='index'>4</p>
                        <h4>PAYMENT OPTIONS</h4>
                    </div>
                    <div className='payment-methods'>
                        <label>
                            <input 
                                type='radio' 
                                value="card" 
                                name="payment" 
                                checked={paymentMethod === "card"} 
                                onChange={(e)=>setPaymentMethod(e.target.value)}
                            />
                            Credit / Debit Card
                        </label>
                        {paymentMethod === "card" &&
                            <div className='credit-card-details'>
                                <input 
                                    type="tel" 
                                    className='card-number' 
                                    placeholder='Enter Card Number*'
                                    maxLength={16}
                                    required
                                />
                                <div className='year-details'>
                                    <input 
                                        type="text" 
                                        className='mm' 
                                        placeholder='MM*'
                                        maxLength={2} 
                                        required
                                    />
                                    <input 
                                        type="tel" 
                                        className='yy' 
                                        placeholder='YY*'
                                        maxLength={2}
                                        required
                                    />
                                    <input 
                                        type='tel' 
                                        className='cvv' 
                                        placeholder='CVV/CVC*' 
                                        maxLength={3}
                                        required
                                    />
                                </div>
                                <input 
                                    type="text" 
                                    className='first-name' 
                                    placeholder='First Name*' 
                                    required
                                />
                                <input 
                                    type="text" 
                                    className='last-name' 
                                    placeholder='Last Name*' 
                                    required
                                />
                                <button className='credit-pay-btn'>PAY ₹{cartItems.reduce((total, item) => Math.round(total + item.price * item.quantity * 85 * 0.7), 0)}</button>
                            </div>
                        }
                        <label>
                            <input 
                                type="radio" 
                                value="upi" 
                                name="payment" 
                                checked={paymentMethod==="upi"} 
                                onChange={(e)=>{setPaymentMethod(e.target.value)}} 
                            />
                            UPI / Google Pay / PhonePe
                        </label>
                        {
                            paymentMethod==="upi" && 
                            <div className='upi-details'>
                                <input 
                                    type="text"
                                    className='upi-id' 
                                    placeholder='Enter UPI ID' 
                                />
                                <button className='verify-btn'>VERIFY</button>
                                <button className='upi-pay-btn'>
                                    PAY ₹{cartItems.reduce((total, item) => Math.round(total + item.price * item.quantity * 85 * 0.7), 0)}
                                </button>
                            </div>
                        }
                        <label>
                            <input 
                                type="radio" 
                                value="COD" 
                                name="payment" 
                                cheched={paymentMethod==="COD"} 
                                onChange={(e)=>{setPaymentMethod(e.target.value)}} 
                            />
                            Cash on Delivery (COD)
                        </label>
                        {
                            paymentMethod==="COD"  && 
                            <div className="cod-info-container">
                                <div className="cod-info">
                                    <p>Due to handling costs, a nominal fee of ₹7 will be charged</p>
                                </div>
                                <button className='cod-btn'>CONFIRM ORDER</button>
                            </div>
                        }
                    </div>
                    {/*<button className='pay-btn' onClick={handlePayment}>PROCEED TO PAY</button>*/}
                    
                </div>
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
    </div>
    
  );
  
};

export default CheckOut;