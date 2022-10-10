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

  test('render link', () => {
    expect(EventWrapper.find('.link')).toHaveLength(1);
  });

  test('render about heading', () => {
    expect(EventWrapper.find('.about')).toHaveLength(1);
  });

  /* checks if button value changes on click */
  test('change value when button is clicked', () => {
    const submitButton = EventWrapper.find('.details');
    const eventObject = { target: { value: 'Details' } };
    submitButton.simulate('click', eventObject);
    expect(submitButton.prop('value')).toBe('Hide Details');
  });

});
