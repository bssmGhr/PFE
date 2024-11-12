import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './styles/style.css';
import Home from './components/Home'
import React from 'react'
const App = () => {
    return (
        <Router>
            <Header />
            <h1>Hello, React with Vite!</h1>
            <HeroSection />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Add your routes here */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
