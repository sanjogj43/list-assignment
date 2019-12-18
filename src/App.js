import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Decorators/Validation';

class App extends Component {

  state = {
    property1:0
  }

  onChangeHandler = (event) => {
    //console.log(event.target.value.length);
    this.setState({ property1:event.target.value.length});
  }

  render() {
    let characters = []
    return (
      <div className="App">
        <input onChange={(event)=>this.onChangeHandler(event)}/>
        <p>{this.state.property1}</p>
        <Validation textLength={this.state.property1}/>
        {characters}
      </div>
    );
  }
}

export default App;
