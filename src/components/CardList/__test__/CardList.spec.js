import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CardList from '../CardList';

configure({ adapter: new Adapter() });

describe('CardList testing', () => {
  const props = { // описываем props
    data: [
      {
        attributes: {
          canonicalTitle: 'animeName1',
        },
        id: '1',
      },
      {
        attributes: {
          canonicalTitle: 'animeName2',
        },
        id: '2',
      }],
  };
  it('rendering 2 <AnimeCard /> CardList', () => {
    const cardList = shallow(<CardList {...props} />);
    expect(cardList.find('AnimeCard')).toHaveLength(2);
  });

  it('rendering CardList has the right structure', () => {
    const cardList = shallow(<CardList {...props} />);
    expect(
      cardList
        .find('ul')
        .first()
        .find('li')
        .first()
        .find('AnimeCard'),
    ).toHaveLength(1);
  });
  it('rendering CardList with the right classes', () => {
    const cardList = shallow(<CardList {...props} />);
    expect(cardList
      .find('ul')
      .first()
      .find('li')
      .first()
      .hasClass('animeInfo')).toBeTruthy();
    expect(cardList
      .find('ul')
      .first()
      .hasClass('animeInfoContainer')).toBeTruthy();
  });
});
