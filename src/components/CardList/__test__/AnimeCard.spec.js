import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import AnimeCard from '../AnimeCard';

configure({ adapter: new Adapter() });

describe('Corrent AnimeCard rendering', () => {
  const props = {
    attributes: {
      posterImage: {
        tiny: 'https://media.kitsu.io/anime/poster_images/3053/tiny.jpg?1408448530',
      },
      canonicalTitle: 'title',
      startDate: '2000-07-07',
      endDate: '2000-12-07',
      status: 'current',
      ageRating: 'G',
      showType: 'OVA',
    },
    animeId: '1',
  };

  it('title', () => {
    const card = shallow(<AnimeCard {...props} />);

    expect(card
      .find('div > div')
      .first()
      .hasClass('animeTitle')).toBeTruthy();

    expect(card
      .find('div > div')
      .first()
      .find('Link')
      .children()
      .text()).toEqual(props.attributes.canonicalTitle);
  });

  it('show type', () => {
    const card = shallow(<AnimeCard {...props} />);

    expect(card
      .find('div > div')
      .at(1)
      .text()).toEqual(props.attributes.showType);
  });

  it('rating', () => {
    const card = shallow(<AnimeCard {...props} />);

    expect(card
      .find('div > div')
      .at(3)
      .text()).toEqual(`Rating: ${props.attributes.ageRating}`);
  });

  it('image', () => {
    const card = shallow(<AnimeCard {...props} />);

    expect(card
      .find('div > img')
      .props().src).toEqual(props.attributes.posterImage.tiny);
  });

  it('duration. Anime is ongoing', () => {
    const card = shallow(<AnimeCard {...props} />);

    expect(card
      .find('div > div')
      .at(2)
      .text()).toEqual(`${props.attributes.startDate.slice(0, 4)}-...`);
  });

  it('duration. Anime finished the same year as started', () => {
    const finishedAnimeProps = {
      ...props,
      attributes: {
        ...props.attributes,
        startDate: '2000-07-07',
        endDate: '2000-12-07',
        status: 'finished',
      },
    };

    const card = shallow(<AnimeCard {...finishedAnimeProps} />);

    expect(card
      .find('div > div')
      .at(2)
      .text())
      .toEqual(`${finishedAnimeProps.attributes.startDate.slice(0, 4)}`);
  });

  it('duration. Anime finished the another year as started', () => {
    const finishedAnimeProps = {
      ...props,
      attributes: {
        ...props.attributes,
        startDate: '2000-07-07',
        endDate: '2003-12-07',
        status: 'finished',
      },
    };

    const card = shallow(<AnimeCard {...finishedAnimeProps} />);

    expect(card
      .find('div > div')
      .at(2)
      .text())
      .toEqual(`${finishedAnimeProps.attributes.startDate.slice(0, 4)} - ${finishedAnimeProps.attributes.endDate.slice(0, 4)}`);
  });
});

// TODO
// describe('test routing by link', () => {
//   const props = {
//     attributes: {
//       posterImage: {
//         tiny: 'https://media.kitsu.io/anime/poster_images/3053/tiny.jpg?1408448530'
//       },
//       canonicalTitle: 'title',
//       startDate: '2000-07-07',
//       endDate: '2000-12-07',
//       status: 'finished',
//     },
//     animeId: '1',
//   };

//   it('', () => {
//   });
// });
