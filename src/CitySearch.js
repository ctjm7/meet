import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  state = {
    // query: "",
    suggestions: [],
    showSuggestions: false,
    infoText: ""
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.props.handleQueryState(value);
      this.setState({
        // query: value,
        suggestions,
        infoText: 'We cannot find the city you are looking for.\nPlease try another city'
      });
    } else {
        this.setState({
          // query: value,
          suggestions,
          infoText: ""
        });
      this.props.handleQueryState(value);
      }
    }

  handleItemClicked = (suggestion) => {
    this.setState({
      // query: suggestion,
      showSuggestions: false,
      infoText:""
    });
    this.props.handleQueryState(suggestion);
    this.props.updateEvents(suggestion, undefined);
  }

  render() {
    return (
      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
        <h3 className="city-title">Choose your nearest City</h3>
        <input
          type="text"
          className="city"
          value={this.props.query}
          onChange={this.handleInputChanged}
          onFocus={() => {
            this.setState({ showSuggestions: true })
          }} />
        <ul className="suggestions"
            style={this.state.showSuggestions ? {} :
              {display: 'none'}}>
          {this.state.suggestions.map((suggestion) =>
          (
            <li key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}>
              {suggestion}</li>
            ))}
            <li onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
