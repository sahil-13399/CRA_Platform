import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Table from './components/Table'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
          <Route path="/quote">
            
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
