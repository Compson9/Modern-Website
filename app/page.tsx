
import React from 'react'
import Navbar from './components/Navbar'
import { BackgroundLine } from './components/BackgroundLine'
import { FeaturesSection } from './components/FeaturesSection'
import { Slider } from './components/Slider'
import { MovingCard } from './components/MovingCard'
import { Changelog } from './components/Changelog'
import Footer from './components/Footer'




const page = () => {
  return (
    <div className='text-white'>
      <Navbar />
      <BackgroundLine />
      <Slider />
      <MovingCard />
      <Changelog />
      <FeaturesSection />
      <Footer/>
    </div>
  )
}

export default page
