import React from 'react'
import { Link } from 'react-router-dom'
const AllMovies = ({movies}) => {
    return (
        <>
        {
             movies.poster_path == null ?  <></> :
             <div  class="col s2 m4 center-align card-image" >
             <Link  to={`/${movies.id}`} >
            <div>
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                <span class="card-title">{movies.original_title}</span>
               <img class="responsive-img" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} width="200px" alt="img" />
            
                </div>
             
            </div>
            </div>
     </Link>
   </div>
        }
        </>
         
    )
}

export default AllMovies
