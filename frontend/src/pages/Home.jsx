import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import CustomerReview from '../components/CustomerReview'
import Design1 from '../components/Design1'
import Design3 from '../components/Design3'
import Carousel from '../components/Carousel'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>

        <Hero/>
        <Design3/>
        <Carousel/>
        
        <LatestCollection/>
        <Design1/>
      
        <BestSeller/>
        <OurPolicy/>
        <CustomerReview/>
        <Newsletter/>
        

       



    </div>
  )
}

export default Home