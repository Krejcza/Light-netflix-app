import './Movie.css'
import data from '../data'
import MovieDeleteBtn from './MovieDeleteBtn'
import { useState } from 'react'
import AllDeleteBtn from './AllDeleteBtn'
import ReloadMovieBtn from './ReloadMoviesBtn'

const Movie = () =>{

   const [MovieList, SetMovieList] = useState(data)

   const deleteOneMovie = (idecko) =>{
      const filteredMovies = MovieList.filter((oneMovie) => {
         return oneMovie.id !== idecko
      })
      SetMovieList(filteredMovies)
   }

   const deleteAllMovies = () => {
      SetMovieList([])
   }

   const reloadAllMovies = () =>{
      SetMovieList(data)
   }

   return <section>
      <div className='all-movies'>
         {
            MovieList.map((oneMovie) => {
               const{id, image, title, age, tags, description} = oneMovie
               
               return <div className='one-movie' key={id}>
                  <img src={image} alt="" />
                  <h2>{title}</h2>
                  <p>{age}</p>
                  <p>{tags}</p>
                  <p>{description}</p>
                  <MovieDeleteBtn deleteMovie={() => deleteOneMovie(id)}/>
               </div>
            })
         }

            
      </div>
      <div className='Button-box'>
         <AllDeleteBtn deleteMovies={deleteAllMovies} />
         <ReloadMovieBtn reloadMovies={reloadAllMovies}/>
      </div>
   </section>
   
}

export default Movie