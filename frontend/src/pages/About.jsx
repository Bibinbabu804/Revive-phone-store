import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Newsletter from '../components/Newsletter';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white text-gray-800 py-16 px-8">
      {/* Page Title */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">Learn more about Revive Phone Store, our team, and our journey.</p>
      </div>

      {/* Company Overview Section */}
      <div className="max-w-5xl mx-auto mb-16" data-aos="fade-right">
        <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/736x/76/da/7f/76da7fbe1f2714a5dc4e3bf91770cdf7.jpg" // Add your image link here
              alt="Company Overview"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
          {/* Text Section */}
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Welcome to Revive Phone Store, your trusted source for premium, refurbished phones and gadgets.
              Our store specializes in high-quality devices that are carefully restored to their original
              condition, providing an affordable alternative to brand-new phones. We understand the need for
              reliable technology at reasonable prices, which is why we offer a range of refurbished and non-active
              phones at prices significantly lower than the original.
            </p>
            <p className="text-lg leading-relaxed">
              At Revive Phone Store, we prioritize customer satisfaction by ensuring each device goes through a
              rigorous inspection and refurbishment process. Our goal is to deliver excellent value to our customers
              without compromising on quality.
            </p>
          </div>
        </div>
      </div>

      {/* Our Products Section */}
      <div className="bg-gray-100 py-12 mb-16" data-aos="fade-left">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Products</h2>
          <p className="text-lg leading-relaxed mb-6">
            Our selection includes a variety of premium brands and models, from the latest smartphones to classic
            devices. Whether you're looking for an iPhone, Samsung Galaxy, or any other top brand, we have options
            to suit every preference and budget. In addition to phones, we also offer a range of gadgets and accessories
            to enhance your mobile experience.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-5xl mx-auto mb-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="https://media.istockphoto.com/id/1354026331/photo/portrait-of-confident-senior-businessman.jpg?s=612x612&w=0&k=20&c=6W9y-2Ozc99ciU--fW_qq6NAqDbvvQVOQRxfN9O_TKg="
              alt="Team Member"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>


          {/* Right Side with Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="zoom-in">
              <div className="w-full h-48 ] rounded-md mb-4">
                <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="Team Member" />
              </div>
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-sm text-gray-500 mb-4">Chief Executive Officer</p>
              <p className="text-base leading-relaxed">
                John leads Revive Phone Store with a vision of providing affordable technology solutions.
              </p>
            </div>

            
            {/* New Team Member */}
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="zoom-in">
              <div className="w-full h-48  rounded-md mb-4">
                <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="Team Member" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-sm text-gray-500 mb-4">Chief Operating Officer</p>
              <p className="text-base leading-relaxed">
                Jane is dedicated to ensuring our operations run smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-gray-100 py-12 mb-16" data-aos="fade-right">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our History</h2>
          <p className="text-lg leading-relaxed mb-6">
            Since our founding, Revive Phone Store has grown from a small startup to a trusted brand in refurbished
            electronics. Our journey is marked by a commitment to quality, affordability, and customer service.
          </p>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="max-w-5xl mx-auto mb-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6">Vision & Mission</h2>
        <p className="text-lg leading-relaxed">
          Our vision is to make premium mobile devices accessible to everyone, while our mission is to offer quality
          refurbished phones that meet the highest standards at competitive prices.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="max-w-5xl mx-auto mb-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="w-full h-64 bg-gray-300 rounded-md shadow-md" data-aos="zoom-in">
            <img src="https://www.pandasecurity.com/en/mediacenter/src/uploads/2018/05/pandasecurity-buying-cellphone-tips.jpg" alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
            
            
          </div>
          <div className="w-full h-64 bg-gray-300 rounded-md shadow-md" data-aos="zoom-in">
            <img src="https://t3.ftcdn.net/jpg/06/05/82/26/360_F_605822691_Zqiu1rcNSoaiCVUfMDcppKy2y2Ov1pJY.jpg" alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
            
            
          </div>
          <div className="w-full h-64 bg-gray-300 rounded-md shadow-md" data-aos="zoom-in">
            <img src="https://swarajya.gumlet.io/swarajya/2023-08/82bd7ba8-dbc3-42fa-9447-554e2aba489b/Photo__1__Foldable_Phones_currently_on_sale_in_India.jpg?w=610&q=50&compress=true&format=auto" alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
            
            
          </div>
          <div className="w-full h-64 bg-gray-300 rounded-md shadow-md" data-aos="zoom-in">
            <img src="https://lh3.googleusercontent.com/7oixYeJA9phwXQLgcYTdfvkcBjLmM2MNCsDool0KOoO9dR8uY0_n180KxnCdOLPkofHmrk3N6RHlhpJ6XNx4PEI-jly8kVgAvQyO2c1fhhnC8F_63HD3Uecl0ZfSKNcdx7V9drXapbD5P6ON7h0FNgSHOF65qPh8" alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
            
            
          </div>
          <div className="w-full h-64 bg-gray-300 rounded-md shadow-md" data-aos="zoom-in">
            <img src="https://alephksa.com/cdn/shop/files/iPad_10th_generation_Wi-Fi_Blue_PDP_Image_Fall23_Position-5__en-AE_d8448376-5509-40c6-963a-1fe80f2ee37f.jpg?v=1718802978&width=1445" alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
            
            
          </div>
          <div className="w-full h-64 bg-gray-300 rounded-md shadow-md" data-aos="zoom-in">
            <img src="https://i.pcmag.com/imagery/articles/01jFz9s8KyubT5ZiOTrtbVf-1..v1707241486.jpg" alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
            
            
          </div>


          <div className="w-full h-64 bg-gray-300 rounded-md shadow-md" data-aos="zoom-in">
            <img src="https://static.wixstatic.com/media/08d198_8aec64c624d44e1ba7511e5fd94a4187~mv2.jpg/v1/crop/x_102,y_50,w_795,h_597/fill/w_560,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/plymouth.jpg" alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
            
            
          </div>


          <div className="w-full h-64 bg-gray-300 rounded-md shadow-md" data-aos="zoom-in">
            <img src="https://cdn.mos.cms.futurecdn.net/5nU4iy2D9GfMTt2psLRePG-1200-80.jpg" alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
            
            
          </div>


          <div className="w-full h-64 bg-gray-300 rounded-md shadow-md" data-aos="zoom-in">
            <img src="https://www.lifewire.com/thmb/XzxH-f88I5FObXkg60X6rmBCEYI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Image031-8c1279df682e44b8ad1494fe7f64298a.jpg" alt="Gallery Image" className="w-full h-full object-cover rounded-md" />
            
            
          </div>
          {/* Add more images as needed */}
        </div>
      </div>
      <Newsletter/>
    </div>
  );
};

export default About;
