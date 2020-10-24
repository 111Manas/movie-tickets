import React,{useState} from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {Button} from '../Button/button';
import { auth } from '../Firebase/firebase.utils';

const Navbar = ({currentUser}) => {
  const [click,setClick] = useState(false);
  const closeMobileMenu = () => setClick(!click)
  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{color:'white'}}>
        <nav className='navbars'>
          <div className="navbar-container">
            <div className="navbar-logo">
              <p className="logo">
                The Movie Tickets
              </p>
            </div>
            <div className="menu-icon"
                  onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars/>}
            </div>
            <ul className={click ? 
                          'nav-menu  active' : 
                          'nav-menu' 
                          }>
              <li className="nav-item">
                <Link to='/' className='nav-links'
                onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/movies' className='nav-links'
                onClick={closeMobileMenu}>
                  Movies
                </Link>
              </li>
              <li className="nav-item">
               <Link to='/tvshows' className='nav-links'
               onClick={closeMobileMenu}>
                 TvShows
                  </Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className='nav-links'
                onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
              <li className="nav-btm">
                  {currentUser ?
                  <div>
                  <Button buttonColor="primary"
                  onClick={()=>auth.signOut()}>
                    SIGN OUT
                  </Button>
                  </div> :
                  <Link to='/signin'
                  className='nav-btm-links'
                  onClick={closeMobileMenu}>
                  <Button buttonColor="primary">
                    SIGN IN
                  </Button>
                  </Link>}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
