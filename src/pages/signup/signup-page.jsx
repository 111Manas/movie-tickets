import React,{useState} from 'react';
import './signup-page.css';
import {Link} from 'react-router-dom';

const Signup = () => {
  const [userCredential,setUserCredential] = useState({name:'',password:''})

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setUserCredential({...userCredential,[name]:value})
  }
   const {name,password} = userCredential;
  const handleSubmit = (event) =>{
    event.preventDefault();

    alert('Something went Wrong try again later')
  }

  return (
    <>
      <div className="signup-page">
        <div className="header">Join Facebook</div>
        <div className="signup-wrapper">
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
              <form className='signup-form-container'>
                <div className="column">
                <div className="firstname-inbox">
                  <span className="firstname">
                    Firstname
                  </span>
                  <div>
                  <input type='name'
                      name='name'
                      value={name}
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
                  <input type='name'
                      name='name'
                      value={name}
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
       <div className="login-footer">
        <div className="login-wrapped">
        <div className="login-wrapper">
          <div className='columns'>
          <div className="col1">
            <span className='a-font'>English (UK)</span>
            <div><span className="a">हिन्दी</span></div>
            <div><span className="a">தமிழ்</span></div>
            <div><span className="a">اردو</span></div>
          </div>
          <div className="col2">
            <div><span className="a">ଓଡ଼ିଆ</span></div>
            <div><span className="a">తెలుగు</span></div>
            <div><span className="a"> বাংলা</span></div>
            <div><span className="a">தமிழ்</span></div>
          </div>
          </div>
        </div>
        <div className="footer-address">
          <span className="facebook">Facebook Inc.</span>
        </div>
        </div>
      </div>
        </div>

      </div>
    </>
  )
}

export default Signup;