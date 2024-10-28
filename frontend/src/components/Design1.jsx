import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Design1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ marginTop: '10%' }} className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20">
      {/* iPhone 15 Image */}
      <div data-aos="fade-up">
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1720529585/Croma%20Assets/CMS/LP%20Page%20Banners/2024/PCP/Mobile/July/09072024/HP_3Split_AppleAtCroma_iPhone15_9july2024_i0d8sp.png?tr=w-1024"
          alt="iPhone 15"
          className="w-full"
        />
      </div>

      {/* iPhone 14 Image */}
      <div data-aos="fade-up" data-aos-delay="200">
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717426171/Croma%20Assets/CMS/LP%20Page%20Banners/2024/PCP/Mobile/June/03062024/HP_3Split_AppleAtCroma_14_3June2024_btlhx3.png?tr=w-1024"
          alt="iPhone 14"
          className="w-full"
        />
      </div>

      {/* iPhone 13 Image */}
      <div data-aos="fade-up" data-aos-delay="400">
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717426170/Croma%20Assets/CMS/LP%20Page%20Banners/2024/PCP/Mobile/June/03062024/HP_3Split_AppleAtCroma_13_3June2024_p7db0m.png?tr=w-1024"
          alt="iPhone 13"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Design1;
