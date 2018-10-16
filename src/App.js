import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      duration: {
          minutes: '01',
          seconds: '00'
      },
      focusDuration: {
        minutes: '01',
        seconds: '00'
      },
      breakDuration: {
        minutes: '05',
        seconds: '00'
      },
      longBreakDuration: {
        minutes: '15',
        seconds: '00'
      },
      intervalCount: 0,
      setInterval: false
    }

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer(DurationT = this.state.focusDuration) {
    //var focusDurationT = this.state.focusDuration;
console.log(DurationT,'teste')
    this.interval = setInterval(() => {

      /*
  
        this.setState({
          setInterval: true,
          intervalCount: (this.state.intervalCount + 1),
          duration: {
            minutes: '01',
            seconds: '00'
          },
          focusDuration: {
            minutes: 25,
            seconds: '00'
          },
          breakDuration: {
            minutes: 5,
            seconds: '00'
          },
          longBreakDuration: {
            minutes: 15,
            seconds: '00'
          }
        });
    }
  */
      
      if (parseInt(DurationT.minutes) === 0 && parseInt(DurationT.seconds) === 0) {
        this.stopTimer()
      }

      if (parseInt(DurationT.seconds) === 0) {
        DurationT.minutes = ("00" + (parseInt(DurationT.minutes) - 1)).slice(-2);
        DurationT.seconds = '60';
      }

      DurationT.seconds = ("00" + (DurationT.seconds - 1)).slice(-2)
      this.setState({ duration: DurationT });
    }, 1000);

  }

  stopTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.setState({
      duration: {
        minutes: '01',
        seconds: '00'
      },
      focusDuration: {
        minutes: 25,
        seconds: '00'
      },
      breakDuration: {
        minutes: 5,
        seconds: '00'
      },
      longBreakDuration: {
        minutes: 15,
        seconds: '00'
      }
    });
  }

  render() {

    var minutes = this.state.duration.minutes;
    var seconds = this.state.duration.seconds;
    var descriptionCountDown = this.state.setInterval ? "Break on work!" : "Focused on work!";

    return (
      <div className="App">
        <div className="App-header">
          <div id="header">
            <img
              width="92px"
              alt="pomodoro-tomat-icon"
              src="https://cdn4.iconfinder.com/data/icons/lifestyle-set-2/100/62e7c85d5ee356f4a1e17fd0ca344590-512.png" />
            <h1 className="display-4 text-danger">
              Pomodoro
            </h1>
            <small className="text-muted">
              The Pomodoro Technique is a time management method that can be used for any task
            </small>
          </div>
          <div id="body">
            <p id="timer">
              {minutes}:{seconds}
            </p>
            <p className="mb-5 text-muted">
              {descriptionCountDown}
            </p>
          </div>
          <div id="menu-buttons">
            <button
              className="btn btn-outline-success mr-2"
              onClick={this.startTimer}>
                Start
            </button>
            <button
              className="btn btn-outline-info ml-2 mr-2"
              onClick={this.stopTimer}>
                Stop
            </button>
            <button
              className="btn btn-outline-danger ml-2"
              onClick={this.resetTimer}>
                Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
