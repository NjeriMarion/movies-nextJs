"use client";
import { useEffect, useState } from 'react'
import { IMAGE_BASE_URL } from './config/config';
import Image from 'next/image'
import { getMovies } from './utilities/utils'

interface Movie{
  id : number,
  poster_path:string,
  genre_ids: number[],
  tittle:string,
}

type movieData = {
  results: Movie[]
}
export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async()=>{
      const movies = getMovies();
      console.log(({movies}));      
    })();
  },[]) 
  
  return (
    <main>
      <div>
      {/* {movies?.results.map((item)=>{
        return (
          <div key={item.id} className='overflow-hidden'>
            <img src={`${IMAGE_BASE_URL}${item.poster_path}`}
           alt={item.tittle} />
           className = 
          </div>
        )
      })} */}
      </div>
      
    </main>
  )
}
