import React, { Component } from "react";
import LazyLoad from "react-lazy-load";

export class Video extends Component {
  state = {
    width: 0,
    height: 0,
    ratio: 0.5,
    called: false
  };
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
    this.updateWindowDimensions();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      ratio: window.innerHeight / window.innerWidth
    });
  }
  handleStart() {
    if (!this.state.called) {
      if (typeof this.props.onReady == "function") {
        this.props.onReady();
      }
    }
    this.setState({
      called: true
    });
  }
  render() {
    var cs = [...this.props.classes, "video-container"];
    var videoProportions = {};
    console.log(this.state.ratio);
    console.log(this.props.ratio);
    if (this.state.ratio < this.props.ratio) {
      videoProportions = { width: "100%" };
    } else {
      videoProportions = { height: "100%" };
    }

    return (
      <div className={cs.join(" ")}>
        <div
          className="video-binder"
          style={{
            backgroundImage: "url(" + this.props.placeholder + ")"
          }}
        >
          {this.props.lazyload ? (
            <LazyLoad height={this.state.height}>
              <video
                onLoadStart={() => this.handleStart()}
                style={videoProportions}
                autoPlay="autoplay"
                muted={true}
                loop={true}
              >
                <source src={this.props.source} />
              </video>
            </LazyLoad>
          ) : (
            <video
              style={videoProportions}
              autoPlay="autoplay"
              muted={true}
              loop={true}
            >
              <source src={this.props.source} />
            </video>
          )}
        </div>
      </div>
    );
  }
}
Video.defaultProps = {
  lazyload: true,
  ratio: 0.5625,
  classes: []
};
