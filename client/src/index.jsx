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
        <Home />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));