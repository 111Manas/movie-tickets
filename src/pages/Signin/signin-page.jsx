import React,{useState} from 'react';
import './signin-page.scss';
import {Link} from 'react-router-dom';
import {Button} from '../../components/Button/button';
import {signInWithGoogle} from '../../components/Firebase/firebase.utils';
// import {googleSigninStart} from '../../Redux/User/user-actions';
// import {connect} from 'react-redux';

const SignIn = () => {
  const [userCredentials,setUserCredentials] = useState({email:'',password:''})

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setUserCredentials({...userCredentials,[name]:value});
  }

  const {email,password} = userCredentials;

  const handleSubmit = (event) =>{
    event.preventDefault();
  }
  return (
    <>
      <div className="form-page">
        <div className="form-wrapper">
          <div className="form-container">
            <div className="form-header">Sign In
            </div>
            <div className="form-input">
              <form className="form-box" onSubmit={handleSubmit}>
              <div className="input-div">
                <div >
                  <input type='email'
                        name='email'
                        value={email}
                        placeholder='Your email'
                        className='input-box'
                        onChange={handleChange}
                        />
                </div>
                <div >
                  <input type='password'
                        name='password'
                        value={password}
                        placeholder='Your password'
                        className='input-box1'
                        onChange={handleChange}
                        />
                </div>
                <p className='p'><span>I agree with terms and services.</span></p>
               </div>
                  <div className='button-div'>
                    <div className="float-left">
                      <Button 
                      buttonStyle='btm--primary'
                      type='submit' 
                        >
                      Sign In
                    </Button>
                    </div>
                    <div className="float-right">
                      <Button 
                      buttonStyle='btm--primary'
                      type='submit' 
                      onClick={signInWithGoogle}
                        >
                      Sign In With Google
                    </Button>
                    </div>
                  </div>
                  <p className='p'>Don't have an account? <Link to='/signup' className='signup'> Sign Up
                  </Link>
                  </p>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// const mapDispatchToProps = dispatch => ({
//   googleSigninStart : () => dispatch(googleSigninStart())
// })

export default SignIn;
