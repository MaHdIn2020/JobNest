import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
    const { isDark } = useTheme();

    return (
        <footer
            className={`footer footer-center p-10 border-t transition-all duration-300 
                ${isDark 
                    ? 'bg-base-100 text-base-content border-base-content' 
                    : 'bg-base-200 text-base-content border-base-300'
                }`}
        >
            <div>
                <h2 className="text-2xl font-bold tracking-wide">JobNest</h2>
                <p className="text-sm">
                    Providing reliable job matching since 2025
                </p>
                <p className="text-xs mt-2 opacity-70">© 2025 JobNest. All rights reserved.</p>
                {isDark && (
                    <div className="mt-2 text-sm text-warning">
                        🌙 Dark Mode Enabled
                    </div>
                )}
            </div>

            <div>
                <div className="grid grid-flow-col gap-6 mt-4 text-sm font-medium">
                    <a className="link link-hover hover:underline">About Us</a>
                    <a className="link link-hover hover:underline">Contact</a>
                    <a className="link link-hover hover:underline">Privacy Policy</a>
                    <a className="link link-hover hover:underline">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
