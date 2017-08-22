import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function show(){
    function formatDate(date) {
        return date.toLocaleDateString();
    }

    function Avatar(props) {
        return (
            <img className="Avatar"
                src={props.user.avatarUrl}
                alt={props.user.name} />
        );
    }

    function UserInfo(props) {
        return (
            <div className="UserInfo">
                <Avatar user={props.user} />
                <div className="UserInfo-name">
                    {props.user.name}
                </div>
            </div>
        );
    }

    function Comment(props) {
        return (
            <div className="Comment">
                <UserInfo user={props.author} />
                <div className="Comment-text">
                    {props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(props.date)}

                </div>
            </div>
        );
    }

    const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
            name: 'Maison Chen',
            avatarUrl: 'http://placekitten.com/g/64/64'
        }
    };

    ReactDOM.render(
        <Comment 
            date={comment.date}
            text={comment.text}
            author={comment.author} />,
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

