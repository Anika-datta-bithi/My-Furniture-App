import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Crumb from '../Components/Crumb';
import Banner from '../Components/Banner';
import Details from '../Components/Details';
import ProductDisplay from '../Components/Data';
import Testimonials from '../Components/Testimonial';
import ProductFilter from '../Components/ProductFilter';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Banner/>
            <ProductDisplay/>
            <Testimonials/>
            <ProductFilter/>
            <Details/>
            <Crumb/>
            <Footer/>
        </div>
    );
};

export default Home;