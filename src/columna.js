import React, { Component } from 'react';
import axios from 'axios';

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
            var img="http://farm5.staticflickr.com/"+imagen.server+"/"+imagen.id+"_"+imagen.secret+".jpg";
            return (
              <img alt="normal" className="rainbowImage" width="100px" height="100px" key={index} src={img}/>
            );
          })}
        </div>
      );
    } else {
      if(this.props.index===this.props.colores.length-1){
        return (
          <div>
            <br/>
            <p>Write Something in the text input to get a rainbow of flickr images</p>
          </div>
        );
      } else {
        return <div></div>
      }
    }
  }
}

export default Columna;
