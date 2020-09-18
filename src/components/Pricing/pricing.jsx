import React from 'react';
import './pricing.css';
import {FaFire} from 'react-icons/fa';
import {BsXDiamondFill} from 'react-icons/bs';
import {GiCrystalize} from 'react-icons/gi';
import {Link} from 'react-router-dom';
import {Button} from '../Button/Button';
import { IconContext } from 'react-icons/lib';

function Pricing () {
  return(
    <>
      <IconContext.Provider value={{color:'red', size:54}}>
      <div className="pricing">
        <div className="pricing-wrapper">
          <h1 className='pricing-heading'>Pricing</h1>
          <div className="pricing-container">
            <Link to='/' className="container-card">
              <div className="container-cardinfo">
                <div className="cardicon">
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>$5.99</h4>
                <p>per month</p>
                <ul className="container-card-features">
                  <li>100 Transctions</li>
                  <li>2% Cash back</li>
                  <li>$10,000 Limit</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
  
            <Link to='/' className="container-card">
              <div className="container-cardinfo">
                <div className="cardicon">
                  <GiCrystalize />
                </div>
                <h3>Gold</h3>
                <h4>$28.99</h4>
                <p>per month</p>
                <ul className="container-card-features">
                  <li>1000 Transctions</li>
                  <li>3.5% Cash back</li>
                  <li>$100,000 Limit</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button>
              </div>
            </Link>

            <Link to='/' className="container-card">
              <div className="container-cardinfo">
                <div className="cardicon">
                  <BsXDiamondFill />
                </div>
                <h3>Diamond</h3>
                <h4>$99.99</h4>
                <p>per month</p>
                <ul className="container-card-features">
                  <li>Unlimited Transctions</li>
                  <li>5% Cash back</li>
                  <li>Unlimited Spending</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>

        </div>
      </div>
      </IconContext.Provider>
    </>
  )
}
export default Pricing;