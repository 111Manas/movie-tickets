import React,{useState} from 'react';
import './Signin-page.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUpStart} from '../../Redux/User/user-action';

  const Signin = () => {
  const [userCredentials,setUserCredentials] =useState({displayName:'',
  email:'',
  password:''})

   const handleChange = (event) =>{
    const {name,value} = event.target;

    setUserCredentials({...userCredentials, [name]:value});
  };

  
  const {email,password,displayName} = userCredentials;
 
   const handleSubmit = async event =>{
    event.preventDefault();
    
  
  };
  
  return(
    <>
      <div className="signin-page">
        <div className="signin-wrapper">
          <div className="signin-container">
            <div className="heading">
              <Link to='/login'>
                <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' width='112' className='img' alt='facebook'/>
              </Link>
            </div>
            <div className="signin-box">
             <form className="forminput-box" onSubmit={handleSubmit}>
               <input name="email"
                      type="email"
                      value={email}
                      className="input-box1"
                      placeholder='Mobile number or email address'
                      onChange={handleChange}
                      required />
                <input name="password"
                      type="password"
                      value={password}
                      className="input-box2"
                      placeholder='Password'
                      onChange={handleChange}
                      required />
              
                <div className='button-container'>
                <button className='button' type='button '>
                  <span className='btn-span'>Log In</span></button>
                </div>
             </form>
             <div className="separator">
               <hr className='hr' />
               <p className="or">
                 or
               </p>
             </div>
             <div className="signup-area">
               <button className='buttom'>
               <Link to ='/signup' className="signup">
                 Create New Acount
               </Link>
               </button>
             </div>
             <div className="other-links">
               <ul className="link">
                 <li>
                   <span className="forgot">
                     <Link to='/signup' className="forgot-password">
                       Forgotten password?
                     </Link>
                   </span>
                 </li>
               </ul>
             </div>
          </div>
         </div>
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
          <div className="adress-wrapper">
            <Link to='https://m.facebook.com/facebook?refid=8'className="about">About</Link>
            <span>.</span>
            <Link to='https://m.facebook.com/help/?ref=pf&refid=8' className='about'>Help</Link>
            <span>.</span>
            <span className="about">More</span>
          </div>
          <span className="facebook">Facebook Inc.</span>
        </div>
        </div>
      </div>
     </div>
   </>
  )
  
}

const mapDispatchToProps = (dispatch) =>({
  signUpStart:(userCredentials)=>dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(Signin);