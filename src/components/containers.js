import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Strings from "../functions/strings";
import * as Scroll from "react-scroll";
import { isInMainMenu, getSectionTitle } from "../functions/sections";
import Menu from "./menu";
import Waypoint from "react-waypoint";

var MobileDetect = require("mobile-detect");
var md = new MobileDetect(window.navigator.userAgent);
export class Wrapper extends Component {
  render() {
    return <div id="wrapper">{this.props.children}</div>;
  }
}
export class Container extends Component {
  render() {
    var classes = [...this.props.classes, "container"];
    return (
      <div className={classes.join(" ")}>
        <Helmet>
          <title>
            {(this.props.contentTitle ? this.props.contentTitle + " | " : "") +
              Strings.pageTitle}
          </title>
        </Helmet>
        <div id="loader" />
        <Menu forceMenu={this.props.forceMenu} />
        {this.props.children}
      </div>
    );
  }
}
Container.defaultProps = {
  contentTitle: "",
  forceMenu: false,
  classes: []
};
export class Section extends Component {
  state = {
    width: 0,
    height: 0,
    active: false
  };
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    var self = this;
    window.addEventListener("scroll", this.handleScroll.bind(this));
    if (!md.mobile()) {
      window.addEventListener("resize", this.updateWindowDimensions);
    }
    Scroll.Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin");
    });
    Scroll.Events.scrollEvent.register("end", function(to, element) {
      console.log("end");
    });
    setTimeout(function() {
      self.updateWindowDimensions();
      self.handleScroll();
    }, 800);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  handleScroll() {
    var c = document.getElementById(this.props.id);
    var dt = window.scrollY;
    var h = c.clientHeight;
    var m = document.getElementById("menu");
    var ot = c.offsetTop - m.clientHeight;
    if (dt >= ot && ot + h > dt) {
      if (!this.state.active) {
        this.setState({
          active: true
        });
        var spytds = document.getElementsByClassName("spytd");
        var spytdsx = spytds.length;
        for (var i = 0; i < spytdsx; i++) {
          var std = spytds[i];
          std.classList.remove("active");
        }
        var correctSpyTd = document.getElementsByClassName(
          this.props.id + "_spytd"
        );
        if (correctSpyTd.length > 0) {
          for (var y = 0; y < correctSpyTd.length; y++) {
            var std = correctSpyTd[y];
            std.classList.add("active");
          }
        }
        /* Check if is in Main menu */
        if (this.props.id !== "home") {
          var title = getSectionTitle(this.props.id) || this.props.customTitle;
          var m = document.getElementsByClassName("menu-title")[0];
          m.textContent = title;
        }
      }
    } else {
      if (this.state.active) {
        this.setState({
          active: false
        });
        if (dt <= h && !this.props.forceMenu) {
          var m = document.getElementsByClassName("menu-title")[0];
          m.textContent = "";
        }
      }
    }
  }
  render() {
    var cs = ["section"];
    if (this.state.active) {
      cs.push("active");
    }
    return (
      <Scroll.Element
        {...this.props}
        id={this.props.id}
        name={this.props.id}
        className={cs.join(" ")}
        ref={section => (this._section = section)}
        style={
          this.props.full
            ? { width: this.state.width, minHeight: this.state.height }
            : {}
        }
      >
        {this.props.children}
      </Scroll.Element>
    );
  }
}
export class CenterSection extends Component {
  render() {
    return (
      <div className="center-section">
        <div className="center-section-cols">
          {this.props.cta ? this.props.cta : null}
          <div className="center-section-col first-col">{this.props.col1}</div>
          <div className="center-section-col second-col">{this.props.col2}</div>
        </div>
      </div>
    );
  }
}
