import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1 className="title"> Tweet Fetcher </h1>
        <h2 className="description"> Simply enter a public twitter handle to get their 25 most recent tweets (real-time)</h2>
        <Home />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));