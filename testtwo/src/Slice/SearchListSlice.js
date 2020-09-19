import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'


export const getAllMovies = createAsyncThunk(
    'SearchList/movies',
    async(searchMovie) =>{
        console.log("searchMovie",searchMovie);
        try {
            const res =  await axios.get(`http://api.themoviedb.org/3/search/movie?api_key=41719e0ecc5e737b1809fad188d3b7fb&query=spidermanhttp://api.themoviedb.org/3/search/movie?api_key=41719e0ecc5e737b1809fad188d3b7fb&query=${searchMovie}`);
          return res.data.results
        } catch (err) {
            throw Error(err.message);
        }  
    } 
)

export const SearchListSlice = createSlice({
  name: 'searchList',
  initialState: [],
  reducers: {
 
  },
  extraReducers: {
    [getAllMovies.fulfilled]: (state, {payload}) => payload
  }
});

// export const {receiveAllCountries} = SearchListSlice.actions




export default SearchListSlice.reducer;
