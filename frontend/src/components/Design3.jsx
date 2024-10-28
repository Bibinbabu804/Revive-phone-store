import React, { useEffect } from 'react';
import AOS from 'aos';
import { assets } from '../assets/assets';
import 'aos/dist/aos.css';

const Design3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div
        style={{ marginTop: '10%' }}
        className="flex flex-col md:flex-row items-center justify-between p-10 my-20"
        data-aos="fade-up" // AOS animation applied here
      >
        {/* Left side - Description */}
        <div className="md:w-1/2 mb-6 md:mb-0" data-aos="fade-right"> {/* AOS animation for left side */}
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Website</h2>
          <p className="text-lg text-gray-700">
            Welcome to <b style={{ color: 'green' }}>Phone Revive</b>, your trusted source for premium refurbished phones and high-end gadgets. We offer a wide range of high-quality devices, including refurbished and non-active phones from top brands, all at competitive prices. <br /> <br /> <br />
            Our goal is to provide you with reliable, affordable alternatives to brand-new devices, ensuring you get the best value for your money. All our products are carefully inspected and tested to meet high standards, so you can shop with confidence. <br /> <br /> <br />
            <b style={{ color: 'green' }}>Discover the latest deals on premium phones and gadgets today!</b>
          </p>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2" data-aos="fade-left"> {/* AOS animation for right side */}
          <img
            src={assets.about}
            alt="Website Overview"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Design3;
