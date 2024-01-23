import React from 'react'
import { POSTER_PATH } from '../utils/constants'

const MovieCard = (movieInfo) => {
    const {poster_path} = movieInfo
  return (
    <div className='w-[350px] h-[500px] m-1 p-1'>
        <img src={`${POSTER_PATH}/${poster_path}`} className='w-[350px] h-[500px]'/>

    </div>
  )
}

export default MovieCard