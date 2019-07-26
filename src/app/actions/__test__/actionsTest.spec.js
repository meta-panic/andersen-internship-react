import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { requestTypeConcat, actionTypes as t } from '../actionTypes';
import fetchAnimeInfo from '../apiActions';
import { apiMiddleware, ROOT_URL } from '../../middlewares';

describe('test actions', () => {
  it('test action type generation', () => {
    expect(requestTypeConcat(t.FETCH_ANIME, 'REQUEST')).toEqual('FETCH_ANIME_REQUEST');
  });
});

const middlewares = [thunk, apiMiddleware];
const mockStore = configureMockStore(middlewares);

describe('test asunc actions are properly created', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
it('creates FETCH_ANIME_REQUEST->FETCH_ANIME_SUCCESS when fetching G raited anime has been done', () => {
    const ageFilter = 'G';
    fetchMock.getOnce(`${ROOT_URL}filter[ageRating]=${ageFilter}&page[limit]=8&page[offset]=0`, {
      headers: { 'content-type': 'application/json' },
      body: { data: [1, 2, 3] },
    });
    const expectedActions = [
      {
        type: t.FETCH_ANIME_REQUEST,
      },
      {
        type: t.FETCH_ANIME_SUCCESS,
        animeInfo: [1, 2, 3],
      },
    ];

    const store = mockStore({});

    return store.dispatch(fetchAnimeInfo(ageFilter)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_ANIME_REQUEST->FETCH_ANIME_FAILURE when fetching G raited anime has returned 404', () => {
    const ageFilter = 'G';
    fetchMock.getOnce(`${ROOT_URL}filter[ageRating]=${ageFilter}&page[limit]=8&page[offset]=0`, 404);

    const expectedActions = [
      {
        type: t.FETCH_ANIME_REQUEST,
      },
      {
        type: t.FETCH_ANIME_FAILURE,
      },
    ];

    const store = mockStore({});

    return store.dispatch(fetchAnimeInfo(ageFilter)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('picked no one raiting radio button', () => {
    const ageFilter = '';
    fetchMock.getOnce(`${ROOT_URL}filter[ageRating]=${ageFilter}&page[limit]=8&page[offset]=0`, {
      headers: { 'content-type': 'application/json' },
      body: { data: [] },
    });

    const expectedActions = [
      {
        type: t.FETCH_ANIME_REQUEST,
      },
      {
        type: t.FETCH_ANIME_SUCCESS,
        animeInfo: [],
      },
    ];

    const store = mockStore({});

    return store.dispatch(fetchAnimeInfo(ageFilter)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
