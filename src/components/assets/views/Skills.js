import React from 'react';
import '../css/skillsStyle.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hexSize: 80,
      hexOrigin: {x: 100, y: 130}
    }
  }

  componentWillMount() {
    this.setState({
      canvasSize: { canvasWidth: 800, canvasHeight: 700 }
    })
  }

  componentDidMount() {
    const {canvasWidth, canvasHeight} = this.state.canvasSize;
    this.canvashex.width = canvasWidth;
    this.canvashex.height = canvasHeight;
    for (let i = 0; i < 5; i++) {
      this.drawHex(this.canvashex, {x: 355, y: 100});
      this.drawHex(this.canvashex, {x: 505, y: 100});
      this.drawHex(this.canvashex, {x: 655, y: 100});
      this.drawHex(this.canvashex, {x: 280, y: 235});
      this.drawHex(this.canvashex, {x: 430, y: 235});
      this.drawHex(this.canvashex, {x: 580, y: 235});
      this.drawHex(this.canvashex, {x: 355, y: 368});
      this.drawHex(this.canvashex, {x: 505, y: 368});
      this.drawHex(this.canvashex, {x: 655, y: 368});
    }
  }

  drawHex(canvasID, center) {
    for (let i = 0; i <= 5; i++) {
      let start = this.getHexCornerCord(center, i);
      let end = this.getHexCornerCord(center, i + 1);
      this.drawLine(canvasID, {x: start.x, y: start.y}, {x: end.x, y: end.y})
    }
  }

  getHexCornerCord(center, i) {
    let angle_deg = 60 * i - 30;
    let angle_rad = Math.PI / 180 * angle_deg;
    let x = center.x + this.state.hexSize * Math.cos(angle_rad);
    let y = center.y + this.state.hexSize * Math.sin(angle_rad);
    return this.Point(x, y);
  }

  Point(x, y) {
    return{x: x, y: y};
  }

  drawLine(canvasID, start, end) {
    const ctx = canvasID.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  }

  drawHexCordinates(canvasID, center, h) {
    const ctx = canvasID.getContext('2d');
    ctx.fillText(h.q, center.x-10, center.y);
    ctx.fillText(h.r, center.x+7, center.y);
  }

  render() {
    return (
      <div class="skills-container" id="skills">
        <div class="title">
          <span>Skills</span>
          <h2>My Expertise</h2>
        </div>
        <canvas ref={canvashex => this.canvashex = canvashex}></canvas>
      </div>
    )
  }
}