import React, { PropTypes } from 'react';

const Counter = ({ count, fireUp, fireDown }) => (
  <div>
    <span>Clicked: {count} times</span>
    <button onClick={() => fireUp()}>
      +
    </button>
    <button onClick={() => fireDown()}>
      -
    </button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  fireUp: PropTypes.func.isRequired,
  fireDown: PropTypes.func.isRequired,
};

export default Counter;
