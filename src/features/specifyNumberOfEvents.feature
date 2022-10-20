Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given events are loaded
When user has not set a specified custom number of events
Then 32 events will be loaded

Scenario: User can change the number of events they want to see
Given the events have been loaded
When user changes number of events to be viewed
Then that specific number of events is loaded
