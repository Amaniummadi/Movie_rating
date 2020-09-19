import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'


export const getSelectedMovie = createAsyncThunk(
    'singleMovie/movies',
    async(movie_id) =>{
        try {
            const res =  await axios.get(`
            https://api.themoviedb.org/3/movie/${movie_id}?api_key=41719e0ecc5e737b1809fad188d3b7fb&language=en-US`);
            console.log("res.data",res.data);
          return res.data
        } catch (err) {
            throw Error(err.message);
        }  
    } 
)

export const SelectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState: [],
  reducers: {
 
  },
  extraReducers: {
    [getSelectedMovie.fulfilled]: (state, {payload}) => payload
  }
});






export default SelectedMovieSlice.reducer;
