import React, { Component } from 'react';
import CounterWrapper from './CounterWrapper'
import CounterUI from './CounterUI'

class Counter extends Component {
  render() {    
    return (
      <CounterWrapper
        render={
          ({ increment, decrement, count }) => (
            <CounterUI
              increment={increment}
              decrement={decrement}
              count={count} />
          )
        }>
      </CounterWrapper>
    );
  }
}

export default Counter;
