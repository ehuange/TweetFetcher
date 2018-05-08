import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
    }
    this.grabHandleInput = this.grabHandleInput.bind(this);
  }

  grabHandleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input 
        type="text" 
        name="handle" 
        value={this.state.handle}
        onChange={this.grabHandleInput}
        />
        <button> Submit </button>
      </div>
    )
  }
}