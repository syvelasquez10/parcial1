import React, { Component } from 'react';
import Columna from './columna';

class Busqueda extends Component {

  constructor(props) {
    super(props);
    this.state = {
      busqueda: '',
      colores:['','Blue','Purple','Orange','Yellow','Green']
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
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
            {this.state.colores.map((color, index) =>{
              return <Columna key={index} busqueda={this.state.busqueda} color={color} url={this.props.url}/>
            })}
          </div>
        </div>
      );
  }
}

export default Busqueda;
