import React, { Component } from 'react';
import './App.css';
import Busqueda from './busqueda';

const ROOT_URL = "http://localhost:9000/flickr";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imagenes: {}
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 noMargin">
            <h1 className="noMargin">Flickr Rainbow</h1>
          </div>
          <div className="col-md-6">
            <p>Search for something in on Flickr and we will get you a rainbow of it</p>
          </div>
          <div className="col-md-6">
            <a className="ref" href="https://syvelasquez10.github.io/WebDevUniandes-SergioVelasquez/proyecto1%20/">By Sergio Yodeb Velásquez Yepes</a>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <Busqueda url={ROOT_URL}/>
      </div>
    );
  }
}

export default App;
