import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

function show() {
ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);
}

setTimeout(show, 1000);

class App extends Component {
    render () {
        return (
            <div> original screen </div>
        );
    }

}
export default App;
