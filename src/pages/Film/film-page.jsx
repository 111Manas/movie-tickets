import React,{useState,useEffect} from 'react';
import './film-page.css';
import { fetchGenre, fetchMovieByGenre, fetchMovies,fetchTopRatedMovie,fetchTrendingPersons } from '../../components/Data/data';
import {Button}from '../../components/Button/button';
import RBCarousel from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css'
import {Link} from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

function FilmPage() {
  const [nowPlaying,setNowPlaying] = useState([]);
  const [genres,setGenres] = useState([]);
  const [movieByGenre,setMovieByGenre] = useState ([]);
  const [trendingPerson,setTrendingPerson] =useState([])
  ;
  const [topRated,setTopRated] = useState([]);

  useEffect (()=> {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre());
      setTrendingPerson(await fetchTrendingPersons());
      setTopRated(await fetchTopRatedMovie());

    };
    fetchAPI();
  },[]);

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id))
  };

  const movies = nowPlaying.slice(1,8).map((item,index) => {
    return(
      <div style={{ height: 500, width:'100%'}} key={index}>
        <div className="carousel-center"
        style={{width:'100%'}} >
          <img src={item.backPoster} alt={item.title}style={{height:410,width:'100%'}} />
        </div>
        <div className="carousel-center">
          <i className='far fa-play-circle' style={{fontSize:65, color:'#fac10f'}}/>
        </div>
        <div className="carousel-caption"
          style={{textAlign:"center",fontSize:35}}>
          {item.title}
        </div>
      </div>
    )
  });

  const genreList = genres.map((item,index) => {
      return(
        <li className="list-inline-item"
         key={index}>
          <Button 
            buttonColor='black'
              onClick={()=>
                {handleGenreClick(item.id)}} 
              >
            {item.name}
          </Button>
        </li>
      )
  })

  const movieList = movieByGenre.slice(0,8).map((item,index)=> {
    return(
        <div className='col-md-3 ' key={index}>
          <div className='card mt-2'>
              <Link to={`/movie/${item.id}`}>
                <img src={item.poster} alt={item.title} className='img-fluid'/>
              </Link>
          </div>
          <div className='mt-3'>
              <p style={{fontWeight:'bolder'}}>{item.title}</p>
              <p>Rated:{item.rating}</p>
              <ReactStars count={item.rating} size={20} color={'#f4c10f'}/>
          </div>        
        </div>
    )
  });

  const personList = trendingPerson.slice(0,4).map((person,index)=>{
    return(
      <div className='col-md-3 text-center' key={index}>
        <img 
          src={person.profileImg} 
          alt={person.name}
          className='img-fluid rounded-circle mx-auto d-block' />
        <p className='font-weight-bolder text-center'>
          {person.name}
        </p>
        <p className='font-weight-lighter text-center' style={{color:'#5a606b'}}>
          Trending for {person.known}
        </p>
      </div>
    )
  });

  const topRatedMoviesList = topRated.slice(6,12).map((item,index) => {
    return(
      <div className='col' key={index}>
       <div className='card mt-3'>
          <Link to={`/movie/${item.id}`}>
          <img src={item.poster} alt={item.title} className='img-fluid'/></Link>
       </div>
        <div className='mt-3'>
          <p className='font-weight-bold'>{item.title}</p>
          <p>Rated: {item.rating}</p>
          <ReactStars
            count={item.rating}
            size={20}
            color={'yellow'} />
        </div>
      </div>
    )
  })

  return (
    <>
    <div className='film-page'>
      <div className="film-page-container">
        <div className="row mt-1">
          <div className="col mt-1">
            <RBCarousel
              autoplay={true}
              pauseOnVisibility={true}
              slidesshowSpeed={7000}
              version={4}
              indicators={true} 
            >
              {movies}
            </RBCarousel>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <ul className="list-inline">
              {genreList}
            </ul>
          </div>
        </div>

        <div className='row mt-3'>
          <div className='col'>
            <div className='float-left'>
              <p className='font-weight-bold'
                  style={{margin:'0.5rem 0'}}>
                NOW PLAYING
              </p>
            </div>
            <div className='float-right'>
              <Link to='/movies'>
                <i className='far fa-arrow-alt-circle-right'/>
              </Link>
            </div>
          </div>
        </div>
        <div className="row mt-3">       
            {movieList}        
        </div>

        <div className='row mt-5'>
          <div className='col'>
            <p className='font-weight-bold'>
              TRENDING PERSON ON THIS WEEK
            </p>
          </div>
        </div>
        <div className='row mt-3'>      
            {personList}
        </div>

        <div className='row mt-3'>
          <div className='col'>
            <div className='float-left'>
                <p className='font-weight-bold' style={{margin:'0.5rem 0'}}>
                  TOP RATED MOVIES
                </p>
            </div>
           <div className='float-right'>
             <Link to='/movies'>
             <i 
              className='far fa-arrow-alt-circle-right' />
              </Link>
            </div>
        </div>
        </div>
        <div className='row' style={{paddingBottom:'20px'}}>
          {topRatedMoviesList}
        </div>

      </div>
    </div>
    </>
  )
}
export default FilmPage;