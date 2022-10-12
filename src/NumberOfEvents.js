import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberInput: 32
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberInput: value
    });
  }

  render() {
    return (
      <div className="numberOfEvents">
        <label>Number of Events:</label>
        <input
          type="number"
          className="number"
          value={this.state.numberInput}
          onChange={this.handleInputChanged}
           />
      </div>
    );
  }
}
export default NumberOfEvents;
