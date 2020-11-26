//import 'rc-progress/assets/index.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Line, Circle } from 'rc-progress';


class LinearProgressBar extends Component {

  constructor(props) {
    super(props);
    console.log("Progress Bar ", JSON.stringify(props))
    console.log("points - ", props.state.pointbudget)
    console.log("rewards - ", props.state.rewardbudget)

    this.state = {
      rewardsPercent: parseInt(props.state.pointbudget),
      pointsPercent: parseInt(props.state.rewardbudget),
      color: '#3FC7FA',
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];
    const value = parseInt(Math.random() * 100, 10);
    // this.setState({
    //   percent: value,
    //   color: colorMap[parseInt(Math.random() * 3, 10)],
    // });
  }

  render() {
    const { rewardsPercent,pointsPercent, color } = this.state;
    const containerStyle = {
      width: '250px',
    };
    const circleContainerStyle = {
      width: '250px',
      height: '250px',
      display: 'inline-block',
    };
    return (
      <div>
        <h3>Line Progress {rewardsPercent}%</h3>
        <div style={containerStyle}>
          <Line percent={rewardsPercent} strokeWidth="4" strokeColor={color} />
          <Line
            percent={[rewardsPercent / 2, rewardsPercent / 2]}
            strokeWidth="4"
            strokeColor={[color, '#CCC']}
          />
        </div>
        <h3>Circle Progress {pointsPercent}%</h3>
        <div style={circleContainerStyle}>
          <Circle percent={pointsPercent} strokeWidth="6" strokeLinecap="round" strokeColor={color} />
        </div>
        <p>
          <button type="button" onClick={this.changeState}>
            Change State
          </button>
        </p>
      </div>
    );
  }
}

export default LinearProgressBar;
