import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;
    test('An event element is collapsed by default', ({ given, when, then }) => {
    	given('list of events has been loaded', () => {

    	});
    	when('user has not clicked on "Show details" button', () => {
        AppWrapper = mount(<App />);
    	});

    	then('the event element details are collapsed and not visible', () => {
        expect(AppWrapper.find('.event .link')).toHaveLength(0);
    	});
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
    	given('the list of events has been loaded', () => {
        AppWrapper = mount(<App />);
    	});
    	when('user clicks on “Show details” button for an event', () => {
        AppWrapper.update();
        AppWrapper.find('.event .details').at(0).simulate('click');
    	});

    	then('the event element will be expanded to show the event details', () => {
        expect(AppWrapper.find('.event .link')).toHaveLength(1);
    	});
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
    	given('the event details are being shown', async () => {
        AppWrapper = await mount(<App />);
        AppWrapper.update();
        // this is first click to show details
        AppWrapper.find('.event .details').at(0).simulate('click');
    	});

    	when('user clicks close on event details', () => {
        AppWrapper.find('.event .details').at(0).simulate('click');
    	});

    	then('the event element will collapse event and hide details', () => {
        expect(AppWrapper.find('.event .link')).toHaveLength(0);
    	});
    });
});
