import './AllDeleteBtn.css'

const AllDeleteBtn = (props) =>{
   return(
      <button className="main-delete-button" onClick={props.deleteMovies}>vymazat vše</button>
   )
}

export default AllDeleteBtn