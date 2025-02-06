
import React from 'react';
import { PRODUCTS_API } from '../Utils/constants';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({info}) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    
    //const Id = useRef(null);

    const Products = async () => {
        const response = await fetch(PRODUCTS_API);
        const products = await response.json();
        setProducts(products);
        console.log(products);
    };

    // const clickHandler = () =>{
    //     navigate(`/product/${product.id}`);
    // };

    useEffect(() => {
        Products();
    }, []);

    
    

  return (
    <div className='product-container'>
        {products.map((product) => (  
            
            <div className='product-card' key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
                <img src={product.image} alt={product.name} className='product-image' />
                <h3>{product.title}</h3>
                <p>Rs.{product.price*85}</p>
            </div>
        ))}  
    </div>
        
  );
};

export default ProductCard;