import React, { Component } from 'react';
import './App.css';
import HiModule from './Hi';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "Saransh"
        };
    }

    componentDidMount(){
    }

  render() {
    return (
      <>
      <HiModule></HiModule>
      </>
    );
  }
}

export default App;
