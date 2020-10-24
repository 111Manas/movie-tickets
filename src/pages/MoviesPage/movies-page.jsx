import React, {useState,useEffect} from 'react';
import './movies-page.css';
import {fetchPopularMovies} from '../../components/Data/data';
import {Link} from 'react-router-dom';
import axios from 'axios';
 
const apiKey = 'f54ac1fe8c0565885bbc1d7c8bd0853e';
const searchUrl= `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&query=''`;


const setVoteClass = (vote) =>{
  if(vote >= 7.5){
      return 'green';
  }else if (vote >= 6) {
      return 'orange';
  }else {
      return 'red';
  }
};

 const MoviesPage =()=> {
    const [movies,setMovies] = useState([]);
    const [searchItem,setSearchItem] = useState('');

    const fetchSearchMovie = async () =>{
      try{
        const {data} = await axios.get(searchUrl+searchItem)
        
        const imageUrl = `https://image.tmdb.org/t/p/w500/`
        const modifiedData = data['results'].map((m)=>({
          id:m['id'],
          backPoster:imageUrl + m['backdrop_path'],
          popularity: m['popularity'],
          title: m['title'],
          poster:imageUrl + m['poster_path'],
          overview: m['overview'],
          rating: m['vote_average']
        }))
        return modifiedData;
      }catch(error){}
    };

  useEffect(()=>{
    getMovies();
  },[])

  const getMovies = () => {
    const fetchAPI = async () =>{
      setMovies(await fetchPopularMovies());
    };
    fetchAPI();
  };

  const handleSubmit = (event) =>{
    event.preventDefault();

    const fetchAPI = async () => {
      setMovies(await fetchSearchMovie());
    }
    fetchAPI();
    setSearchItem('');
  }

  const handleChange = (event) =>{
    setSearchItem(event.target.value);
  };

  const popularMovieList = movies.map((item,index)=>{
    return(
      <div className="movie" key={index}>
         <Link to={`/movie/${item.id}`}>
            <img src={item.poster ?
                       item.poster : 
             'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'}
            alt={item.title}
            />
         </Link>
            <div className='movie-info'>
                 <h4>{item.title}</h4>
                 <span className={`tag${setVoteClass(item.rating)}`}>{item.rating}</span>
            </div>
             <div className="movie-over">
                <h3>Overview</h3>
                <p>{item.overview}</p>
            </div>
        </div>
    )
  });

  return(
    <>
      <div className="movies-page">
          <div className="header">
            <form onSubmit={handleSubmit}>
               <input type='search' 
                   value={searchItem}
                   className='search' 
                   placeholder='Search...'
                   onChange={handleChange}
                    />
            </form>
        </div>
        <div className='movies-container'>
          {popularMovieList}
        </div>
      </div>
    </>
  )
};
export default MoviesPage;