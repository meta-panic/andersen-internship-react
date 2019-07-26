import { animeInfo as animeInfoReducer, initialState } from '../animeInfoReducer';
import { actionTypes as t } from '../../actions/actionTypes';

describe('anime getting reducers', () => {
  it('FETCH_ANIME_REQUEST after loading app', () => {
    const action = {
      type: t.FETCH_ANIME_REQUEST,
    };

    expect(animeInfoReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it('FETCH_ANIME_SUCCESS after loading app', () => {
    const action = {
      type: t.FETCH_ANIME_SUCCESS,
      animeInfo: [1, 2, 3],
    };

    const state = {
      ...initialState,
      loading: true,
    };

    expect(animeInfoReducer(state, action)).toEqual({
      ...state,
      data: action.animeInfo,
      loading: false,
    });
  });
  it('FETCH_ANIME_FAILURE', () => {
    const action = {
      type: t.FETCH_ANIME_FAILURE,
    };

    const state = {
      ...initialState,
      data: [1, 2, 3],
      loading: true,
    };

    expect(animeInfoReducer(state, action)).toEqual({
      ...state,
      data: {},
      loading: false,
    });
  });
});
