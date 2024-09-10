
import React from 'react'
import Navbar from './components/Navbar'
import { BackgroundLine } from './components/BackgroundLine'
import { FeaturesSection } from './components/FeaturesSection'
import { Slider } from './components/Slider'
import { MovingCard } from './components/MovingCard'




const page = () => {
  return (
    <div className='text-white'>
      <Navbar />
      <BackgroundLine />
      <Slider />
      <MovingCard/>
      <FeaturesSection />
    </div>
  )
}

export default page