import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Table from './components/Table'

function App() {
  return (
    <div className="App">
      <Header />
      <div className = "table">
        <Table />
      </div>
      
    </div>
  );
}

export default App;
