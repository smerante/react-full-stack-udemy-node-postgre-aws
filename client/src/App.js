import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

class App extends Component {

  constructor() {
    super();
    this.state = {
      hello: null
    };
  }

  componentDidMount() {
    axiosInstance.get('/posts')
    .then(res => console.log(res.data))
    .catch(err=>console.log('/jsonplaceholder error: ', err));
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
