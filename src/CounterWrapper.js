import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';

class CounterWrapper extends Component {
  state = {
    count: 0,
  }
  
  // Define our methods to count
  increment = () => {
    const { count } = this.state
    return this.setState({ count: count + 1 })
  }
  
  decrement = () => {
    const { count } = this.state
    return this.setState({ count: count - 1 })
  }

  render() {
    const { render } = this.props
    const { count } = this.state
    
    // Share our methods and state
    return (
      <div className="App">
        {
          render({
            increment: this.increment, 
            decrement: this.decrement,
            count: count
          })
        }
      </div>
    );
  }
}

CounterWrapper.propTypes = {
  render: PropTypes.func.isRequired,
}

export default CounterWrapper;
