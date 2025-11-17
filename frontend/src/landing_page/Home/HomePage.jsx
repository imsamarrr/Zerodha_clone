import React from 'react';
import Awards from './Awards';
import Navbar from '../Navbar';
import Hero from './Hero';
import Trust from './Trust';
import Pricing from './Pricing';
import Education from './Education';
import Footer from '../Footer';
import OpenAccount from './OpenAccount';

function HomePage() {
    return (
        <>
        <Hero/>
        <Awards/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
    );
}

export default HomePage;