import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';

import Header from './components/Header';

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
import AdminMembersTable from './admincomponents/AdminMembersTable'

import PaymentSection from "./admincomponents/PaymentSection"
import AdminAttendanceSection from './admincomponents/AdminAttendanceSection';
import AdminCurrentAttendanceSection from "./admincomponents/AdminCurrentAttendance"
import AdminTermsOfService from './admincomponents/MentionsLegales';
import AdminPolitiqueDeConfidentialite from './admincomponents/PolitiqueDeConfidentialite';
import TermsOfService from './components/MentionsLegales';
import PolitiqueDeConfidentialite from './components/PolitiqueDeConfidentialite';
 import './styles/App.css'
const App = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');
    console.log(isAdminRoute)
    return (
        <div>
            {isAdminRoute ? <AdminHeader /> : <Header />}
             
         <div className="d-flex flex-column min-vh-100">
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
                <Route path="/admincurrentattendance" element={<AdminCurrentAttendanceSection />} />
                <Route path="/adminpaymentsection" element={<PaymentSection />}></Route>
                <Route path="/adminprivacypolicy" element={<AdminPolitiqueDeConfidentialite />}></Route>
                <Route path="/admintermsofservice" element={<AdminTermsOfService />}></Route>
                <Route path="/privacypolicy" element={<PolitiqueDeConfidentialite />}></Route>
                <Route path="/termsofservice" element={<TermsOfService />}></Route>
                <Route path="/adminmembers" element={<AdminMembersTable />}></Route>
            </Routes>
            </div>
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
