# meet
## Meet friends, meet strangers, meet yourself

Meet is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events in a city.

## Features

### Feature 1: Filter Events by City
As a user
I should be able to “filter events by city”
So that I can see the list of events that take place in that city

Scenario 1: When user hasn't searched for a city, show upsoming events from all cities
- Given user hasn’t searched for any city
- When the user opens the app
- Then the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city
- Given the main page is open
- When user starts typing in the city textbox
- Then the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list
- Given the user was typing “Berlin” in the city textbox
  And the list of suggested cities is showing
- When the user selects a city (e.g., “Berlin, Germany”) from the list
- Then their city should be changed to that city (i.e., “Berlin, Germany”)
  And the user should receive a list of upcoming events in that city

### Feature 2: Show/Hide an Event's Details
As a user
I should be able to "uncollapse an event element"
So that I can see the list of events that take place in that city

Scenario 1: An event element is collapsed by default
- Given list of events has been loaded
- When user has not clicked on "Show details" button
- Then the even element details are collapsed and not visible

Scenario 2: User can expand an event to see its details
- Given the list of events has been loaded
- When user clicks on “Show details” button for an event
- Then the event element will be expanded to show the event details

Scenario 3: User can collapse an event to hide its details
- Given the event details are being shown
- When user clicks close on event details
- Then the event element will collapse event and hide details

### Feature 3: Specify Number of Events
As a user
I should be able to "specify the number of events visible"
So that I can see a specific number of events 

Scenario 1: When user hasn’t specified a number, 32 is the default number
- Given events are loaded 
- When user has not set a specified custom number of events
- Then 32 events will be loaded 

Scenario 2: User can change the number of events they want to see
- Given the events have been loaded
- When user changes number of events to be viewed
- Then that specific number of events is loaded

### Feature 4: Use the App when Off-line
As a user
I should be able to "use app without internet connection"
So that I can see events listed without being online

Scenario 1: Show cached data when there’s no internet connection
- Given data is stored in cache
- When user is offline
- Then they are able to view stored data 

Scenario 2: Show error when user changes the settings (city, time range)
- Given that the user is offline
- When user changes the settings (city, time range)
- Then the browser show an error message that data can't be viewed

### Feature 5: Data Visualization
As a user
I should be able to "view data in a chart format"
So that I can see events in an organized manner in each city

Scenario 1: Show a chart with the number of upcoming events in each city
- Given the events are loaded of events in each city
- When user is on page to view number of events
