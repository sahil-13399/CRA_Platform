import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Table from './components/Table'
import Queue from './components/Queue';
import Client from './components/Client';
import AddClient from './components/AddClient';
import Quote from './components/Quote';
import Login from './components/Login';

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
              <Queue />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path = "/login">
            <Login />
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
