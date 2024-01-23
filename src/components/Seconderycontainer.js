import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

export const Seconderycontainer = () => {
  const movies = useSelector(state=>state?.movies?.nowPlayingMovies)
  const pmovies = useSelector(state=>state?.movies?.popularMovies)
  
  return (
    <div>
      <MoviesList title={"Now playing"} movies={movies}/>
       <MoviesList title={"Popular"} movies={pmovies}/>
      {/* <MoviesList title={"Recently Added"} movies={movies?.nowPlayingMovies}/>
      <MoviesList title={"Upcoming"} movies={movies?.nowPlayingMovies}/>
      <MoviesList title={"Now playing"} movies={movies?.nowPlayingMovies}/>  */}
    </div>
  )
}
