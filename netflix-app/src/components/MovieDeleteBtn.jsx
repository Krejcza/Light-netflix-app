import './MovieDeleteBtn.css'


const MovieDeleteBtn = (props) => {
   return(
      <button className='movie-delete-btn' onClick={props.deleteMovie}>Vymazat film</button>
   )
}

export default MovieDeleteBtn 