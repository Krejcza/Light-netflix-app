import './ReloadMovieBtn.css'

const ReloadMovieBtn = (props) =>{
   return(
      <button className="main-reload-button" onClick={props.reloadMovies}>Načíst filmy</button>
   )
}

export default ReloadMovieBtn