import React, { Component } from 'react';
import './App.css';
import HiModule from './Hi';
import CanvasBG from './CanvasBG';

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
      <CanvasBG></CanvasBG>
      <HiModule></HiModule>
      </>
    );
  }
}

export default App;
