import React, { Component} from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    query: ""
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleQueryState = (query) => {
    this.setState({ query });
  }

  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
    }
    getEvents().then((events) => {
      let locationEvents;
      if (location === undefined) {
        locationEvents = events.filter((event) => event.location === this.state.query);
      } else if (location === "all") {
        locationEvents = events;
      } else {
        locationEvents = events.filter((event) => event.location === location);
      }
      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount
      });
    });
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} query={this.state.query} handleQueryState={this.handleQueryState} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
