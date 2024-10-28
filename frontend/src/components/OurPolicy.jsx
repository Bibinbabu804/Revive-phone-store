import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <section style={{ marginTop: '10%' }} className="bg-white py-10">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2
            className="text-3xl font-bold text-gray-800 mb-6 text-center"
            data-aos="fade-up"
          >
            Our Latest Updates
          </h2>

          {/* Blog Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Blog Post 1 */}
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              data-aos="fade-right"
            >
              <img
                src="https://compasia.my/cdn/shop/articles/Copy_of_5_APLIKASI_500x.png?v=1727748051"
                alt="Blog 1"
                className="w-full h-48 object-cover"
                data-aos="fade-up"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  5 Perbandingan Utama Antara Galaxy Tab S9 Dan Tab S10
                </h3>
                <p className="mt-3 text-gray-600">
                  A brief description about Galaxy Tab comparison between models S9 and S10.
                </p>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              data-aos="fade-up"
            >
              <img
                src="https://compasia.my/cdn/shop/articles/5_APLIKASI_37_16d685a7-bebe-4315-b496-7fe4cb6fef5f_600x.png?v=1727680870"
                alt="Blog 2"
                className="w-full h-48 object-cover"
                data-aos="fade-up"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  5 Reasons Why You Should Visit a CompAsia Store
                </h3>
                <p className="mt-3 text-gray-600">
                  Find out why visiting CompAsia stores offers an exceptional experience.
                </p>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              data-aos="fade-left"
            >
              <img
                src="https://compasia.my/cdn/shop/articles/5_APLIKASI_31_600x.png?v=1727148013"
                alt="Blog 3"
                className="w-full h-48 object-cover"
                data-aos="fade-up"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  8 Sorotan Utama Dari Acara "It’s Glowtime" Apple
                </h3>
                <p className="mt-3 text-gray-600">
                  Highlights from Apple’s event, showcasing their latest innovations.
                </p>
              </div>
            </div>
          </div>

          {/* View All Link */}
          <div className="text-center mt-10" data-aos="fade-up">
            <a
              href="#"
              className="text-green-600 font-medium hover:underline text-lg"
            >
              View All Articles
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPolicy;
