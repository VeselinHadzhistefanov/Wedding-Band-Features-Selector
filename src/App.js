import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span style={{color:"lightblue"}}>Edit <code>src/App.js</code> and save to reload.</span>
          <br></br>
          This section is intended to represent the actual structure of the web page <br></br>
          and stands for it's contents.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <MyButton></MyButton>
      </header>
    </div>
  );
}

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

export default App;