import React,{useState,useEffect} from 'react';
import './film-detail.css';
import {fetchMovieDetail,fetchMovieVideos, fetchSimilarMovie,fetchCasts} from '../../../components/Data/data';
import {Button} from '../../../components/Button/button';
import {Modal} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import ReactStars from 'react-rating-stars-component';
import {Link} from 'react-router-dom';

function FilmDetail ({match}) {
  const params = match.params;
  let genres = [];
  const [detail,setDetail] = useState([]);
  const [isOpen,setIsOpen] = useState(false);
  const [video,setVideo] = useState([]);
  const [casts,setCasts] = useState([]);
  const [similarMovies,setSimilarMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async() => {
      setDetail(await fetchMovieDetail(params.id));
      setVideo(await fetchMovieVideos(params.id));
      setCasts (await fetchCasts(params.id));
      setSimilarMovies(await fetchSimilarMovie(params.id));
    };

    fetchAPI();
  }, [params.id]);

  genres = detail.genres;

  const MoviePalyerModal = (props) =>{
    const youtubeUrl = 'https://www.youtube.com/watch?v=';
    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered >
          <Modal.Header closeButton>
            <Modal.Title
            id='contained-modal-title-vcenter'
                style={{fontWeight:'bolder', color:'black',
                height:0,
                lineHeight:1}}
                >
              {detail.title}
            </Modal.Title>
          </Modal.Header>
             <Modal.Body
               style={{backgroundColor:'#000000'}}>
                 <ReactPlayer
                    className='container-fluid'
                    url={youtubeUrl + video.key}
                    playing
                    width='100%'>
                 </ReactPlayer>
              </Modal.Body>
        </Modal>
      )
  };

let genreList;
  if(genres){
    genreList = genres.map((genre,index)=>{
      return(
        <li className='list-inline-item' key={index}>
        <Button buttonColor='black'>
          {genre.name}
        </Button>
      </li>
      )
    })
  }
 
  const castList = casts.slice(0,4).map((cast,index)=>{
    return(
      <div className='col-md-3 text-center' key={index}>
        <img 
          className='img-fluid rounded-circle mx-auto d-block'
          src={cast.img}
          alt={cast.name}/>
        <p className='font-weight-bold text-center'>
          {cast.name}</p>
        <p className='font-weight-lighter text-center'>
          {cast.character}</p>
      </div>
    )
  });

  const similarMovieList = similarMovies.slice(0,4).map((item,index)=>{
    return(
      <div className="col-md-3" key={index}>
        <div className='card mt-2'>
          <Link to={`/movie/${item.id}`}>
          <img src={item.poster} alt={item.title} className='img-fluid'/>
          </Link>          
        </div>
        <div className='mt-1'>
            <p className='font-weight-bolder'>
                {item.title}</p>
              <p>Rated:{item.rating}</p>
              <ReactStars
              count={item.rating}
              size={20}
              color={'yellow'}>
              </ReactStars>
        </div>
      </div>
    )
  })
  
  return (
    <>
    <div className='film-detail-page'>
      <div className='film-detail-container'>
        <div className='row mt-1'>
          <MoviePalyerModal
            show={isOpen}
            onHide={()=>{setIsOpen(false)}}
            >
          </MoviePalyerModal>
          <div className='col mt-1 text-center' 
                style={{width:'100%'}}>
            <img 
                src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`} 
                alt={detail.title}
                className='img-fluid'
            />
            <div className="carousel-center">
               <i 
                  className='far fa-play-circle' 
                  style={{fontSize:75, color:'yellow'}}
                 onClick={()=>
                      setIsOpen(true)}
                 />
            </div>
            <div className='carousel-caption' 
            style={{textAlign:'center', fontSize:24}}>
              {detail.title}
              </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <p style={{color:'white', fontWeight:'bolder'}}>
              GENRE
            </p>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col">
            <ul className="list-inline">
              {genreList}
            </ul>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <ReactStars
            count={detail.vote_average}
            size={20}
            color={'yellow'}> 
            </ReactStars>
          </div>
        </div>
        <div className="mt-2">
            <p style={{color:'#5a606b',fontWeight:'bolder' }}>OVERVIEW</p>
              {detail.overview}
        </div>

        <div className='row mt-3'>
          <div className="col">
            <p style={{color:'#5a606b',fontWeight:'bolder'}}>RELEASE DATE</p>
            <p style={{color:'#f4c10f'}}>
              {detail.release_date}</p>
          </div>
          <div className="col">
            <p style={{color:'#5a606b',fontWeight:'bolder'}}>RUN TIME</p>
            <p style={{color:'#f4c10f'}}>{detail.runtime}</p>
          </div>
          <div className="col">
            <p style={{color:'#5a606b',fontWeight:'bolder'}}>BUDGET</p>
            <p style={{color:'#f4c10f'}}>{detail.budget}</p>
          </div>
          <div className="col">
            <p style={{color:'#5a606b',fontWeight:'bolder'}}>HOME PAGE</p>
            <p style={{color:'#f4c10f'}}>{detail.homepage}</p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <p style={{fontWeight:'bolder'}}>CASTS</p>
          </div>
        </div>
        <div className="row mt-2"> 
            {castList}
        </div>

        <div className="row mt-3">
          <div className="col">
            <p style={{fontWeight:'bolder'}}>SIMILAR MOVIES</p>
          </div>
        </div>
        <div className="row mt-2">
          {similarMovieList}
        </div>
      </div>
    </div>
    </>
  )
}
export default FilmDetail;