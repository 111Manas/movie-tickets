import React from 'react';
import './App.css'
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Header from './clothing/Header/Header';

import {selectCurrentUser} from './redux/User/user.selectors';
import {checkUserSession} from './redux/User/user.action';
import HomePage from './clothing/homepage/HomePage';
import ShopPage from './clothing/shoppage/ShopPage';
import CheckoutPage from './clothing/checkout-page/checkout';
import SignInAndSignUpPage from './clothing/Sign-In-and-Sign-Up/sign-in-and-sign-up';


class App extends React.Component{

render(){
  const {currentUser}= this.props;

  return (
    <div>
      <Header />
      <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
              }
            />
      </Switch>
    </div>
  );
}};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);