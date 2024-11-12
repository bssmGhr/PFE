import React from 'react'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Offers from './components/Offers'
import Testimonials from './components/Testimonials'
function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Services />
            <WhyChooseUs />
            <Offers />
            <Testimonials />
        </div>
    )
}

export default Home