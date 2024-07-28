import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Influex</h3>
          <p>
            Influex is your go-to platform for comprehensive and engaging online courses. Our mission is to empower individuals to achieve their learning goals with ease and efficiency.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: support@influex.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Learning St., Knowledge City, Eduland</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-media">
            <li><a href="https://facebook.com"><i className="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="https://twitter.com"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i> LinkedIn</a></li>
            <li><a href="https://instagram.com"><i className="fab fa-instagram"></i> Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Influex. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;