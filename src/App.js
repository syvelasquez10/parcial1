import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Columna from './columna';

const ROOT_URL = "/flickr";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      busqueda: '',
      imagenes: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    axios.get(ROOT_URL+'/'+this.state.busqueda)
    .then(response => {
      console.log(response.data);
    })
  }

  obtenerFotos () {

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
        <div className="row">
          <div className="col-md-5">
            <input size="60" type="text" value={this.state.busqueda} onChange={this.handleInputChange} />
          </div>
        </div>

        <Columna imagenes={this.state.imagenes}/>
      </div>
    );
  }
}

export default App;
