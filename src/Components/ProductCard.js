
import React from 'react';
import { PRODUCTS_API } from '../Utils/constants';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../Utils/productSlice';

const ProductCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const filteredProducts = useSelector(state => state.products.filteredProducts) || [];
    const showStatus = useSelector(state => state.products.showFilteredProducts);

    const [products, setProducts] = useState([]);
    const length = filteredProducts.length;
    console.log(length);

    const Products = async () => {
        const response = await fetch(PRODUCTS_API);
        const products = await response.json();
        setProducts(products);
        console.log(products);
        dispatch(addProduct(products));
    };

    useEffect(() => {
        Products();
    }, []);
 

    return (
        <div className="product-container">
    {/* If search is active and there are no results */}
    {showStatus && filteredProducts.length > 0 && filteredProducts[length - 1]?.length === 0 ? (
        <div>
            <p>No results found</p>
        </div>
    ) : (
        <>
            {/* Show filtered products if search is active */}
            {showStatus && filteredProducts.length > 0
                ? filteredProducts[length - 1]?.map((product) => (
                      <div
                          className="product-card"
                          key={product.id}
                          onClick={() => navigate(`/product/${product.id}`)}
                      >
                          <img src={product.image} alt={product.name} className="product-image" />
                          <h3>{product.title}</h3>
                          <p>Rs.{product.price * 85}</p>
                      </div>
                  ))
                : products.map((product) => (
                      <div
                          className="product-card"
                          key={product.id}
                          onClick={() => navigate(`/product/${product.id}`)}
                      >
                          <img src={product.image} alt={product.name} className="product-image" />
                          <h3>{product.title}</h3>
                          <p>Rs.{product.price * 85}</p>
                      </div>
                  ))}
        </>
    )}
</div>

                        
    );
};

export default ProductCard;