import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from '../features/counter/counterSlice';
import searchListReducer from '../Slice/SearchListSlice'
import selectedMovieReducer from  '../Slice/SelectedMovieSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    searchList:searchListReducer,
    selectedMovie:selectedMovieReducer,
  },
  middleware:[...getDefaultMiddleware(),logger],
});
