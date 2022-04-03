import React from "react";
import kick1 from "../src/Samples/Kick1.mp3";
import kick2 from "../src/Samples/Kick2.mp3";
// import kick3 from "../src/Samples/Kick3.mp3";
import kickshort from "../src/Samples/KickShort.mp3";
import Metalic from "../src/Samples/Metalic.mp3";
import Snap1 from "../src/Samples/Snap1.mp3";
import Snare1 from "../src/Samples/Snare1.mp3";
import Snare2 from "../src/Samples/Snare2.mp3";
import Snare3 from "../src/Samples/Snare3.mp3";
// import Snare4 from "../src/Samples/Snare4.mp3";
// import Tom2 from "../src/Samples/Tom2.mp3";
import Tomdown from "../src/Samples/Tomdown.mp3";
// import Tomdown2 from "../src/Samples/Tomdown2.mp3";
import Wooden from "../src/Samples/Wooden.mp3";
import Chord1 from "../src/Samples/Chord1.mp3";
import FX1 from "../src/Samples/FX1.mp3";
import FX2 from "../src/Samples/FX2.mp3";
import FX3 from "../src/Samples/FX3.mp3";
import HHclosed from "../src/Samples/HHclosed.mp3";
import HHlong from "../src/Samples/HHlong.mp3";
import HHsmall from "../src/Samples/HHSmall.mp3";

class Sampler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: "Welcome",
      currentPad: "",
      label: "sound-one",
      power: true,
      volume: 100,
      bank: "bankA",
    };

    this.handler = this.handler.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handlePower = this.handlePower.bind(this);
    this.handleBank = this.handleBank.bind(this);
  }

  handler = (newDisplayText) => {
    this.setState({ displayText: newDisplayText });
  };

  handleVolume() {
    let volumeSlider = document.getElementById("vol-control");
    this.setState({
      volume: volumeSlider.value,
    });
  }

  handlePower() {
    if (this.state.power === true) {
      this.setState({
        power: false,
      });
    } else if (this.state.power === false) {
      this.setState({
        power: true,
      });
    }
  }

  handleBank() {
    if (this.state.bank === "bankA") {
      this.setState({
        bank: "bankB",
      });
    } else if (this.state.bank === "bankB") {
      this.setState({
        bank: "bankA",
      });
    }
  }

  render() {
    // let audioClips = document.getElementsByClassName('clip');
    // volumeSlider.addEventListener('change',function(){
    //   audioClips.volume = this.value / 100;
    // });

    return (
      <div id="drum-machine">
        <div id="central-block">
          <div id="pads-area">
            <DrumPad
              index={0}
              action={this.handler}
              volume={this.state.volume}
              power={this.state.power}
              bank={this.state.bank}
              key={"padq"}
            />
            <DrumPad
              index={1}
              action={this.handler}
              volume={this.state.volume}
              power={this.state.power}
              bank={this.state.bank}
              key={"padw"}
            />
            <DrumPad
              index={2}
              action={this.handler}
              volume={this.state.volume}
              power={this.state.power}
              bank={this.state.bank}
              key={"pade"}
            />
            <DrumPad
              index={3}
              action={this.handler}
              volume={this.state.volume}
              power={this.state.power}
              bank={this.state.bank}
              key={"pada"}
            />
            <DrumPad
              index={4}
              action={this.handler}
              volume={this.state.volume}
              power={this.state.power}
              bank={this.state.bank}
              key={"pads"}
            />
            <DrumPad
              index={5}
              action={this.handler}
              volume={this.state.volume}
              power={this.state.power}
              bank={this.state.bank}
              key={"padd"}
            />
            <DrumPad
              index={6}
              action={this.handler}
              volume={this.state.volume}
              power={this.state.power}
              bank={this.state.bank}
              key={"padz"}
            />
            <DrumPad
              index={7}
              action={this.handler}
              volume={this.state.volume}
              power={this.state.power}
              bank={this.state.bank}
              key={"padx"}
            />
            <DrumPad
              index={8}
              action={this.handler}
              volume={this.state.volume}
              power={this.state.power}
              bank={this.state.bank}
              key={"padc"}
            />
          </div>

          <div id="controls-area">
            <div id="power-switch">
              Power
              <br></br>
              <label className="switch">
                <input
                  type="checkbox"
                  defaultChecked="true"
                  onClick={this.handlePower}
                ></input>
                <span className="slider round"></span>
              </label>
            </div>

            <div id="display">{this.state.displayText}</div>

            <div id="volume-slider">
              Volume<br></br>
              <input
                id="vol-control"
                type="range"
                min="0"
                max="100"
                step="1"
                defaultValue="100"
                onChange={this.handleVolume}
              ></input>
              <p>{this.state.volume}</p>
            </div>

            <div id="bank-select-switch">
              Bank selector
              <br></br>A
              <label className="switch">
                <input type="checkbox"></input>
                <span className="slider round" onClick={this.handleBank}></span>
              </label>
              B<br></br>
              <p>{this.state.bank}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sampler;

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sound: "",
      letter: "",
      active: "",
    };
    this.props.bank === "bankA" ? (this.bank = bankA) : (this.bank = bankB);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick() {
    if (this.props.power) {
      this.props.action(this.bank[this.props.index].textForDisplay);
      document.getElementById(this.bank[this.props.index].letter).volume =
        this.props.volume / 100;
      document.getElementById(this.bank[this.props.index].letter).play();
      let currentButton = document.getElementById(
        this.bank[this.props.index].divId
      );
      currentButton.style.boxShadow = "1px 1px 1px 0px rgba(0,0,0,0.76)";
      currentButton.style.backgroundColor = "chartreuse";
      setTimeout(function () {
        currentButton.style.boxShadow = "";
        currentButton.style.backgroundColor = "";
      }, 300);
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.keyCode === this.bank[this.props.index].keyCode) {
      this.handleClick();
    }
  }

  render() {
    this.props.bank === "bankA" ? (this.bank = bankA) : (this.bank = bankB);
    return (
      <div
        className="drum-pad"
        id={this.bank[this.props.index].divId}
        onClick={this.handleClick}
      >
        <audio
          className="clip"
          src={this.bank[this.props.index].audio}
          type="audio/mpeg"
          id={this.bank[this.props.index].letter}
        ></audio>
        <p>{this.bank[this.props.index].letter}</p>
      </div>
    );
  }
}

const bankA = [
  {
    audio: kick1,
    letter: "Q",
    keyCode: 81,
    textForDisplay: "Kick 1",
    divId: "sound-one",
  },
  {
    audio: Snare1,
    letter: "W",
    keyCode: 87,
    textForDisplay: "Snare 1",
    divId: "sound-two",
  },
  {
    audio: HHsmall,
    letter: "E",
    keyCode: 69,
    textForDisplay: "Hi-Hat Small",
    divId: "sound-three",
  },
  {
    audio: Snap1,
    letter: "A",
    keyCode: 65,
    textForDisplay: "Finger Snap",
    divId: "sound-four",
  },
  {
    audio: FX3,
    letter: "S",
    keyCode: 83,
    textForDisplay: "FX3",
    divId: "sound-five",
  },
  {
    audio: HHlong,
    letter: "D",
    keyCode: 68,
    textForDisplay: "Hi-Hat Long",
    divId: "sound-six",
  },
  {
    audio: Wooden,
    letter: "Z",
    keyCode: 90,
    textForDisplay: "Woodblock",
    divId: "sound-seven",
  },
  {
    audio: FX2,
    letter: "X",
    keyCode: 88,
    textForDisplay: "FX2",
    divId: "sound-eight",
  },
  {
    audio: HHclosed,
    letter: "C",
    keyCode: 67,
    textForDisplay: "Hi-Hat Closed",
    divId: "sound-nine",
  },
];

const bankB = [
  {
    audio: kick2,
    letter: "Q",
    keyCode: 81,
    textForDisplay: "Kick 2",
    divId: "sound-ten",
  },
  {
    audio: Snare2,
    letter: "W",
    keyCode: 87,
    textForDisplay: "Snare 2",
    divId: "sound-eleven",
  },
  {
    audio: Metalic,
    letter: "E",
    keyCode: 69,
    textForDisplay: "Metalic",
    divId: "sound-twelve",
  },
  {
    audio: FX1,
    letter: "A",
    keyCode: 65,
    textForDisplay: "FX1",
    divId: "sound-thirteen",
  },
  {
    audio: FX3,
    letter: "S",
    keyCode: 83,
    textForDisplay: "FX3",
    divId: "sound-fourteen",
  },
  {
    audio: Tomdown,
    letter: "D",
    keyCode: 68,
    textForDisplay: "Tom-down",
    divId: "sound-fifteen",
  },
  {
    audio: Chord1,
    letter: "Z",
    keyCode: 90,
    textForDisplay: "Chord",
    divId: "sound-sixteen",
  },
  {
    audio: Snare3,
    letter: "X",
    keyCode: 88,
    textForDisplay: "Snare 3",
    divId: "sound-seventeen",
  },
  {
    audio: kickshort,
    letter: "C",
    keyCode: 67,
    textForDisplay: "Kick-Short",
    divId: "sound-eighteen",
  },
];
