import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className='w-full aspect-video text-white pt-[20%] px-32 absolute bg-gradient-to-r from-black'>
        <h1 className='text-3xl'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='p-4 px-16 rounded-md bg-gray-400 hover:opacity-65 text-white text-lg'>Play</button>
            <button className='p-4 px-12 mx-3 rounded-md bg-gray-500 text-white text-lgm hover:opacity-60'>Moreinfo</button>
        </div>
    </div>
  )
}

export default Videotitle