import React from 'react';
import Signin from './pages/Signin/Signin-page';
import Signup from './pages/signup/signup-page';
import Homepage from './pages/homepage/homepage'
import {Switch,Route} from 'react-router-dom';

class App extends React.Component{
  render(){

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route  path='/signup' component={Signup} />
        <Route exact path='/signin' component={Signin} />
      </Switch>
    </div>
  )
}
}

export default App;