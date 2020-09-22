import React,{useState} from 'react';
import './signup-page.css';
import {Link} from 'react-router-dom';

const Signup = () => {
  const [userCredential,setUserCredential] = useState({firstname:'',surname:''})

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setUserCredential({...userCredential,[name]:value})
  }
   const {firstname,surname} = userCredential;

  const handleSubmit = (event) =>{
    event.preventDefault();

    alert('Something went Wrong try again later')
  }

  return (
    <>
      <div className="signup-page">
        <div className="signup-wrapper">
        <div className="header">Join Facebook</div>
          <div className="signup-container">
            <div className="signup-header1">
              <span className="signup-header-name1">
                What's your name?
              </span>
            </div>
            <div className="signup-header2">
              <span className="signup-header-name2">
                Enter the name you use in real life.
              </span>
            </div>
            <div className="signup-form">
              <form className='signup-form-container' onSubmit={handleSubmit}>
                <div className="column">
                <div className="firstname-inbox">
                  <span className="firstname">
                    Firstname
                  </span>
                  <div>
                  <input type='text'
                      name='firstname'
                      value={firstname}
                      className="inbox1"
                      onChange={handleChange}
                      required />
                  </div>
                </div>
                <div className="lastname-inbox">
                  <span className="lastname">
                    Surname
                  </span>
                  <div>
                  <input type='text'
                      name='surname'
                      value={surname}
                      className='inbox1'
                      onChange={handleChange}
                      required />
                  </div>
                </div>
                </div>
                <div className='bottom'>
                <button className='btn' type='button '>
                  <span className='btn-span1'>Next</span></button>
                </div>
              </form>
            </div>
          </div>
          <div className="signin-link">
              <span className="link-name">
                <Link to='/signin' className='link-names'>Already have an account?</Link>
              </span>
            </div>
       <div className="login-footer1">
        <div className="login-wrapped1">
        <div className="login-wrapper1">
          <div className='columns1'>
          <div className="col11">
            <span className='a-font1'>English (UK)</span>
            <div><span className="a1">हिन्दी</span></div>
            <div><span className="a1">தமிழ்</span></div>
            <div><span className="a1">اردو</span></div>
          </div>
          <div className="col21">
            <div><span className="a1">ଓଡ଼ିଆ</span></div>
            <div><span className="a1">తెలుగు</span></div>
            <div><span className="a1"> বাংলা</span></div>
            <div><span className="a1">தமிழ்</span></div>
          </div>
          </div>
        </div>
        <div className="footer-address">
          <span className="facebook1">Facebook Inc.</span>
        </div>
        </div>
      </div>
        </div>

      </div>
    </>
  )
}

export default Signup;