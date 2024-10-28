import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [width, setWidth] = useState(100); // Starting width percentage at 100%
  const [borderRadius, setBorderRadius] = useState(0); // Starting border-radius

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Calculate new width between 50% and 100%
      const newWidth = Math.max(50, Math.min(100, 100 - scrollPosition / 10));
      setWidth(newWidth);

      // Calculate new border-radius between 0px and 20px
      const newBorderRadius = Math.min(20, borderRadius + scrollPosition / 10);
      setBorderRadius(newBorderRadius);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [borderRadius]);

  return (
    <motion.div
      className="flex justify-center items-center my-10 bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <video
        style={{ width: `${width}%`, borderRadius: `${borderRadius}px` }}
        className="h-auto max-w-screen-xxl"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://www.apple.com/105/media/us/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/xlarge.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

export default Hero;
