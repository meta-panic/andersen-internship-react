import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CardList from './CardList';

configure({ adapter: new Adapter() });

describe('Corrent AnimeCard rendering', () => {
  const props = {
    attributes: {
      posterImage: {
        tiny: 'https://media.kitsu.io/anime/poster_images/3053/tiny.jpg?1408448530'
      },
      canonicalTitle: 'title',
      startDate: '2000-07-07',
      endDate: '2000-12-07',
      status: 'finished',
    },
    animeId: '1',
  };

  it('title', () => {
    // const cardList = shallow(<CardList {...props} />);
    // expect(cardList.find('AnimeCard')).toHaveLength(2);
  });

  it('rating', () => {
  });

  it('link', () => {
  });

  it('image', () => {
  });

  it('duration', () => {
  });

  it('check correct structures', () => {
  });

  it('check correct styles', () => {
  });
});

describe('test routing by link', () => {
  const props = {
    attributes: {
      posterImage: {
        tiny: 'https://media.kitsu.io/anime/poster_images/3053/tiny.jpg?1408448530'
      },
      canonicalTitle: 'title',
      startDate: '2000-07-07',
      endDate: '2000-12-07',
      status: 'finished',
    },
    animeId: '1',
  };

  it('', () => {
  });
});
