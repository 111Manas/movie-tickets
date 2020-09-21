import React from 'react';
import './homepage.css';
import {Link} from 'react-router-dom';

const Homepage =() => {
  return (
    <>
      <div className="homepage1">
        <header className="header1">
          <div className="header-container1">
            <div className="title1">
              <img src='https://www.lovecalculator.com/dist/images/lovecalculator-logo.svg' alt="love calculator" />
            </div>
          </div>
        </header>
        <div className="body">
          <div className="body-container">
            <h1>Welcome to this great invention of Doctor Love!</h1>
            <p>
            To find out what the chances for you and your dream partner are, just fill in both <strong>full </strong>names (both first and last name) in the two text boxes below, and press Calculate.
            </p>
            <form className='formbox2'>
              <div className="formbox-container2">
                <div className="formbox-input2">
                  <label className='label'>Your name</label>
                  <input type='text' 
                  className='inputbox3'
                  placeholder='Full name' required/>
                </div>
                <div className="formbox-input3">
                  <label className='label'>Your crush</label>
                  <input type='text' className='inputbox3' placeholder='Full name' required/>
                </div>
              </div>
              <div className="formbutton-container">
                <div className="form-button">
                  <button className='btn-primary' type='submit'>
                    Calculate love
                  </button>
                </div>
              </div>
            <img src='https://www.lovecalculator.com/dist/images/lovecalculator-heart.svg' className='form-image' alt='Loves' />
            </form>
            <div className="signin-link4">
              <span >
                <Link to='/signin' className="link4">
                Sign In with Facebook
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage;