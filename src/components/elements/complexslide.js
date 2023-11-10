import React, { Component } from "react";

export class ComplexSlide extends Component {
  state = {
    si: null,
    st: null,
    y: 0
  };
  componentDidMount() {
    this.setActive(1, true);
    this.autoplay();
  }
  autoplay(initial) {
    var y = initial ? initial : 1;
    var x = this.props.slides.length;
    var self = this;
    var si = setInterval(function() {
      y++;
      if (y > self.props.slides.length) {
        y = 1;
      }
      self.setActive(y);
    }, 7000);
    this.setState({
      si: si
    });
  }
  setActive(y, clear) {
    var self = this;
    clearTimeout(this.state.st);
    if (clear) {
      clearInterval(this.state.si);
      var st = setTimeout(function() {
        self.autoplay(y);
      }, 8000);
      this.setState({
        st: st
      });
    }
    var slides = document.getElementsByClassName("csb-slide");
    var bullets = document.getElementsByClassName("csb-index");
    for (var i = 0; i < slides.length; i++) {
      var s_ = slides[i];
      var b_ = bullets[i];
      var issameid = y == i + 1;
      if (!issameid) {
        s_.classList.remove("active");
        b_.classList.remove("active");
      } else {
        s_.classList.add("active");
        b_.classList.add("active");
      }
    }
  }
  render() {
    var self = this;
    var x = 0;
    var y = 0;
    return (
      <div className="complex-slide">
        <div className="complex-slide-slides">
          <div className="complex-slide-binder">
            {this.props.slides.map(function(opt) {
              y++;
              var y_ = y;
              return (
                <div
                  className="csb-slide"
                  id={"csb-slide-" + y_}
                  style={{ backgroundImage: "url(" + opt.img + ")" }}
                />
              );
            })}
          </div>
        </div>
        <div className="complex-slide-bullets">
          {this.props.slides.map(function(opt) {
            x++;
            var x_ = x;
            return (
              <div
                className="csb-index"
                id={"csb-index-" + x_}
                onMouseEnter={() => self.setActive(x_, true)}
              >
                <div className="csb-index-i">{x_}</div>
                <div className="csb-index-n">{opt.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
