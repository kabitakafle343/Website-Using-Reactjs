import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Import custom CSS file for Footer styling

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container-md p-4">
        <section className="mb-4 ficon">
          <a href="https://www.instagram.com/kfc" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/kfc"  className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/company/kfc" className="social-icon">
            <FaLinkedin />
          </a>
        </section>
        <div className="text-center py-3">
          <p>Contact us: example@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Location: 123 Street, City, Country</p>
          <p>Services: Service 1, Service 2, Service 3</p>
          <p className="mb-0">© {new Date().getFullYear()} My Website</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;







