import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import Statistics from '../components/Statistics';
import Testimonial from '../components/Testimonial';
import Timeline from '../components/Timeline';

const Home = () => {
    return (
        <>
            <Header />
            {/* <div className='container mx-auto'> */}
            <div >
                <Hero />
                <About />
                <Pricing />
                <Feature />
                <Statistics />
                <Timeline />
                <Testimonial />
                <Contact />
                <Footer />

            </div>
        </>
    );
};

export default Home;