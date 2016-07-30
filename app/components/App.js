import { connect } from 'react-redux';
import { up, down } from '../actions';
import Counter from './Counter';

const mapStateToProps = (state) => (
  {
    count: state.count,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fireUp: () => {
      dispatch(up());
    },
    fireDown: () => {
      dispatch(down());
    },
  }
);

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default App;
