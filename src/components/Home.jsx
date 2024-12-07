import React from 'react'

import WhyChooseUs from './WhyChooseUs'
import Services from './Services'
import SpecialOffersPage from './SpecialOffersPage'
import Testimonials from './Testimonials'
function Home() {
    return (
        <div>
            <h1>Home</h1>
            <HeroSection />
            <Services />
            <WhyChooseUs />
            <SpecialOffersPage />
            <Testimonials />
        </div>
    )
}

export default Home