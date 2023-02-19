import React from 'react'

import HeroSection from '../components/HeroSection'
import BannerAd from '../components/BannerAd'
import HowTo from '../components/HowTo'
import Featured from '../components/Featured'
import FAQ from '../components/FAQ'
import Reviews from '../components/Reviews'
import Footer from  '../components/Footer'
function Home() {
  return (
    <div>
      <HeroSection/>
      <BannerAd/>
      <HowTo/>
      <Featured/>
      <FAQ/>
      <Reviews/>
      <Footer/>
    </div>

    
  )
}

export default Home