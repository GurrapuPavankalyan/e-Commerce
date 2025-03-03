import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Components/Header';
import { PRODUCTS_API } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Utils/cartSlice'; // Update this path based on your file structure

const Product = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
    
  const fetchProduct = async () => {
    const response = await fetch(PRODUCTS_API+`/${id}`);
    const product  = await response.json();
    try {
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.log(error.message);
    }
    setProduct(product);
    console.log(product);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

   if (!product) {
     return <p>Loading...</p>;
   }


  return (
    
    <div>
        <Header />
        <div className='Product-details'>
          <div className='product-image-container'>
            <img src={product.image} alt={product.name} className='product-image' />
            <div className='button-container'>
              <button className='add-to-cart' onClick={()=>{
                try{
                  dispatch(addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  }));
                  console.log('navigating to cart');
                  navigate('/cart');
                }catch(error){
                  console.log(error.message);
                }
                
                }}
              >
                Add to Cart
              </button>
              <button className='buy-now'>Buy Now</button>
            </div>
          </div>
          
          <h3>{product.title}</h3>
          <p className='product-price'>Rs.{product.price*85}</p>
          <h4>{product.category}</h4>
          <p>{product.description}</p>
          <p>Rating:{product.rating.rate}</p>
        </div>   
    </div>
  );
};

export default Product;