import React, {useState,useEffect}from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import {Button} from '../../components/Button/Button';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import { signOutStart } from '../../Redux/User/user-actions';
import {selectCurrentUser} from '../../Redux/User/user-selectors';

const Navbar = ({currentUser,signOutStart}) => {
  const [click,setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick =() => setClick(!click);
  const closeMobileMenu = () => setClick(false);

    const showButton = () => {
      if(window.innerWidth <= 960){
        setButton(false);
      }else {
        setButton(true);
      }
    };
    useEffect(()=>{
      showButton();
    },[]);

    window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{color: 'white'}}>
      <nav className='navbar'>
      <div className="navbar-container container">
        <Link to='/'className="navbar-logo">
        <MdFingerprint className='navbar-icon' />
          JARVIS 
        </Link>
        <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' 
            className="nav-links" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' 
            className="nav-links" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' 
            className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className='nav-btn'>
            {currentUser ? (
              <div className='btn-link' onClick={signOutStart}>
                <Button buttonStyle='btn--outline' >
              SIGN OUT
              </Button>
              </div>
            ) : (<Link to='signin' className='btn-link' onClick={closeMobileMenu}>
              <Button 
              buttonStyle='btn--outline'
              >
                SIGN IN
              </Button>
            </Link>)}
          </li>
        </ul>
      </div>
    </nav>
      </IconContext.Provider>
    </>
  )
}

const mapStateToProps  =createStructuredSelector({
  currentUser:selectCurrentUser
});

const mapDispatchToProps = (dispatch) =>({
  signOutStart:()=>dispatch(signOutStart())
});

  export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
