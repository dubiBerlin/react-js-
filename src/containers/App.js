import { connect } from 'react-redux';
import AppComponent from '../components/App';

/********************************************
 * Container holds the props of a component *
 ********************************************/

// takes the universal state, which is definded in the reducers/index.js combineReducers method,
// out of the global app enviornmant and puts it to the props of this component
const mapStateToProps = state => {
  console.log('containers/App.js state: ' + JSON.stringify(state));
  return {
    // we givbe this variable JUST this information, cause the state can hold more data from
    // different components
    info: state.info
  };
};

// connecting received props with the component
const App = connect(mapStateToProps)(AppComponent);

export default App;
