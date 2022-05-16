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
    console.log(e.target.id);
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
          <Grid click={this.handleClick}/>
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
    return (
      <div id="grid">
        <div className="row">
          <div className="box" id="r1c1" onClick={this.props.click}></div>
          <div className="box" id="r1c2" onClick={this.props.click}></div>
          <div className="box" id="r1c3" onClick={this.props.click}></div>
          <div className="box" id="r1c4" onClick={this.props.click}></div>
          <div className="box" id="r1c5" onClick={this.props.click}></div>
          <div className="box" id="r1c6" onClick={this.props.click}></div>
          <div className="box" id="r1c7" onClick={this.props.click}></div>
          <div className="box" id="r1c8" onClick={this.props.click}></div>
          <div className="box" id="r1c9" onClick={this.props.click}></div>
          <div className="box" id="r1c10" onClick={this.props.click}></div>
          <div className="box" id="r1c11" onClick={this.props.click}></div>
          <div className="box" id="r1c12" onClick={this.props.click}></div>
          <div className="box" id="r1c13" onClick={this.props.click}></div>
          <div className="box" id="r1c14" onClick={this.props.click}></div>
          <div className="box" id="r1c15" onClick={this.props.click}></div>
          <div className="box" id="r1c16" onClick={this.props.click}></div>
          <div className="box" id="r1c17" onClick={this.props.click}></div>
        </div>

        <div className="row">
          <div className="box" id="r2c1" onClick={this.props.click}></div>
          <div className="box" id="r2c2" onClick={this.props.click}></div>
          <div className="box" id="r2c3" onClick={this.props.click}></div>
          <div className="box" id="r2c4" onClick={this.props.click}></div>
          <div className="box" id="r2c5" onClick={this.props.click}></div>
          <div className="box" id="r2c6" onClick={this.props.click}></div>
          <div className="box" id="r2c7" onClick={this.props.click}></div>
          <div className="box" id="r2c8" onClick={this.props.click}></div>
          <div className="box" id="r2c9" onClick={this.props.click}></div>
          <div className="box" id="r2c10" onClick={this.props.click}></div>
          <div className="box" id="r2c11" onClick={this.props.click}></div>
          <div className="box" id="r2c12" onClick={this.props.click}></div>
          <div className="box" id="r2c13" onClick={this.props.click}></div>
          <div className="box" id="r2c14" onClick={this.props.click}></div>
          <div className="box" id="r2c15" onClick={this.props.click}></div>
          <div className="box" id="r2c16" onClick={this.props.click}></div>
          <div className="box" id="r2c17" onClick={this.props.click}></div>
        </div>

        <div className="row">
          <div className="box" id="r3c1" onClick={this.props.click}></div>
          <div className="box" id="r3c2" onClick={this.props.click}></div>
          <div className="box" id="r3c3" onClick={this.props.click}></div>
          <div className="box" id="r3c4" onClick={this.props.click}></div>
          <div className="box" id="r3c5" onClick={this.props.click}></div>
          <div className="box" id="r3c6" onClick={this.props.click}></div>
          <div className="box" id="r3c7" onClick={this.props.click}></div>
          <div className="box" id="r3c8" onClick={this.props.click}></div>
          <div className="box" id="r3c9" onClick={this.props.click}></div>
          <div className="box" id="r3c10" onClick={this.props.click}></div>
          <div className="box" id="r3c11" onClick={this.props.click}></div>
          <div className="box" id="r3c12" onClick={this.props.click}></div>
          <div className="box" id="r3c13" onClick={this.props.click}></div>
          <div className="box" id="r3c14" onClick={this.props.click}></div>
          <div className="box" id="r3c15" onClick={this.props.click}></div>
          <div className="box" id="r3c16" onClick={this.props.click}></div>
          <div className="box" id="r3c17" onClick={this.props.click}></div>
        </div>

        <div className="row">
          <div className="box" id="r4c1" onClick={this.props.click}></div>
          <div className="box" id="r4c2" onClick={this.props.click}></div>
          <div className="box" id="r4c3" onClick={this.props.click}></div>
          <div className="box" id="r4c4" onClick={this.props.click}></div>
          <div className="box" id="r4c5" onClick={this.props.click}></div>
          <div className="box" id="r4c6" onClick={this.props.click}></div>
          <div className="box" id="r4c7" onClick={this.props.click}></div>
          <div className="box" id="r4c8" onClick={this.props.click}></div>
          <div className="box" id="r4c9" onClick={this.props.click}></div>
          <div className="box" id="r4c10" onClick={this.props.click}></div>
          <div className="box" id="r4c11" onClick={this.props.click}></div>
          <div className="box" id="r4c12" onClick={this.props.click}></div>
          <div className="box" id="r4c13" onClick={this.props.click}></div>
          <div className="box" id="r4c14" onClick={this.props.click}></div>
          <div className="box" id="r4c15" onClick={this.props.click}></div>
          <div className="box" id="r4c16" onClick={this.props.click}></div>
          <div className="box" id="r4c17" onClick={this.props.click}></div>
        </div>

        <div className="row">
          <div className="box" id="r5c1" onClick={this.props.click}></div>
          <div className="box" id="r5c2" onClick={this.props.click}></div>
          <div className="box" id="r5c3" onClick={this.props.click}></div>
          <div className="box" id="r5c4" onClick={this.props.click}></div>
          <div className="box" id="r5c5" onClick={this.props.click}></div>
          <div className="box" id="r5c6" onClick={this.props.click}></div>
          <div className="box" id="r5c7" onClick={this.props.click}></div>
          <div className="box" id="r5c8" onClick={this.props.click}></div>
          <div className="box" id="r5c9" onClick={this.props.click}></div>
          <div className="box" id="r5c10" onClick={this.props.click}></div>
          <div className="box" id="r5c11" onClick={this.props.click}></div>
          <div className="box" id="r5c12" onClick={this.props.click}></div>
          <div className="box" id="r5c13" onClick={this.props.click}></div>
          <div className="box" id="r5c14" onClick={this.props.click}></div>
          <div className="box" id="r5c15" onClick={this.props.click}></div>
          <div className="box" id="r5c16" onClick={this.props.click}></div>
          <div className="box" id="r5c17" onClick={this.props.click}></div>
        </div>

        <div className="row">
          <div className="box" id="r6c1" onClick={this.props.click}></div>
          <div className="box" id="r6c2" onClick={this.props.click}></div>
          <div className="box" id="r6c3" onClick={this.props.click}></div>
          <div className="box" id="r6c4" onClick={this.props.click}></div>
          <div className="box" id="r6c5" onClick={this.props.click}></div>
          <div className="box" id="r6c6" onClick={this.props.click}></div>
          <div className="box" id="r6c7" onClick={this.props.click}></div>
          <div className="box" id="r6c8" onClick={this.props.click}></div>
          <div className="box" id="r6c9" onClick={this.props.click}></div>
          <div className="box" id="r6c10" onClick={this.props.click}></div>
          <div className="box" id="r6c11" onClick={this.props.click}></div>
          <div className="box" id="r6c12" onClick={this.props.click}></div>
          <div className="box" id="r6c13" onClick={this.props.click}></div>
          <div className="box" id="r6c14" onClick={this.props.click}></div>
          <div className="box" id="r6c15" onClick={this.props.click}></div>
          <div className="box" id="r6c16" onClick={this.props.click}></div>
          <div className="box" id="r6c17" onClick={this.props.click}></div>
        </div>

        <div className="row">
          <div className="box" id="r7c1" onClick={this.props.click}></div>
          <div className="box" id="r7c2" onClick={this.props.click}></div>
          <div className="box" id="r7c3" onClick={this.props.click}></div>
          <div className="box" id="r7c4" onClick={this.props.click}></div>
          <div className="box" id="r7c5" onClick={this.props.click}></div>
          <div className="box" id="r7c6" onClick={this.props.click}></div>
          <div className="box" id="r7c7" onClick={this.props.click}></div>
          <div className="box" id="r7c8" onClick={this.props.click}></div>
          <div className="box" id="r7c9" onClick={this.props.click}></div>
          <div className="box" id="r7c10" onClick={this.props.click}></div>
          <div className="box" id="r7c11" onClick={this.props.click}></div>
          <div className="box" id="r7c12" onClick={this.props.click}></div>
          <div className="box" id="r7c13" onClick={this.props.click}></div>
          <div className="box" id="r7c14" onClick={this.props.click}></div>
          <div className="box" id="r7c15" onClick={this.props.click}></div>
          <div className="box" id="r7c16" onClick={this.props.click}></div>
          <div className="box" id="r7c17" onClick={this.props.click}></div>
        </div>

        <div className="row">
          <div className="box" id="r8c1" onClick={this.props.click}></div>
          <div className="box" id="r8c2" onClick={this.props.click}></div>
          <div className="box" id="r8c3" onClick={this.props.click}></div>
          <div className="box" id="r8c4" onClick={this.props.click}></div>
          <div className="box" id="r8c5" onClick={this.props.click}></div>
          <div className="box" id="r8c6" onClick={this.props.click}></div>
          <div className="box" id="r8c7" onClick={this.props.click}></div>
          <div className="box" id="r8c8" onClick={this.props.click}></div>
          <div className="box" id="r8c9" onClick={this.props.click}></div>
          <div className="box" id="r8c10" onClick={this.props.click}></div>
          <div className="box" id="r8c11" onClick={this.props.click}></div>
          <div className="box" id="r8c12" onClick={this.props.click}></div>
          <div className="box" id="r8c13" onClick={this.props.click}></div>
          <div className="box" id="r8c14" onClick={this.props.click}></div>
          <div className="box" id="r8c15" onClick={this.props.click}></div>
          <div className="box" id="r8c16" onClick={this.props.click}></div>
          <div className="box" id="r8c17" onClick={this.props.click}></div>
        </div>

        <div className="row">
          <div className="box" id="r9c1" onClick={this.props.click}></div>
          <div className="box" id="r9c2" onClick={this.props.click}></div>
          <div className="box" id="r9c3" onClick={this.props.click}></div>
          <div className="box" id="r9c4" onClick={this.props.click}></div>
          <div className="box" id="r9c5" onClick={this.props.click}></div>
          <div className="box" id="r9c6" onClick={this.props.click}></div>
          <div className="box" id="r9c7" onClick={this.props.click}></div>
          <div className="box" id="r9c8" onClick={this.props.click}></div>
          <div className="box" id="r9c9" onClick={this.props.click}></div>
          <div className="box" id="r9c10" onClick={this.props.click}></div>
          <div className="box" id="r9c11" onClick={this.props.click}></div>
          <div className="box" id="r9c12" onClick={this.props.click}></div>
          <div className="box" id="r9c13" onClick={this.props.click}></div>
          <div className="box" id="r9c14" onClick={this.props.click}></div>
          <div className="box" id="r9c15" onClick={this.props.click}></div>
          <div className="box" id="r9c16" onClick={this.props.click}></div>
          <div className="box" id="r9c17" onClick={this.props.click}></div>
        </div>

        <div className="row">
          <div className="box" id="r10c1" onClick={this.props.click}></div>
          <div className="box" id="r10c2" onClick={this.props.click}></div>
          <div className="box" id="r10c3" onClick={this.props.click}></div>
          <div className="box" id="r10c4" onClick={this.props.click}></div>
          <div className="box" id="r10c5" onClick={this.props.click}></div>
          <div className="box" id="r10c6" onClick={this.props.click}></div>
          <div className="box" id="r10c7" onClick={this.props.click}></div>
          <div className="box" id="r10c8" onClick={this.props.click}></div>
          <div className="box" id="r10c9" onClick={this.props.click}></div>
          <div className="box" id="r10c10" onClick={this.props.click}></div>
          <div className="box" id="r10c11" onClick={this.props.click}></div>
          <div className="box" id="r10c12" onClick={this.props.click}></div>
          <div className="box" id="r10c13" onClick={this.props.click}></div>
          <div className="box" id="r10c14" onClick={this.props.click}></div>
          <div className="box" id="r10c15" onClick={this.props.click}></div>
          <div className="box" id="r10c16" onClick={this.props.click}></div>
          <div className="box" id="r10c17" onClick={this.props.click}></div>
        </div>

        <div className="row">
          <div className="box" id="r11c1" onClick={this.props.click}></div>
          <div className="box" id="r11c2" onClick={this.props.click}></div>
          <div className="box" id="r11c3" onClick={this.props.click}></div>
          <div className="box" id="r11c4" onClick={this.props.click}></div>
          <div className="box" id="r11c5" onClick={this.props.click}></div>
          <div className="box" id="r11c6" onClick={this.props.click}></div>
          <div className="box" id="r11c7" onClick={this.props.click}></div>
          <div className="box" id="r11c8" onClick={this.props.click}></div>
          <div className="box" id="r11c9" onClick={this.props.click}></div>
          <div className="box" id="r11c10" onClick={this.props.click}></div>
          <div className="box" id="r11c11" onClick={this.props.click}></div>
          <div className="box" id="r11c12" onClick={this.props.click}></div>
          <div className="box" id="r11c13" onClick={this.props.click}></div>
          <div className="box" id="r11c14" onClick={this.props.click}></div>
          <div className="box" id="r11c15" onClick={this.props.click}></div>
          <div className="box" id="r11c16" onClick={this.props.click}></div>
          <div className="box" id="r11c17" onClick={this.props.click}></div>
        </div>

        <div className="row">
          <div className="box" id="r12c1" onClick={this.props.click}></div>
          <div className="box" id="r12c2" onClick={this.props.click}></div>
          <div className="box" id="r12c3" onClick={this.props.click}></div>
          <div className="box" id="r12c4" onClick={this.props.click}></div>
          <div className="box" id="r12c5" onClick={this.props.click}></div>
          <div className="box" id="r12c6" onClick={this.props.click}></div>
          <div className="box" id="r12c7" onClick={this.props.click}></div>
          <div className="box" id="r12c8" onClick={this.props.click}></div>
          <div className="box" id="r12c9" onClick={this.props.click}></div>
          <div className="box" id="r12c10" onClick={this.props.click}></div>
          <div className="box" id="r12c11" onClick={this.props.click}></div>
          <div className="box" id="r12c12" onClick={this.props.click}></div>
          <div className="box" id="r12c13" onClick={this.props.click}></div>
          <div className="box" id="r12c14" onClick={this.props.click}></div>
          <div className="box" id="r12c15" onClick={this.props.click}></div>
          <div className="box" id="r12c16" onClick={this.props.click}></div>
          <div className="box" id="r12c17" onClick={this.props.click}></div>
        </div>

        <div className="row">
          <div className="box" id="r13c1" onClick={this.props.click}></div>
          <div className="box" id="r13c2" onClick={this.props.click}></div>
          <div className="box" id="r13c3" onClick={this.props.click}></div>
          <div className="box" id="r13c4" onClick={this.props.click}></div>
          <div className="box" id="r13c5" onClick={this.props.click}></div>
          <div className="box" id="r13c6" onClick={this.props.click}></div>
          <div className="box" id="r13c7" onClick={this.props.click}></div>
          <div className="box" id="r13c8" onClick={this.props.click}></div>
          <div className="box" id="r13c9" onClick={this.props.click}></div>
          <div className="box" id="r13c10" onClick={this.props.click}></div>
          <div className="box" id="r13c11" onClick={this.props.click}></div>
          <div className="box" id="r13c12" onClick={this.props.click}></div>
          <div className="box" id="r13c13" onClick={this.props.click}></div>
          <div className="box" id="r13c14" onClick={this.props.click}></div>
          <div className="box" id="r13c15" onClick={this.props.click}></div>
          <div className="box" id="r13c16" onClick={this.props.click}></div>
          <div className="box" id="r13c17" onClick={this.props.click}></div>
        </div>

        <div className="row">
          <div className="box" id="r14c1" onClick={this.props.click}></div>
          <div className="box" id="r14c2" onClick={this.props.click}></div>
          <div className="box" id="r14c3" onClick={this.props.click}></div>
          <div className="box" id="r14c4" onClick={this.props.click}></div>
          <div className="box" id="r14c5" onClick={this.props.click}></div>
          <div className="box" id="r14c6" onClick={this.props.click}></div>
          <div className="box" id="r14c7" onClick={this.props.click}></div>
          <div className="box" id="r14c8" onClick={this.props.click}></div>
          <div className="box" id="r14c9" onClick={this.props.click}></div>
          <div className="box" id="r14c10" onClick={this.props.click}></div>
          <div className="box" id="r14c11" onClick={this.props.click}></div>
          <div className="box" id="r14c12" onClick={this.props.click}></div>
          <div className="box" id="r14c13" onClick={this.props.click}></div>
          <div className="box" id="r14c14" onClick={this.props.click}></div>
          <div className="box" id="r14c15" onClick={this.props.click}></div>
          <div className="box" id="r14c16" onClick={this.props.click}></div>
          <div className="box" id="r14c17" onClick={this.props.click}></div>
        </div>

        <div className="row">
          <div className="box" id="r15c1" onClick={this.props.click}></div>
          <div className="box" id="r15c2" onClick={this.props.click}></div>
          <div className="box" id="r15c3" onClick={this.props.click}></div>
          <div className="box" id="r15c4" onClick={this.props.click}></div>
          <div className="box" id="r15c5" onClick={this.props.click}></div>
          <div className="box" id="r15c6" onClick={this.props.click}></div>
          <div className="box" id="r15c7" onClick={this.props.click}></div>
          <div className="box" id="r15c8" onClick={this.props.click}></div>
          <div className="box" id="r15c9" onClick={this.props.click}></div>
          <div className="box" id="r15c10" onClick={this.props.click}></div>
          <div className="box" id="r15c11" onClick={this.props.click}></div>
          <div className="box" id="r15c12" onClick={this.props.click}></div>
          <div className="box" id="r15c13" onClick={this.props.click}></div>
          <div className="box" id="r15c14" onClick={this.props.click}></div>
          <div className="box" id="r15c15" onClick={this.props.click}></div>
          <div className="box" id="r15c16" onClick={this.props.click}></div>
          <div className="box" id="r15c17" onClick={this.props.click}></div>
        </div>

        <div className="row">
          <div className="box" id="r16c1" onClick={this.props.click}></div>
          <div className="box" id="r16c2" onClick={this.props.click}></div>
          <div className="box" id="r16c3" onClick={this.props.click}></div>
          <div className="box" id="r16c4" onClick={this.props.click}></div>
          <div className="box" id="r16c5" onClick={this.props.click}></div>
          <div className="box" id="r16c6" onClick={this.props.click}></div>
          <div className="box" id="r16c7" onClick={this.props.click}></div>
          <div className="box" id="r16c8" onClick={this.props.click}></div>
          <div className="box" id="r16c9" onClick={this.props.click}></div>
          <div className="box" id="r16c10" onClick={this.props.click}></div>
          <div className="box" id="r16c11" onClick={this.props.click}></div>
          <div className="box" id="r16c12" onClick={this.props.click}></div>
          <div className="box" id="r16c13" onClick={this.props.click}></div>
          <div className="box" id="r16c14" onClick={this.props.click}></div>
          <div className="box" id="r16c15" onClick={this.props.click}></div>
          <div className="box" id="r16c16" onClick={this.props.click}></div>
          <div className="box" id="r16c17" onClick={this.props.click}></div>
        </div>

        <div className="row">
          <div className="box" id="r17c1" onClick={this.props.click}></div>
          <div className="box" id="r17c2" onClick={this.props.click}></div>
          <div className="box" id="r17c3" onClick={this.props.click}></div>
          <div className="box" id="r17c4" onClick={this.props.click}></div>
          <div className="box" id="r17c5" onClick={this.props.click}></div>
          <div className="box" id="r17c6" onClick={this.props.click}></div>
          <div className="box" id="r17c7" onClick={this.props.click}></div>
          <div className="box" id="r17c8" onClick={this.props.click}></div>
          <div className="box" id="r17c9" onClick={this.props.click}></div>
          <div className="box" id="r17c10" onClick={this.props.click}></div>
          <div className="box" id="r17c11" onClick={this.props.click}></div>
          <div className="box" id="r17c12" onClick={this.props.click}></div>
          <div className="box" id="r17c13" onClick={this.props.click}></div>
          <div className="box" id="r17c14" onClick={this.props.click}></div>
          <div className="box" id="r17c15" onClick={this.props.click}></div>
          <div className="box" id="r17c16" onClick={this.props.click}></div>
          <div className="box" id="r17c17" onClick={this.props.click}></div>
        </div>
      </div>
    )
  }
}

export default App;
