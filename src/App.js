import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Table from './components/Table'
import Queue from './components/Queue';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
          <Route path="/quote">
            
          </Route>
          <Route path="/queue">
            <Queue />
          </Route>
          <Route path = "/">
            <Table />
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
