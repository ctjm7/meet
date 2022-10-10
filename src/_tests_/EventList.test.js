import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
  test('render correct number of events', () => {
    /* mock data to be passed for events */
    const EventListWrapper = shallow(<EventList events={mockData} />);
    /* tests to see if Event has length of data */
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });
});
