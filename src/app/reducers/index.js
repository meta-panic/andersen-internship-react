import { combineReducers } from 'redux';
import filter from './filterReducer';
import isAnimeInfo from './isAnimeInfoReducer';
import animeInfo from './animeInfoReducer';

export default combineReducers({
  filter,
  isAnimeInfo,
  animeInfo,
});
