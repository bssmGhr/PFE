import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './styles/style.css';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Plans from './components/Plans';
import Inscription from './components/Inscription';
import Connexion from './components/Connexion';
import React from 'react'
const App = () => {
    return (
        <Router>
            <Header />
            <h1>Hello, React with Vite!</h1>
            <HeroSection />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/index" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route path="/connexion" element={<Connexion />} />
                {/* Add your routes here */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
