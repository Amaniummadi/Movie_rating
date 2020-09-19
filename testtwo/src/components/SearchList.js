import React,{useState} from 'react'
import {  useDispatch,useSelector } from 'react-redux';
import { getAllMovies } from '../Slice/SearchListSlice' 

import AllMovies from './AllMovies'
const SearchList = () => {
    const dispatch = useDispatch();
    const list = useSelector(state=>state.searchList)
    const [change, setChange] = useState('')



    const updatechangevalue= (e) =>{
       
        setChange(e.target.value);
    }
    const getSearch=(e)=>{
        e.preventDefault(); 
    
        dispatch(getAllMovies(change));
        setChange('');
        }

        // useEffect(() => {
        //   dispatch(getAllMovies(change));
        //     console.log("data",data);
        //   }, [])


  console.log("list",list);
 
 
    return (
        <div class="container">
            <div class="row">
    <div class="input-field col s6 ">
        <form onSubmit={getSearch}>
        <input placeholder="search for a movie" id="moviename" type="text" class="validate" value={change} onChange={updatechangevalue} />
     
        </form>

        </div>
    </div>

    <div className="row">
                        {
                    list.map((movies,i) =>(
                        <AllMovies key={movies.id} movies={movies} />
                    ))
                 } 
             </div>
  </div>
       
    )
}

export default SearchList
