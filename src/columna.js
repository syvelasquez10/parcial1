import React, { Component } from 'react';
import axios from 'axios';
import FlipMove from 'react-flip-move';
import Imagen from './imagen';


class Columna extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imagenes: []
    }
  }

  render() {
    if(this.props.busqueda) {
      var color="";

      if(this.props.color) {
        color="%20"+this.props.color;
      }

      axios.get(this.props.url+'/'+this.props.busqueda+color)
      .then(response => {
        this.setState({
          imagenes: response.data.photos.photo.splice(0,4)
        });
      });

      return(
        <div className="col-md-2">
          {this.state.imagenes.map((imagen, index) =>{
            return ( <FlipMove key={index} delay={1000} duration={600}>
             <Imagen key={index} imagen={imagen} index={index} />
           </FlipMove>);
          })}
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}

export default Columna;
