import React, { Component } from 'react';
import './App.css';

const Message = props => <div>{props.msg}</div>;

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Message msg="A Generic Hello World Text" />
        <Message msg="Creating Reusable React Components" />
      </div>
    );
  }
}

export default App;
