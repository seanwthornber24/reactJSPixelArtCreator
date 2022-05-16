import React from 'react';
import './App.css';
import { AlphaPicker, SketchPicker } from 'react-color';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColour: "#FF0000"
    }

    this.handleColourChange = this.handleColourChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // console.log(e.target.id);
    document.getElementById(e.target.id).style.backgroundColor = this.state.selectedColour;
  }

  handleColourChange(colour) {
    this.setState({
      selectedColour: colour.hex
    });
  }

  render() {
    return (
      <div id="top-level">
        <h1>Pixel art</h1>

        <div id="main-app-div">
          <Grid click={this.handleClick} drag={this.handleDrag}/>
          <div id="colour-wheel-div">
            <SketchPicker 
              color={this.state.selectedColour} 
              onChange={this.handleColourChange}
              />
          </div>
        </div>



      </div>
    )
  }
}

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let grid = [];
    for (let i = 1; i < 18; i++) {
      let row = [];
      for (let j = 1; j < 18; j++) {
        row.push(<div className="box" id={`r${i}c${j}`}></div>);
      }
      grid.push(<div className="row">{row}</div>);
    }

    let gridDiv = <div id="grid" onDragOver={this.props.click} onClick={this.props.click}> {grid} </div>
    return (
      <div>
        {gridDiv};
      </div>
    )
  }
}

export default App;
