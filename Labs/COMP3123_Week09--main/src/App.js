import logo from './logo.svg';
import './App.css';
import Info from './Info'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>
        <Info studentId='101231430' name='Vinayaka Polimera' />
        <h5>George Brown College, Toronto</h5>
      </header>
    </div>
  );
}

export default App;