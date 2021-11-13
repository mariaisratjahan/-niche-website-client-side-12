import React from 'react';
import Header from '../../Shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Products></Products>
           <AboutUs></AboutUs>
           <Reviews></Reviews>
           <Footer></Footer>
        </div>
    );
};

export default Home;