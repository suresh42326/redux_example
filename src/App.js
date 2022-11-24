import logo from './logo.svg';
import './App.css';
import Counter from '../src/Counter';
import { connect } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

//export default App;
export default connect(state => ({ }))(App)
