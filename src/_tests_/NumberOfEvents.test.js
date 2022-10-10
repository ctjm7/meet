import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  /* tests if NumberOfEvents component contains a textbox */
  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
  });

  /* checks the value prop of element with class number is equal to
  * NumberOfEvents integer state */
  test('renders text input correctly', () => {
    const numberInput = NumberOfEventsWrapper.state('numberInput');
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(numberInput);
  });

  test('render default number in the input is 32', () => {
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(32);
  });

   /* tests if NumberOfEvents component contains a div */
  test('render label', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
  });

 /* test change of state when number input changes */
  test('change state when text input changes', () => {
    NumberOfEventsWrapper.setState({
    numberInput: 1
  });
  const eventObject = { target: { value: 2 }};
  NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
  expect(NumberOfEventsWrapper.state('numberInput')).toBe(2);
  });
});
