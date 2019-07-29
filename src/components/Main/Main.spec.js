import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Main } from './Main';

configure({ adapter: new Adapter() });

describe('Main container', () => {
  const initialProps = { // описываем props
    animeInfo: {
      data: {},
      loading: false,
    },
  };
  const errorMessage = 'Error during data loading';
  it('init rendering Main', () => {
    const mainContainer = shallow(<Main {...initialProps} />);

    expect(mainContainer.find('div.main')).toHaveLength(1);
    expect(mainContainer.find('Connect(Sidebar)')).toHaveLength(1);
    expect(mainContainer.contains(errorMessage)).toBeFalsy();
    expect(mainContainer.find('CardList')).toHaveLength(0);
    expect(mainContainer.find('div.main div.spinner')).toHaveLength(0);
  });
  it('rendering Main when we have not any data', () => {
    const props = { // описываем props
      ...initialProps,
      animeInfo: {
        data: [],
        loading: false,
      },
    };
    const mainContainer = shallow(<Main {...props} />);

    expect(mainContainer.find('div.main')).toHaveLength(1);
    expect(mainContainer.find('Connect(Sidebar)')).toHaveLength(1);
    expect(mainContainer.contains(errorMessage)).toBeTruthy();
    expect(mainContainer.find('CardList')).toHaveLength(0);
    expect(mainContainer.find('div.main div.spinner')).toHaveLength(0);
  });
  it('rendering Main while loading', () => {
    const props = { // описываем props
      ...initialProps,
      animeInfo: {
        data: {},
        loading: true,
      },
    };
    const mainContainer = shallow(<Main {...props} />);

    expect(mainContainer.find('div.main')).toHaveLength(1);
    expect(mainContainer.find('Connect(Sidebar)')).toHaveLength(1);
    expect(mainContainer.contains(errorMessage)).toBeFalsy();
    expect(mainContainer.find('CardList')).toHaveLength(0);
    expect(mainContainer.find('div.main div.spinner')).toHaveLength(1);
  });
  it('rendering Main while we have already gotten all data', () => {
    const props = { // описываем props
      ...initialProps,
      animeInfo: {
        data: [{}],
        loading: false,
      },
    };
    const mainContainer = shallow(<Main {...props} />);

    expect(mainContainer.find('div.main')).toHaveLength(1);
    expect(mainContainer.find('Connect(Sidebar)')).toHaveLength(1);
    expect(mainContainer.contains(errorMessage)).toBeFalsy();
    expect(mainContainer.find('CardList')).toHaveLength(1);
    expect(mainContainer.find('div.main div.spinner')).toHaveLength(0);
  });
});

