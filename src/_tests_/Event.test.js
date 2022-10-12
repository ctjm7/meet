import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper, event;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  /* tests if Event component contains a details button */
  test('render button', () => {
    expect(EventWrapper.find('.details')).toHaveLength(1);
  });

  test('render div', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render title', () => {
    expect(EventWrapper.find('.event-title')).toHaveLength(1);
  });

  /* checks if html link is visible on click */
  test('cha when button is clicked', () => {
    const submitButton = EventWrapper.find('.details');
    submitButton.simulate('click');
    expect(EventWrapper.find('.link')).toHaveLength(1);
    EventWrapper.unmount();
  });

});
