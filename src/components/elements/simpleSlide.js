import React, { Component } from "react";
import * as Elements from "../elements";
export class SimpleSlide extends Component {
  state = {
    width: 0,
    height: 0
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
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  _showSlide(i) {
    var ss = document.getElementsByClassName("slide");
    console.log("SS", ss);
    for (var y = 0; y < ss.length; y++) {
      var s_ = ss[y];
      s_.classList.remove("active");
    }
    var s = document.getElementById("slide-" + i);
    if (s) {
      s.classList.add("active");
    }
  }
  render() {
    var x = 0;
    const cs = [...this.props.classes, "simple-slide"];
    return (
      <div className={cs.join(" ")}>
        <SimpleSlideBar
          onChoose={i => this._showSlide(i)}
          slides={this.props.slides}
        />
        <div className="slides-container">
          {this.props.slides.map(function(opt) {
            x++;
            var y = x;
            return (
              <div id={"slide-" + y} className="slide">
                {opt.media}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
SimpleSlide.defaultProps = {
  classes: [],
  slides: []
};
export class SimpleSlideMedia extends Component {
  render() {
    return (
      <div className="simple-slide-slide">
        {this.props.children}
        <div className="media-container">
          {this.props.isvideo ? (
            <Elements.Video
              lazyload={false}
              placeholder={this.props.placeholder}
              source={this.props.source}
            />
          ) : (
            <div
              className="media-content-img"
              style={{ backgroundImage: "url(" + this.props.source + ")" }}
            />
          )}
        </div>
      </div>
    );
  }
}
SimpleSlideMedia.defaultProps = {
  isvideo: false,
  src: ""
};
class SimpleSlideBar extends Component {
  state = {
    si: null,
    st: null
  };
  constructor(props) {
    super(props);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
  }
  componentDidMount() {
    var self = this;
    setTimeout(function() {
      self._handleMouseEnter(1);
      self.autoplay();
    }, 500);
  }
  autoplay(initial) {
    var self = this;
    clearInterval(this.state.si);
    var x = this.props.slides.length;
    if (!initial) {
      var y = 1;
    } else {
      var y = initial;
    }
    var si = setInterval(function() {
      y++;
      if (y > self.props.slides.length) {
        y = 1;
      }
      self._handleMouseEnter(y, true);
    }, 7000);
    this.setState({
      si: si
    });
  }
  _handleMouseEnter(index, ignoreautoplay) {
    var self = this;
    if (!ignoreautoplay) {
      clearInterval(this.state.si);
    }
    clearTimeout(this.state.st);
    var ns = document.getElementsByClassName("ssb-number");
    for (var i = 0; i < ns.length; i++) {
      var n_ = ns[i];
      n_.classList.remove("active");
    }
    var n = document.getElementById("ssb-number-" + index);
    n.classList.add("active");
    this.props.onChoose(index);
    if (!ignoreautoplay) {
      var st = setTimeout(function() {
        self.autoplay(index);
      }, 8000);
      this.setState({
        st: st
      });
    }
  }
  render() {
    var x = 0;
    var self = this;
    return (
      <div className="simple-slide-bar">
        <div className="simple-slide-bar-numbers">
          {this.props.slides.map(function(opt) {
            x++;
            var y = x;
            return (
              <div
                id={"ssb-number-" + x}
                className="ssb-number"
                data-title={opt.title.title}
                onMouseLeave={() => self.autoplay()}
                onMouseEnter={() => self._handleMouseEnter(y)}
                onClick={() => self._handleMouseEnter(y)}
              >
                <div>{x}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
