import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from "../NumberOfEvents";
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('events are loaded', () => {
        AppWrapper = shallow(<App />);
    });

    when('user has not set a specified custom number of events', () => {
        AppWrapper.update();
    });

    then('32 events will be loaded', () => {
        expect(AppWrapper.state('numberOfEvents')).toEqual(32);
    	});
    });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let NumberOfEventsWrapper;
    let AppWrapper;
    given('the events have been loaded', async () => {
      AppWrapper = await mount(<App />);
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} NumberOfEvents={AppWrapper.state('numberOfEvents')} />);
    	});

    	when('user changes number of events to be viewed', () => {
        NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', { target: { value: 1 } });

    	});

    then('that specific number of events is loaded', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.EventList')).toHaveLength(1);
    	});
    });


});
