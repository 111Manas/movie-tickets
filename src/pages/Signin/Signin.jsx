import React,{useState}from 'react';
import './Signin.css'
import {Button} from '../../components/Button/Button';
import {Link} from 'react-router-dom';
import { signInStart } from '../../Redux/User/user-actions';
import {connect} from 'react-redux';

const Signin = ({signInStart}) => {
  const [userCredential,setUserCredential] = useState({email:'',password:''})

  const handleChange =(event)=>{
    const {name,value} = event.target;
    setUserCredential({...userCredential,[name]:value})
  }

  const {email,password} = userCredential;

  const handleSubmit = async event=>{
    event.preventDefault();
    
    signInStart(email,password);
  }

  return (
    <>
    <div className="signin-form">
      <h1>Sign In</h1>
        <form className='signin-container'  onSubmit={handleSubmit} >
         <input 
          name='email'
          type='email'
          value={email}
          className="input-box" 
          placeholder='Your email'
          onChange={handleChange} required/>
        <input
          name='password' 
          type='password'
          value={password} 
          className='input-box' 
          placeholder='Your password'
          onChange={handleChange} required/>
         <p><span><input type='checkbox'/></span> I agree with the terms and services.</p>

        <Button buttonSize='btn--wide' buttonColor='blue' type='submit'>Sign In</Button>
        <p className='p'>Don't have an account.  <Link to='/signup' className='signup'>Sign Up</Link></p>
      </form>
    </div>
     
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signInStart:(email,password) =>dispatch(signInStart({email,password}))
})
export default connect(null,mapDispatchToProps)(Signin);

