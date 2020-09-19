import React,{useEffect} from 'react'
import { useParams} from 'react-router-dom';
import { getSelectedMovie } from '../Slice/SelectedMovieSlice' 
import {  useDispatch,useSelector } from 'react-redux';

import Myratingspage from './Myratingspage'

function AddRatings({ addtoRate }) {
    const [value, setValue] = React.useState("");
    const [isSelected, setIsSelected] = React.useState(false)
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addtoRate(value);
 
      setIsSelected(!isSelected)
    };
    console.log("value",value);
   
  
    return (
          <>
          { isSelected ? <p>Reatings for this movie : {value}</p> : 
                <form onSubmit={handleSubmit}>
                <input
                className="input"
                value={value}
                min='0' max='5'
                type="number" 
                placeholder="please enter your ratings "
                onChange={e => setValue(e.target.value)}
              />
                
                </form>
              
              
            }
              
          </>
      

      
    );
  }

const SingleMovie = (props) => {
    const [TodoRating, setTodoRating] = React.useState([]);
    const dispatch = useDispatch();
    const selectedMovie = useSelector(state=>state.selectedMovie)
    console.log("TodoRating",TodoRating);

    let {movieid} = useParams();
   
    useEffect(()=>{
     
        dispatch(getSelectedMovie(movieid));
        
        
    },[]);
   
    const addtoRate = text => {
        const newTodos = [...TodoRating, { text,name:selectedMovie.original_title }];
        setTodoRating(newTodos);
      };
 
    
   
    return (
        <div class="container ">
             <div class="row">
             <div class="col s6 m6 card_padding"> <img src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} width="300px" alt="img"/></div>
             <div className="col s6 s6 card_padding left-align">
            <h3>{selectedMovie.original_title}</h3>  
            <p>{selectedMovie.overview}</p> 
            <p><h5>release_date :</h5> {selectedMovie.release_date}</p>
            <AddRatings addtoRate={addtoRate} />
        </div>
 
             </div>


             <ul>
               {
 TodoRating.map(TodoRating => <Myratingspage text={TodoRating.text} name={TodoRating.name}/>)

               }
            
             </ul>
            
            
        </div>
      
    )
}

export default SingleMovie

