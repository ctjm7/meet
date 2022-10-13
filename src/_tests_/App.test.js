import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });
  /* feature to require a list of events to be rendered */
  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  /* test when user inputs search list of suggested events appears */
  test('render CitySearch', () => {
  expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render NumberOfEvents', () => {
  expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

});

describe('<App /> integration', () => {
  test('App passed "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });

  test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });

  test('App passed number of events state as a prop to NumberOfEvents', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('numberOfEvents');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('get list of events matching the number of events entered by the user', async () => {
    const AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    const eventItems = Math.floor(Math.random() * 32);
    const eventObject = { target: { value: eventItems } };
    await NumberOfEventsWrapper.find('.number').simulate(
      'change',
      eventObject
    );
    expect(AppWrapper.state('numberOfEvents')).toEqual(eventItems);
    AppWrapper.unmount();
  });

    test('App passes "event" array equal in length to numberOfEvents to EventList', async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({
      numberOfEvents: 1
    });
    const allEvents = await getEvents();
    const events = allEvents.slice(0, 1);
    AppWrapper.setState({
      events: events
    });
    const eventLength= (AppWrapper.find(EventList).props().events).length
    expect(eventLength).toEqual(AppWrapper.state('numberOfEvents'));
    AppWrapper.unmount();
  });

});
