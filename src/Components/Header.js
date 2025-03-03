import React, { useEffect, useState } from "react";
import "../App.css";
import { CART_LOGO_URL, COMPANY_LOGO_URL, SEARCH_ICON, USER_ICON } from "../Utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFilteredProducts, status } from "../Utils/productSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Default empty string
  //const [searchResults, setSearchResults] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]); // Store API data
  const [showfilteredProducts, setShowFilteredProducts] = useState('false');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(status(showfilteredProducts));

  // JavaScript: Calculate 15vh in pixels
{/*function get15vh() {
  const viewportHeight = window.innerHeight;
  const value = 0.15 * viewportHeight;
  console.log(`15vh = ${value}px`);
  return value;
  get15vh();
}*/}




  // Fetch products only once when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle search dynamically as user types
  useEffect(() => {

    if(searchQuery.length<1) {
      setShowFilteredProducts('false');
      dispatch(status(showfilteredProducts));
      setFilteredProducts([]);
      dispatch(addFilteredProducts(products));
      
      return;
    } 
    else{
      const searchValue = searchQuery.toLowerCase();
      const filteredItems = products.filter((i) =>
        i.title.toLowerCase().includes(searchValue)
      );
      const timer = setTimeout(() => {
        setFilteredProducts(filteredItems);
        dispatch(addFilteredProducts(filteredProducts));
      }, 300);
  
      return  () => {
        clearTimeout(timer);
      };
    }

    
    
    {/*const filteredText = products.map((i) => i.title).filter((title) =>
      title.toLowerCase().includes(searchValue)
    );*/}

    

    {/*if(showfilteredProducts){
      setFilteredProducts(filteredItems);
    }else{
      setFilteredProducts([]);
    } */}

    
    //setSearchResults(filteredText);
  }, [searchQuery, products, dispatch]); // Runs when `searchQuery` changes

  return (
    <div className="header-container">
      <img alt="company-logo" className="company-logo" src={COMPANY_LOGO_URL} />

      <p className="home" onClick={() => navigate("/home")}>Home</p>

      <div className="searchbar-container">
        <input
          className="search-bar"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowFilteredProducts(true)} 
          onBlur={() => setShowFilteredProducts(false)} 
          placeholder="Search for Products in E-Commerce.in"
        />
        <img alt="search-icon" className="search-icon" src={SEARCH_ICON} />
      </div>

      <img alt="user-icon" className="user-icon" src={USER_ICON} />

      <div className="cart-container" onClick={() => navigate("/cart")}>
        <div className="cart-logo-container">
          <img alt="cart-logo" className="cart-logo" src={CART_LOGO_URL} />
        </div>
        <div>
          <p className="cart">Cart</p>
        </div>
      </div>

      {/* Display search results (optional UI part) 
      {searchResults.length > 0 && (
        <div className="search-results">
          <ul>
            {searchResults.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}*/}
    </div>
  );
};

export default Header;
