import React from 'react';

const Footer = () => {
    return (
        <div>
        <footer className="footer sm:footer-horizontal bg-gradient-to-r from-[#642CA9] to-[#3B185F] text-white p-10">
        <nav>
            <h6 className="footer-title">JobNest – Where your career takes flight.</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover">Browse Jobs</a>
            <a className="link link-hover">Post a Job</a>
            <a className="link link-hover">Login/Register</a>
            <a className="link link-hover">Contact</a>
        </nav>
        <nav>
            <h6 className="footer-title">Contact Info</h6>
            <a className="link link-hover">Email: support@jobnest.com</a>
            <a className="link link-hover">Phone: +880-1234-567890</a>
            <a className="link link-hover">Address: Dhaka, Bangladesh</a>
        </nav>
        <nav>
            <h6 className="footer-title">Connect with Us</h6>
            <a className="link link-hover">Facebook</a>
            <a className="link link-hover">Twitter</a>
            <a className="link link-hover">LinkedIn</a>
            <a className="link link-hover">Instagram</a>
        </nav>
        </footer>
        </div>
    );
};

export default Footer;