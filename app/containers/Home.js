import { connect } from 'react-redux';
import { up, down } from '../actions';
import Counter from '../components/Counter';

const mapStateToProps = (state) => (
  {
    count: state.counter.count,
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

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default Home;
