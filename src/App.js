import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import react from 'react'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
data:new Date()
    }
  }
  componentWillMount(){
    var timer =  setInterval(() => {
      this.setState({date:new Date()})
    }, 1000);
    return function cleanup() {
        clearInterval(timer)
    }

  }
  render(){
    const {date}=this.state;
    console.log(date);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Hi , Welcome !
        {date &&<div>

          <p> Time : {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString()}</p>
        </div>
            }
      </header>
    </div>
  );
}
}

export default App;
