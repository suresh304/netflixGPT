import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle'
import VideoBackground from './VideoBackground'

const Maincontainer = () => {
    const movies = useSelector(state=>state.movies?.nowPlayingMovies)
    if(!movies)return
    console.log(movies[0])
    const mainMovie = movies[0]
    const {original_title,overview,id} = mainMovie
  return (
    <div>
        <Videotitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default Maincontainer