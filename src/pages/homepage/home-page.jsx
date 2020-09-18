import React from 'react'
import { homeObject,homeObjOne,homeObjTwo,homeObjThree,homeObjFour } from '../../components/Data';
import Herosection from '../../components/Hero-section/Hero-section';
import Pricing from '../../components/Pricing/pricing';

const Homepage =() => {
  return (
    <div>
      <Herosection {...homeObject} />
      <Pricing />
      <Herosection {...homeObjOne} />
      <Herosection {...homeObjFour} />
      <Herosection {...homeObjTwo} />
      <Herosection {...homeObjThree} />

    </div>
  )
}
export default Homepage;