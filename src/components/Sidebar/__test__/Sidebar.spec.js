import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Sidebar, ageRatingArray } from '../SideBar';

configure({ adapter: new Adapter() });

describe('Sidebar', () => {
  const mockOnButtonPress = jest.fn();

  const initialState = { // начальный state компонента
    rating: ageRatingArray[0],
  };

  const initialProps = { // начальные props компонента
    onButtonPress: mockOnButtonPress, // подменяем action logIn на функцию-заглушку
  };

  const sidebar = shallow(<Sidebar {...initialProps} />);

  it('initialize Sidebar with initial state', () => {
    expect(sidebar.state()).toEqual(initialState);
  });

  describe('when pick some radio button', () => {
    beforeEach(() => {
      sidebar.find(`#${ageRatingArray[2]}`).simulate('change', {
        target: {
          checked: true,
          name: ageRatingArray[2],
        },
      });
    });

    it('pick "G" and "R" raiting', () => {
      expect(sidebar.state().rating).toEqual(['G', 'R']);
    });
  });

  describe('click submit button', () => {
    beforeEach(() => {
      sidebar.find('button.getAnimeButton').simulate('click', {});
    });

    it('form submited with right argument "G" and "R"', () => {
      expect(mockOnButtonPress).toHaveBeenCalledTimes(1);
      expect(mockOnButtonPress).lastCalledWith(['G', 'R']);
    });
  });
});
