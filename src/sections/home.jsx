import React, { Component } from "react";
import * as Containers from "../components/containers";
import * as Asset from "../components/assets";
import * as Elements from "../components/elements";
import * as Cookies from "../functions/cookies";
import ScrollLock from "react-scrolllock";
export class HomeSection extends Component {
  state = {
    displayVideo: false
  };
  componentDidMount() {
    var videoCookie = Cookies.getCookie("avv");
    if (!videoCookie) {
      /* Is first time */
      this.setState({
        displayVideo: true
      });
    }
  }
  setVT() {}
  hideVideo() {
    this.setState({
      displayVideo: false
    });
    Cookies.setCookie("avv", true, 30);
  }
  render() {
    return (
      <Containers.Section id="home" full>
        {this.state.displayVideo ? (
          <div id="home-video">
            <ScrollLock />
            <div id="home-video-lightbox">
              <div id="home-title">
                <div>Bienvenido a</div>
                <img src={require("../img/monogramafooter.svg")} />
              </div>
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
              <div id="policy">
                Utilizamos cookies y otras tecnologías de tu navegador para
                ofrecerte la mejor experiencia de usuario. Ninguno de tus datos
                (excluyendo el formulario de contacto) son guardados en nuestras
                bases de datos.
              </div>
              <div id="home-video-ctas">
                <div
                  className="home-video-cta"
                  onClick={() => this.hideVideo()}
                >
                  <span>Aceptar y continuar al sitio</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div id="home-logo">
          <Asset.HorizontalLogo />
        </div>
        <Elements.Video
          ratio={0.51428}
          source={require("../img/bgvideo_hr2.mp4")}
          placeholder={require("../img/bgvideo_hr2_img.jpg")}
        />
      </Containers.Section>
    );
  }
}
