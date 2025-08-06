import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';
import { useTheme } from '../../contexts/ThemeContext';

const RootLayout = () => {
    const { isDark } = useTheme();
    
    return (
        <div className={`min-h-screen flex flex-col ${isDark ? 'bg-base-100' : 'bg-gray-50'}`}>
            <Navbar></Navbar>
            <main className="flex-1">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;