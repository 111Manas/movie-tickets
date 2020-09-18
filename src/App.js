import React from 'react';
import Navbar from './pages/navbar/navbar';
import Products from './pages/products/products-page';
import Services from './pages/Services/Services-page';
import Contact from './pages/contact/contactPage';
import Homepage  from './pages/homepage/home-page'
import {Switch,Route, Redirect} from 'react-router-dom';
import Signup from './pages/Signup/sign-up';
import Footer from './pages/Footer/footer';
import Signin from './pages/Signin/Signin';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './Redux/User/user-selectors';

const App = ({currentUser}) => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/products' component={Products} />
        <Route path='/contact' component={Contact} />
        <Route path='/services' component={Services} />
        <Route exact path='/signup' render={()=>currentUser ? (
          <Redirect to="/" />
        ) : (<Signup />)}/>
        
        <Route exact path='/signin' render={()=>currentUser ? (
          <Redirect to="/" />
        ) : (<Signin />)}/>
      </Switch>
      <Footer />
    </div>
  )
}

const mapStateToProps = createStructuredSelector ({
 currentUser:selectCurrentUser
})

export default connect(mapStateToProps)(App);
