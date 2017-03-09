import React, { Component } from 'react';
import axios from 'axios';
import Columna from './columna';

class Busqueda extends Component {

  constructor(props) {
    super(props);
    this.state = {
      busqueda: '',
      imagenes: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
    axios.get(this.props.url+'/'+event.target.value)
    .then(response => {
      console.log(response.data.photos.photo);
      this.setState({
        imagenes: response.data.photos.photo.splice(0,4)
      });
    })
  }

  cargarImagenes(imagenes) {

  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-md-5">
            <input size="60" type="text" name="busqueda" value={this.state.busqueda} onChange={this.handleInputChange} placeholder="Escribe algo para buscar" required />
          </div>
        </div>
        <br/>
        <div className="row">
          <Columna imagenes={this.state.imagenes}/>
          <div className="col-md-2">
            {this.state.imagenes.map((imagen, index) =>{
              var img="http://farm5.staticflickr.com/"+imagen.server+"/"+imagen.id+"_"+imagen.secret+".jpg";
              return <img className="rainbowImage" width="100px" height="100px" key={index} src={img}/>
            })}
          </div>
        </div>
      </div>



    );
  }
}

export default Busqueda;
