import React from 'react'

const CounterUI = ({ increment, decrement, count}) => (
  <div>
    <div className="counter-title">
      <h3>Counter example using Render Props</h3>
    </div>
    <div className="counter-ui">
      <input type="text" disabled={true} value={count} />
      <button onClick={() => increment()}>
        Increment
      </button>
      <button onClick={() => decrement()}>
        Decrement
      </button>
    </div>
  </div>
)

export default CounterUI