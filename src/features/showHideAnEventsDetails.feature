Feature: Show/hide an event's details

Scenario: An event element is collapsed by default
Given list of events has been loaded
When user has not clicked on "Show details" button
Then the event element details are collapsed and not visible

Scenario: User can expand an event to see its details
Given the list of events has been loaded
When user clicks on “Show details” button for an event
Then the event element will be expanded to show the event details

Scenario: User can collapse an event to hide its details
Given the event details are being shown
When user clicks close on event details
Then the event element will collapse event and hide details
