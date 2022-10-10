import React, { Component } from 'react';

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: []
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions
    });
  }

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion
    });
  }

  render() {
    return (
      <div className="CitySearch">
        <h3>Choose your nearest City</h3>
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged} />
        <ul className="suggestions">
          {this.state.suggestions.map((suggestion) =>
          (
            <li key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}>
              {suggestion}</li>
            ))}
            <li key='all'>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
