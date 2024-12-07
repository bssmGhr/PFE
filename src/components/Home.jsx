import React from 'react'
import HeroSection from './HeroSection';
import WhyChooseUs from './WhyChooseUs'
import Services from './Services'
import SpecialOffersPage from './SpecialOffersPage'
import Testimonials from './Testimonials'
function Home() {
    return (
        <div>
            
            <HeroSection />
            <Services />
            <WhyChooseUs />
            <SpecialOffersPage />
            <Testimonials />
        </div>
    )
}

export default Home