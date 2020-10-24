import React,{useState} from 'react';
import './signup-page.scss'
import {Link} from 'react-router-dom';
import {Button} from '../../components/Button/button';

const SignUp = () => {
  const [userCredentials,setUserCredentials] = useState({name:'',email:'',password:'',confirmPassword:''})

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setUserCredentials({...userCredentials,[name]:value});
  }

  const {name,email,password,confirmPassword} = userCredentials;

  const handleSubmit = (event) =>{
    event.preventDefault();
  }
  return (
    <>
      <div className="form-page1">
        <div className="form-wrapper1">
          <div className="form-container1">
            <div className="form-header1">Sign Up
            </div>
            <div className="form-input1">
              <form className="form-box1" onSubmit={handleSubmit}>
              <div className="input-div1">
                <div >
                  <input type='text'
                        name='name'
                        value={name}
                        placeholder='Your name'
                        className='input-box1'
                        onChange={handleChange}
                        />
                </div>
                <div >
                  <input type='email'
                        name='email'
                        value={email}
                        placeholder='Your email'
                        className='input-box1'
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
                <div >
                  <input type='password'
                        name='password'
                        value={confirmPassword}
                        placeholder='Confirm password'
                        className='input-box11'
                        onChange={handleChange}
                        />
                </div>
                <p className='p1'><span>I agree with terms and services.</span></p>
               </div>
                  <div className="buttom-div1">
                    <Button 
                    type='submit' 
                    buttonStyle='btm--primary'
                    >
                      Sign Up
                    </Button>
                  </div>
                  <p className='p1'>Don't have an account? <Link to='/signin' className='signin1'> Sign In</Link></p>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;
