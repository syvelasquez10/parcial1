import React, { Component } from 'react';
import Columna from './columna';

class Busqueda extends Component {

  constructor(props) {
    super(props);
    this.state = {
      busqueda: '',
      colores:['','Blue','Purple','Orange','Yellow','Green'],
      valores:[ true, true, true, true, true, true]
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
  }

  handleClick(event) {
    event.preventDefault();
    var valor = !(this.state.valores[event.target.name]);
    this.state.valores.splice(event.target.name, 1, valor);
    this.forceUpdate();
  }

  render() {
      return(
        <div>
          <div className="row">
            <div className="col-md-4">
              <input size="35" type="text" name="busqueda" value={this.state.busqueda} onChange={this.handleInputChange} placeholder="Write something to look for it"/>
            </div>
            <div className="col-md-8">
                  {this.state.colores.map((color, index) =>{
                    if(this.state.busqueda) {
                      if(index===this.state.colores.length-1) {
                        return <h4>Click one of the buttons to toogle the column of images of that color</h4>
                      }
                      if(color===''){
                        color="Sincolor";
                      }
                      return <button key={index} name={index} onClick={this.handleClick} className="btn btn-default rainbowImage" style={{color: color}}>{color}</button>
                    }
                  })}
            </div>
          </div>
          <br/>
          <h1 className="noMargin">Your rainbow</h1>
          <div className="row">
            {this.state.colores.map((color, index) =>{
              if(this.state.valores[index]){
                return <Columna key={index} index={index} busqueda={this.state.busqueda} color={color} url={this.props.url} colores={this.state.colores}/>
              }
            })}
          </div>
        </div>
      );
  }
}

export default Busqueda;
