import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: this.props.numberOfEvents,
    errorText: ""
}

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: undefined,
        errorText: "Select number from 1 to 32"
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: ""
      });
      this.props.updateEvents(undefined, value);
    }
  }

  render() {
    return (
      <div className="numberOfEvents">
        <label>Number of Events:</label>
        <input
          type="number"
          className="number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert style={{ marginTop: "100px" }} text={this.state.errorText} />
      </div>
    );
  }
}
export default NumberOfEvents;
