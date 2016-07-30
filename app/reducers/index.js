const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'UP':
      return {
        count: state.count + 1,
      };
    case 'DOWN':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counter;
