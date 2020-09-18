import React,{useState} from 'react';
import './Signup.css'
import {Button} from '../../components/Button/Button';
import {Link} from 'react-router-dom';
import {signUpStart} from '../../Redux/User/user-actions';
import {connect} from 'react-redux';

const Signup = ({signUpStart}) => {
  const [userCredential,setUserCredential] = useState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const handleChange = (event) =>{
    const {value,name} = event.target;
    setUserCredential({...userCredential,[name]:value});
  };

  const {displayName,email,password,confirmPassword} = userCredential;
   
  const handleSubmit = async event => { 
    event.preventDefault();

      if(password!==confirmPassword){
        alert("Password not matches");
        return;
      }              

      signUpStart({email,password,displayName})
  };
  
  return (
    <>
    <div className="signup-form">
      <h1>Sign Up</h1>
        <form className='signup-container' onSubmit={handleSubmit}>
            <input name='displayName' 
                  type='text'
                  value={displayName} 
                  className="input-box" 
                  placeholder='Your name'
                  onChange={handleChange} required />
            <input name='email' 
                  type='email'
                  value={email} 
                  className='input-box' 
                  placeholder='Your email'
                  onChange={handleChange} required />
            <input name='password' 
                  type='password'
                  value={password} 
                  className='input-box'
                  placeholder='Your password' 
                  onChange={handleChange} required />
            <input name='confirmPassword'
                  type='password' 
                  value={confirmPassword}className='input-box1' placeholder='Confirm password'
                  onChange={handleChange} required/>
            <p className='span-warning'><span >*password must be same*</span></p>
            <p><span><input type='checkbox'/></span> I agree with the terms and services.</p>

            <Button buttonSize='btn--wide' buttonColor='blue' type='submit'>Sign Up</Button>
            <p className='p'>Already have an account ?    <Link to='/signin' className='signin'>Sign In</Link></p>
          </form>
    </div>
     
    </>
  )
}

const mapDispatchToProps = (dispatch) =>({
  signUpStart:(userCredential)=>dispatch(signUpStart(userCredential))
})

export default connect(null,mapDispatchToProps)(Signup);
