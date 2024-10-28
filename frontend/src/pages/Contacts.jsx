import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contacts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white text-gray-800 py-16 px-8 font-sans">
      {/* Page Title */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">We'd love to hear from you! Reach out to us anytime.</p>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div data-aos="fade-left" className="flex justify-center items-center">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/510/269/202/apple-inc-iphone-technology-macbook-wallpaper-preview.jpg"
            alt="Contact Us"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Additional Contact Information */}
      <div className="bg-gray-100 py-12" data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-3">Our Location</h3>
            <p className="text-gray-600">1234 Street Name, City, Country</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Call Us</h3>
            <p className="text-gray-600">+123 456 7890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Email Us</h3>
            <p className="text-gray-600">contact@revivephonestore.com</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Find Us on the Map</h2>
          <iframe
            title="Google Map"
            className="w-full h-72 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.06309134255!2d-74.258195!3d40.70583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zNDAlNDUuMDAwMCJOIDc0wrAwOC4wMDAwIlc!5e0!3m2!1sen!2sus!4v1605092254340!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
