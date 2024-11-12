import React, { Outlet } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './styles/style.css'; // Import your existing CSS file here
const App = () => {
    return (
        <div>
            <Header />
            <h1>Hello, React with Vite!</h1>
            {/* Your other HTML content here */}
            <HeroSection />
            <Outlet />
            <Footer />
        </div>
    );
}
export default App;
