import React from 'react'
import Pricing from './Pricing'
import Hero from './Hero'
import Education from './Education'
import Awards from './Awards'
import Stats from './Stats'
import OpenAccount from '../OpenAccount'



function HomePage() {
    return ( <>
         
          <Hero/>
          <Awards/>
          <Stats/> 
          <Pricing/>
          <Education/>
          <OpenAccount/>
          
    </> );
}

export default HomePage;
