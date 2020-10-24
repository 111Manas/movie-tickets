import React from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import SignIn from './pages/Signin/signin-page';
import SignUp from './pages/Signup/signup-page';
import Navbar from './components/Navbar/navbar';
import Homepage from './pages/Homepage/homepage';
import FilmPage from './pages/Film/film-page';
import MoviesPage from './pages/MoviesPage/movies-page';
import FilmDetail from './pages/Film/FilmDetail/film-detail';
import TvShows from './pages/tvshows/TvShows';
import Footer from './pages/Footer/footer';
import { auth} from './components/Firebase/firebase.utils';

class App extends React.Component {
  state={
    currentUser:null
  }

  unSubscribeFromAuth = null

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }
  render(){
    const currentUser = this.state.currentUser
  return (
    <div>
      <Navbar currentUser={this.state.currentUser}/>
      <Switch>
         <Route exact path='/' component={Homepage} />
          <Route exact path='/signin' 
          render={() =>
          currentUser ? <Redirect to ='/' /> :<SignIn /> } />
          <Route path='/signup' component={SignUp} />
          <Route path='/filmpage' component={FilmPage} />
          <Route path='/movie/:id' component={FilmDetail} />
          <Route path='/movies' component={MoviesPage} />
          <Route path='/tvshows' component={TvShows} />
          
      </Switch>
      <Footer />
    </div>
  )
}
}

export default App;