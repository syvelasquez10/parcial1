import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 noMargin">
            <h1>Flickr Rainbow</h1>
          </div>
          <div className="col-md-6">
            <p>Search for something in on Flickr and we will get you a rainbow of it</p>
          </div>
          <div className="col-md-6">
            <a className="ref" href="https://syvelasquez10.github.io/WebDevUniandes-SergioVelasquez/proyecto1%20/">By Sergio Yodeb Velásquez Yepes</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
