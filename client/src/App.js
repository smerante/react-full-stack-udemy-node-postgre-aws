import './App.css';
import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {

  constructor() {
    super();
    this.state = {
      hello: null
    };
  }

  componentDidMount() {
    axios.get('/hello')
    .then(res => this.setState({hello: res.data}))
    .catch(err=>console.log('/hello error: ', err));
  }

  render() {
    return (
      <>
        {this.state.hello ? <div>{this.state.hello}</div> : null}
      </>
    )
  }
}

export default App;
