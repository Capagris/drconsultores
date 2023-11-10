import React, { Component } from "react";
import * as Asset from "./assets";
import * as Scroll from "react-scroll";
import Strings from "../functions/strings";
import { sectionsArray } from "../functions/sections";
import ScrollLock from "react-scrolllock";
var MobileDetect = require("mobile-detect");
var md = new MobileDetect(window.navigator.userAgent);
var smoothDuration = 600;
export class Menu extends Component {
  state = {
    secondaryView: true,
    secondaryFullView: true
  };
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentWillMount() {}
  componentDidMount() {
    var self = this;
    window.addEventListener("scroll", this.handleScroll.bind(this));
    window.addEventListener("resize", this.updateWindowDimensions);
    setTimeout(function() {
      self.handleScroll();
      self.setInitialPosition();
    }, 500);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.handleScroll();
    this.setInitialPosition();
  }
  setInitialPosition() {
    const menu = document.getElementById("menu");
    const hmenu = menu.clientHeight;
    const hwindow = window.innerHeight;
    const bottomPosition = hwindow - hmenu;
    menu.style.setProperty("top", bottomPosition + "px");
  }
  handleScroll() {
    var doc = document.documentElement;
    const menu = document.getElementById("menu");
    const hmenu = menu.clientHeight;
    const scrollTop =
      (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const hwindow = window.innerHeight;
    const menuInitialPosition = hwindow - hmenu;
    if (
      (hwindow - hmenu <= scrollTop && !this.state.secondaryView) ||
      this.props.forceMenu
    ) {
      var sfv = false;
      this.setState({
        secondaryView: true
      });
    } else if (hwindow - hmenu > scrollTop) {
      this.setState({
        secondaryView: false
      });
    }
    if (
      (hwindow <= scrollTop && !this.state.secondaryFullView) ||
      this.props.forceMenu
    ) {
      this.setState({
        secondaryFullView: true
      });
    } else if (hwindow > scrollTop) {
      this.setState({
        secondaryFullView: false
      });
    }
  }
  render() {
    var self = this;
    var x = 0;
    var cs = [...this.props.classes, "menu"];
    if (this.state.secondaryView) {
      cs.push("menu-secondary");
    }
    if (this.state.secondaryFullView) {
      cs.push("menu-secondary-full");
    }
    return (
      <div id="menu" className={cs.join(" ")}>
        <div className="menu-row">
          <div className="menu-cell">
            <div className="menu-cell-row menu-cell-row-menu">
              <div className="menu-td menu-burger" id="burger-track" />
              <div className="menu-td menu-title" />
              <div className="menu-td real-menu">
                {sectionsArray.map(function(opt) {
                  if (opt.excludeFromMain) {
                    return;
                  }
                  x++;
                  return (
                    <div className="real-menu-td">
                      <div>
                        <Scroll.Link
                          to={opt.slug}
                          smooth={true}
                          className={[opt.slug + "_spytd", "spytd"].join(" ")}
                          duration={smoothDuration}
                        >
                          {Strings[opt.titleKey]}
                        </Scroll.Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="menu-cell-row menu-cell-row-logo">
              {this.props.forceMenu ? (
                <a href="/">
                  <Asset.HorizontalLogo />
                </a>
              ) : (
                <Scroll.Link
                  alt="DR Consultores"
                  to={"home"}
                  smooth={true}
                  duration={smoothDuration}
                >
                  <Asset.HorizontalLogo />
                </Scroll.Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Menu.defaultProps = {
  classes: []
};
export class Burger extends Component {
  state = {
    top: 0,
    height: 0,
    showingmenu: false
  };
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentWillMount() {}
  componentDidMount() {
    var self = this;
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll.bind(this));
    window.addEventListener("resize", this.updateWindowDimensions);
    setTimeout(function() {
      self.handleScroll();
    }, 800);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.handleScroll();
  }
  handleScroll() {
    var bt = document.getElementById("burger-track");
    var coords = bt.getBoundingClientRect();
    this.setState({
      top: coords.y - coords.height / 4
    });
  }
  _toggleMenu() {
    var self = this;
    this.setState({
      showingmenu: !this.state.showingmenu
    });
    document.body.classList.toggle("showmenu");
  }
  render() {
    return (
      <div className="burger" style={{ top: this.state.top }}>
        {this.state.showingmenu ? <ScrollLock /> : null}
        <input
          type="checkbox"
          id="menu34"
          checked={this.state.showingmenu}
          onChange={() => this._toggleMenu()}
        />
        <label for="menu34">
          <div />
          <div />
        </label>
      </div>
    );
  }
}
export class BigMenu extends Component {
  state = {
    secondCol: null
  };
  constructor(props) {
    super(props);
    this._handleOptME = this._handleOptME.bind(this);
  }
  _hideMenu() {
    this.props.onHide();
  }
  _handleOptME(opt, letter, type) {
    var colbinder = document.getElementById("bigmenu-col-binder");
    if (type == "enter" && opt.subsections) {
      var slug = opt.slug;
      var tds = document.getElementsByClassName(slug + "_spytd");
      for (var i = 0; i < tds.length; i++) {
        tds[i].classList.add("active");
      }
      var ss = opt.subsections;
      var r = [];
      var x = 0;
      var r = ss.map(function(o) {
        x++;
        var t = o.title;
        if (t.indexOf(" ") > -1) {
          t = t.substr(0, t.indexOf(" "));
        }
        return (
          <div className="bm-td">
            <a href={o.href}>
              <div className="bm-td-index">{letter + x + "."}</div>
              <div className="bm-td-label">{t}</div>
            </a>
          </div>
        );
      });
      this.setState({
        secondCol: r
      });
    } else if (!opt.subsections) {
      var r = "";
      var tds = document.getElementsByClassName("spytd");
      for (var i = 0; i < tds.length; i++) {
        tds[i].classList.remove("active");
      }
      this.setState({
        secondCol: r
      });
    }
  }
  render() {
    var x = -1;
    var self = this;
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    return (
      <div className="bigmenu">
        <div className="bigmenu-container">
          <div className="bigmenu-logo">
            <Asset.FullLogo />
          </div>
          <div className="bigmenu-cols">
            <div className="bigmenu-col">
              {sectionsArray.map(function(opt) {
                if (opt.excludeFromBig) {
                  return;
                }
                x++;
                var lt = letters[x];
                return (
                  <div className="bm-td">
                    {self.props.forceMenu ? (
                      <a
                        href={"/#" + opt.slug}
                        onMouseEnter={() => self._handleOptME(opt, lt, "enter")}
                        onMouseLeave={() => self._handleOptME(opt, lt, "leave")}
                        className={[opt.slug + "_spytd", "spytd"].join(" ")}
                      >
                        <div className="bm-td-index">{lt + "."}</div>
                        <div className="bm-td-label">
                          {Strings[opt.titleKey]}
                        </div>
                      </a>
                    ) : (
                      <Scroll.Link
                        to={opt.slug}
                        smooth={true}
                        onMouseEnter={() => self._handleOptME(opt, lt, "enter")}
                        onMouseLeave={() => self._handleOptME(opt, lt, "leave")}
                        onClick={() => self._hideMenu()}
                        className={[opt.slug + "_spytd", "spytd"].join(" ")}
                        duration={smoothDuration}
                      >
                        <div className="bm-td-index">{lt + "."}</div>
                        <div className="bm-td-label">
                          {Strings[opt.titleKey]}
                        </div>
                      </Scroll.Link>
                    )}
                  </div>
                );
              })}
              <div className="bm-td">
                <a href="mailto:info@dr-consultores.com">
                  <div className="bm-td-index">E.</div>
                  <div className="bm-td-label">Trabaja en DR</div>
                </a>
              </div>
            </div>
            <div className="bigmenu-col" id="bigmenu-col-binder">
              {this.state.secondCol}
            </div>
          </div>
        </div>
        <div className="bigmenu-redes" />
      </div>
    );
  }
}
export default class TotalMenu extends Component {
  render() {
    return (
      <div>
        <img
          src={require("../img/monograma.svg")}
          className="responsive-logo"
        />
        <BigMenu
          onHide={() => this._burger._toggleMenu()}
          forceMenu={this.props.forceMenu}
        />
        <Menu
          ref={menu => (this._barmenu = menu)}
          forceMenu={this.props.forceMenu}
        />

        <Burger
          ref={burger => (this._burger = burger)}
          forceMenu={this.props.forceMenu}
        />
      </div>
    );
  }
}
