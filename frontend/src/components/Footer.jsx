import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company Info</h3>
          <p className="mb-4 text-gray-600">
            We are a leading company in providing quality services to our customers with a focus on
            innovation and excellence.
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="mb-2 text-gray-600">Email: info@yourcompany.com</p>
          <p className="mb-2 text-gray-600">Phone: +123 456 7890</p>
          <p className="mb-2 text-gray-600">Address: 123 Street, City, Country</p>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <nav className="space-y-3">
            <a href="#" className="hover:text-blue-500">FAQs</a>
            <a href="#" className="hover:text-blue-500">Customer Support</a>
            <a href="#" className="hover:text-blue-500">Shipping & Returns</a>
            <a href="#" className="hover:text-blue-500">Warranty Policy</a>
          </nav>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <p className="mb-4 text-gray-600">Stay connected with us on social media.</p>
          <div className="flex space-x-4">
            {/* Replace "#" with actual social media links */}
            <a href="#" aria-label="Instagram" className="hover:text-gray-700">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:text-gray-700">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-700">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-700">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center">
        <p className="text-sm text-gray-600">
          Privacy Policy | Terms of Service | Cookie Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
