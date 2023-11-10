import React, { Component } from "react";
import * as Elements from "../elements";

export class StaticSlide extends Component {
  handleSelect(i) {
    var ss = document.getElementsByClassName("static-slide");
    for (var y = 0; y < ss.length; y++) {
      ss[y].classList.remove("active");
    }
    var s = document.getElementById("static-slide-" + i);
    s.classList.add("active");
  }
  render() {
    var x = 0;
    return (
      <div className="static-slide">
        <StaticSlideBar
          onSelect={i => this.handleSelect(i)}
          slides={this.props.slides}
        />
        <div className="static-slide-info">
          <div className="static-slide-info-title">{this.props.title}</div>
          <div className="static-slide-info-description">
            {this.props.description}
          </div>
        </div>
        <div className="static-slide-slides">
          {this.props.slides.map(function(opt) {
            x++;
            var y = x;
            return (
              <div id={"static-slide-" + y} className="static-slide">
                <div className="slide-media">
                  {opt.isvideo ? (
                    <Elements.Video source={opt.source} lazyload={false} />
                  ) : (
                    <div
                      className="slide-media-img"
                      style={{ backgroundImage: "url(" + opt.source + ")" }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
StaticSlide.defaultProps = {
  title: "",
  description: "",
  slides: []
};
class StaticSlideBar extends Component {
  state = {
    index: 0,
    si: null,
    st: null
  };
  componentDidMount() {
    var self = this;
    setTimeout(function() {
      self.selectSlide(0);
      self.autoplay();
    }, 500);
  }
  autoplay() {
    var self = this;
    clearInterval(this.state.si);
    var si = setInterval(function() {
      self.selectSlide(self.state.index + 1, true);
    }, 7000);
    this.setState({
      si: si
    });
  }
  selectSlide(index, ignoreautoplay) {
    var self = this;
    clearTimeout(this.state.st);
    if (!ignoreautoplay) {
      clearInterval(this.state.si);
    }
    if (index < 0) {
      index = this.props.slides.length - 1;
    }
    if (index > this.props.slides.length - 1) {
      index = 0;
    }
    this.setState({
      index: index
    });
    this.props.onSelect(index + 1);
    if (!ignoreautoplay) {
      var st = setTimeout(function() {
        self.autoplay();
      }, 8000);
      this.setState({
        st: st
      });
    }
  }
  render() {
    var selected = this.props.slides[this.state.index];
    return (
      <div className="static-slide-bar">
        <div className="arrows">
          <div
            className="arrow"
            onClick={() => this.selectSlide(this.state.index - 1)}
          >
            {true ? <span> {"<-"} </span> : null}
          </div>
          <div
            className="arrow"
            onClick={() => this.selectSlide(this.state.index + 1)}
          >
            {true ? <span> {"->"} </span> : null}
          </div>
        </div>
        <div className="ssb-bar">
          <a href={selected.href}>
            <div className="ssb-bar-index">{this.state.index + 1}</div>
            <div className="ssb-bar-title">{selected.title}</div>
          </a>
        </div>
      </div>
    );
  }
}
