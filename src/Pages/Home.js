import React from 'react';
import MainPage from '../Components/MainPage';
import MainContainer from '../Components/MainContainer';
import Header from '../Components/Header';

console.log("MainPage:", MainPage);
console.log("MainContainer:", MainContainer);

const Home = () => {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
    
  );
};

export default Home;