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
import Client from './components/Client';
import AddClient from './components/AddClient';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
            <Route path="/client">
              <Client />
            </Route>
          <Route path="/addClient">
              <AddClient />
          </Route>
          <Route path="/queue">
            
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
