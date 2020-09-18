import React from 'react';
import './products-page.scss';
import {homeObjOne} from '../../components/Data';import Herosection from '../../components/Hero-section/Hero-section';

export default function Products() {
  return (
    <div>
      <Herosection {...homeObjOne} />
    </div>
  )
}
