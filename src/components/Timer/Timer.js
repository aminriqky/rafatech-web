import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.countDownId = null;
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: false
    };
  }

  componentDidMount() {
    this.countDownId = setInterval(this.timerInit, 1000);
  }

  componentWillUnmount() {
    if (this.countDownId) {
      clearInterval(this.countDownId);
    }
  }

  timerInit = () => {
    const { startDate } = this.props;
    console.log(startDate);
    const now = new Date().getTime();
    if (!startDate) {
      this.setState({ expired: true });
      return;
    }
    const countDownStartDate = new Date(startDate).getTime();
    const distance = countDownStartDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        Math.floor(distance / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor((distance / 1000 / 60) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    // For countdown is finished
    if (distance < 0) {
      clearInterval(this.countDownId);
      this.setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
      });
      return;
    }
    this.setState({ days, hours, minutes, seconds, expired: false });
  };

  render() {
    const { days, hours, minutes, seconds, expired } = this.state;
    if (expired) {
      return <div style={{fontSize: "20px", color: "rgb(126, 49, 49)", border: "1px solid rgb(126, 49, 49)", padding: "20px"}}>Acara Telah Berlangsung</div>;
    }
    return (
      <div style={{fontSize: "20px", display: "flex", fontSize: "20px", justifyContent: "center"}}>
        <div style={{padding: "10px", background: "#444", color: "#fff", fontSize: "30px", marginRight: "1%", width: "25%", display: "flex", justifyContent: "center", borderRadius: "50px"}}>
          {days}
          <span style={{textTransform: "uppercase", color: "#999", fontSize: "20px", display: "flex", alignItems: "center"}}>&nbsp;hari</span>
        </div>
        <div style={{padding: "10px", background: "#444", color: "#fff", fontSize: "30px", marginRight: "1%", width: "25%", display: "flex", justifyContent: "center", borderRadius: "50px"}}>
          {hours}
          <span style={{textTransform: "uppercase", color: "#999", fontSize: "20px", display: "flex", alignItems: "center"}}>&nbsp;jam</span>
        </div>
        <div style={{padding: "10px", background: "#444", color: "#fff", fontSize: "30px", marginRight: "1%", width: "25%", display: "flex", justifyContent: "center", borderRadius: "50px"}}>
          {minutes}
          <span style={{textTransform: "uppercase", color: "#999", fontSize: "20px", display: "flex", alignItems: "center"}}>&nbsp;menit</span>
        </div>
        <div style={{padding: "10px", background: "#444", color: "#fff", fontSize: "30px", marginRight: "1%", width: "25%", display: "flex", justifyContent: "center", borderRadius: "50px"}}>
          {seconds}
          <span style={{textTransform: "uppercase", color: "#999", fontSize: "20px", display: "flex", alignItems: "center"}}>&nbsp;detik</span>
        </div>
      </div>
    );
  }
}
export default Timer;