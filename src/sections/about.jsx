import React, { Component } from "react";
import * as Containers from "../components/containers";
import * as Asset from "../components/assets";
import Strings from "../functions/strings";
import * as Scroll from "react-scroll";
import HighWayImage from "../img/highway2.jpg";
import ScrollLock from "react-scrolllock";
export class AboutSection extends Component {
  state = {
    displayVideo: false
  };
  render() {
    const AboutCol1 = (
      <div
        className="col-img"
        style={{ backgroundImage: "url(" + HighWayImage + ")" }}
      />
    );
    const AboutCol2 = (
      <div className="col-info">
        <div className="col-info-title">{Strings.aboutContent.title}</div>
        <div className="col-info-description">
          {Strings.formatString(
            Strings.aboutContent.description,
            <span className="highlight">
              {Strings.aboutContent.descriptionLink1}
            </span>
          )}
        </div>
      </div>
    );
    const AboutCta = (
      <a
        href="javascript:void(0)"
        onClick={() => this.setState({ displayVideo: true })}
      >
        <div className="col-cta">
          <span>Ver nuestro video presentación</span>
        </div>
      </a>
    );
    return (
      <Containers.Section id="about" full>
        {this.state.displayVideo ? (
          <div id="home-video">
            <ScrollLock />
            <div id="home-video-lightbox">
              <div id="home-video-binder">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/3Glr8DVak2c?rel=0&amp;showinfo=0"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                />
              </div>
              <div id="home-video-ctas">
                <div
                  className="home-video-cta"
                  onClick={() => this.setState({ displayVideo: false })}
                >
                  <span>Esconder</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="menu-placeholder" />
        <Containers.CenterSection
          cta={AboutCta}
          col1={AboutCol1}
          col2={AboutCol2}
        />
      </Containers.Section>
    );
  }
}
