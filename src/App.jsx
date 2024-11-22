import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';

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
import Admin from "./admincomponents/Admin";
import AdminAddEditMember from './admincomponents/AdminAddEditMember';
import AdminHeader from "./admincomponents/AdminNavbar"
import AdminFooter from "./admincomponents/AdminFooter"
import AdminAttendanceSection from './admincomponents/AdminAttendanceSection';
const App = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <div>
            {isAdminRoute ? <AdminHeader /> : <Header />}
            <h1>Hello, React with Vite!</h1>
            <HeroSection />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/index" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/adminaddeditmember" element={<AdminAddEditMember />} />
                <Route path="/adminattendancesection" element={<AdminAttendanceSection />} />
            </Routes>
            {isAdminRoute ? <AdminFooter /> : <Footer />}
        </div>
    );
};

const MainApp = () => (
    <Router>
        <App />
    </Router>
);

export default MainApp;
