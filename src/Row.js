import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";
import axios from './axios.js';
import './css/Row.css'
import x from './icon/xmark.svg';
const baseUrlForPoster = 'https://image.tmdb.org/t/p/original/'
function Row({ title, fetchURL ,largeRow}) {

    const [movies, setMovies] = useState([])
    const [movieLink, setMovieLink] = useState(undefined);


    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            // console.log(movies);
            
        }
        fetchData();

    }, [fetchURL])


    function handleClick(movie) {
    //    if(movieLink!==undefined){
    //     setMovieLink(undefined)
    //    }
    //    else
        movieTrailer(movie.name||movie.title||movie.originalname||"")
        .then(url=>{
                console.log(url);

            const urlparam = new URLSearchParams(new URL(url).search);
            // console.log(urlparam.getAll());
            
             
            
            setMovieLink(urlparam.get('v'));
        }).catch(error=>console.log(error))
    // }
            
    }
    function handleclose() {
            if(movieLink!==undefined)
            setMovieLink(undefined);
    }

    return (
        <div className='row ml-3'>
            <div className='text-white text-3xl font-semi-bold p-1 mt-4'>{title}</div>
            <div className=" p-3 flex  w-full subrow ">
                {movies && movies.map((movie) => (
                    <img key={movie.id} onClick={()=>handleClick(movie)} src={`${baseUrlForPoster}${largeRow?movie.poster_path:movie.backdrop_path}`} className='rowimage w-32 m-2 transition-all duration-500' alt={movie.name}  />
                ))
                }
            </div>
            {movieLink&&
            <div className='bg-black px-10 relative'>
                <img src={x} alt="" onClick={()=>handleclose()} className='w-4 absolute right-5 top-4 hover:scale-110 transition-all duration-200'  style={{filter:'invert(1)'}}/>
            <YouTube  videoId={movieLink} opts={opts} />
            </div>
            }
        </div>
    )
}

export default Row