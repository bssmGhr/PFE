import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import Home from './Home';
import Contact from './Contact';
import Plans from './Plans';
import Inscription from './Inscription';
import Connexion from './Connexion';
import Admin from './Admin';
import AdminAddEditMember from './AdminAddEditMember';
import AdminAttendanceSection from './AdminAttendanceSection';
import AdminFooter from './admincomponents/AdminFooter';
import AdminHeader from './admincomponents/AdminNavbar'
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
