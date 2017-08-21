import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function show(){
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }

    const element = <Welcome name="Maison" />;
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}
setInterval(show, 1000);

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p> hello world</p>
      </div>
    );
  }
}

export default App;

