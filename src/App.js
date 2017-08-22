import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),// means function () { this.tick(); }
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

  render() {
    return (
      <div>
        <h1> Hello, World! </h1>
        <h2> It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function show() {
ReactDOM.render(
    <Clock />,
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
