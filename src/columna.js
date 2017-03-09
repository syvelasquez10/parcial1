import React, { Component } from 'react';
import Imagen from './imagen';

class Columna extends Component {

  render() {
    if(this.props.respuestas) {
      return(
        <div className="col-md-3">
          {this.props.imagenes.map((imagen, index) => {
              return <Imagen key={index} imagen={imagen} />
          })}
        </div>
      )
    }
    else {
      return(
        <div></div>
      )
    }
  }
}

export default Columna;
