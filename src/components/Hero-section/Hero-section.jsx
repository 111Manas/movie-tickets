import React from 'react';
import './Hero-section.css';
import {Link} from 'react-router-dom';
import {Button} from '../Button/Button'


function Herosection({
  lightBg,
  lightText,
  lightTextDesc,
  topLine,
  headLine,
  description,
  buttonLabel,
  imgStart,
  img,alt}) {
  return (
  <>
    <div className="herosection">
      <div className={lightBg ? 'home-hero-section': 'home-hero-section darkBg'}>
        <div className="container">
          <div className="hero-row" 
            style={{display:'flex', flexDirection: imgStart==='start' ? 'row-reverse': 'row'}}>
           <div className="col">
            <div className='hero-text-wrapper'>
              <div className='top-line'>{topLine}</div>
              <h1 className={lightText ? 'heading': 'heading dark'}>{headLine}</h1>
              <p className={lightTextDesc ? 'hero-subtitle': 'hero-subtitle dark'}>{description}</p>
               <Link to='/signup'>
                 <Button buttonSize='btn--wide'
                buttonColor='blue'>{buttonLabel}</Button>
               </Link>
            </div>
           </div>
           <div className="col">
            <div className="hero-img-wrapper">
             <img src={img} alt={alt} className="hero-img"/>
            </div>
          </div>
          </div>
       </div>
      </div>
    </div>
  </>  
  )
}

export default Herosection;