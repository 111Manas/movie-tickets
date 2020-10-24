import axios from 'axios';

const apiKey = 'f54ac1fe8c0565885bbc1d7c8bd0853e';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const genreUrl = `${url}/genre/movie/list`;
const topRatedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const personUrl = `${url}/trending/person/week`;
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=hi-IN&region=IN&page=1`;
const tvShowUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=hi-IN&region=IN&page=1`;

export const fetchMovies = async() => {
    try{
          const {data} = await axios.get(nowPlayingUrl,{
            params:{
              api_key:apiKey,
              language:'en_US',
              page:1
                  }
              })

          const imageUrl = `https://image.tmdb.org/t/p/original/`;
          const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: imageUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: imageUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average']
              }))
      return modifiedData;
    }catch(error){}
};

export const fetchGenre = async () => {
  try{
        const {data} = await axios.get(genreUrl,{
          params : {
            api_key:apiKey,
            language:"en_US",
            page:1
              }
            })
        const modifiedData = data['genres'].map((g) =>({
          id:g['id'],
          name:g['name']
            }))
         return modifiedData;
    }catch(error){ }
};

export const fetchMovieByGenre = async(genre_id) => {
    try{
        const {data} = await axios.get(nowPlayingUrl,{
          params:{
            api_key:apiKey,
            language:'en_US',
            page:1,
            with_genres:genre_id
               }
             })
          const imageUrl = `https://image.tmdb.org/t/p/original/`;
          const modifiedData = data['results'].map((m)=>({
            id: m['id'],
            backPoster: imageUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: imageUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average']
             }))

        return modifiedData;
       }catch(error){ }
};

export const fetchTrendingPersons =async () => {
    try{
        const {data} = await axios.get(personUrl,{
          params:{
            api_key:apiKey
           }
         })
        const modifiedData = data['results'].map((p) =>({
          id:p['id'],
          name:p['name'],
          popularity:p['popularity'],
          profileImg:'https://image.tmdb.org/t/p/w200' + p['profile_path'],
          known:p['known_for_department']
         }))

        return modifiedData;
    }catch(error){ }
};

export const fetchTopRatedMovie = async () => {
    try{
      const {data} = await axios.get(topRatedUrl,{
        params:{
          api_key:apiKey,
          language:'en_US',
          page:1
        }
      })

      const imageUrl = `https://image.tmdb.org/t/p/w500/`
      const modifiedData = data['results'].map((m)=>({
          id: m['id'],
          backPoster: imageUrl + m['backdrop_path'],
          popularity: m['popularity'],
          title: m['title'],
          poster: imageUrl + m['poster_path'],
          overview: m['overview'],
          rating: m['vote_average']
       }))
      return modifiedData;
    }catch(error){ }
};

export const fetchMovieDetail = async(id) => {
   try{
      const {data} = await axios.get(`${movieUrl}/${id}` ,{
        params: {
          api_key:apiKey,
          language:'en_US'
        }
      })
      return data;
   }catch(error){ }
};

export const fetchMovieVideos = async(id) => {
    try{
      const {data} = await axios.get(`${movieUrl}/${id}/videos`,{
        params:{
          api_key:apiKey
        }
      })
      return data['results'][0]
    }catch(error){ }
};

export const fetchCasts = async(id) => {
  try{
      const {data} = await axios.get(`${movieUrl}/${id}/credits`,{
        params:{
          api_key:apiKey
            }
         })
      const modifiedData = data['cast'].map((c)=>({
        id:c['cast_id'],
        character:c['character'],
        name:c['name'],
        img:`https://image.tmdb.org/t/p/w200` + c['profile_path']
      }))
    return modifiedData;
  }catch(error){}
};

export const fetchSimilarMovie = async (id) => {
  try{
      const {data} = await axios.get(`${movieUrl}/${id}/similar` , {
        params:{
          api_key:apiKey,
          language:'en_US',
          page:1
         }
        })
      const imageUrl = `https://image.tmdb.org/t/p/w500/`
      const modifiedData = data['results'].map((m)=>({
        id:m['id'],
        backPoster:imageUrl + m['backdrop_path'],
        popularity:m['popularity'],
        title:m['title'],
        poster:imageUrl + m['poster_path'],
        overview:m['overview'],
        rating:m['vote_average']
      }))
    return modifiedData;
  }catch(error){ }
};

export const fetchPopularMovies = async() =>{
  try{
    const {data} = await axios.get(popularUrl)
    console.log(data)
    const imageUrl = `https://image.tmdb.org/t/p/w500/`
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster:imageUrl + m['backdrop_path'],
      popularity: m['popularity'],
      title: m['title'],
      poster:imageUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average']
    }))
    return modifiedData
  }catch(error){}
};

export const fetchTvShows = async() =>{
  try{
    const {data} = await axios.get(tvShowUrl)
    console.log(data)
    const imageUrl = `https://image.tmdb.org/t/p/w500/`
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster:imageUrl + m['backdrop_path'],
      popularity: m['popularity'],
      title: m['name'],
      poster:imageUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average']
    }))
    return modifiedData
  }catch(error){}
};

