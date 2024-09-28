import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Hyoin's React App</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
        <a
          className="App-link"
          href="https://github.com/leeeshub/4_1_ajax_react"
          target="_blank"
          rel="noopener noreferrer"
        >
          My github repo
        </a>
        


        <p className="paragraph1">
          This is a modified version of the default Create React App page.
        </p>
        <button type="button" className="btn1">Version log</button>

      </header>
    </div>
  );
}

export default App;
