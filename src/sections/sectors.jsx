import React, { Component } from "react";
import * as Containers from "../components/containers";
import * as Asset from "../components/assets";
import * as Elements from "../components/elements";
import Strings from "../functions/strings";
export class SectorsSection extends Component {
  render() {
    return (
      <Containers.Section id="sectors">
        <div className="bigtitle">Sectores</div>
        <Containers.Section id="sectors_subcontainer" full>
          <Elements.SimpleSlide
            slides={[
              {
                title: Strings.sectors.infraestructura,
                media: (
                  <Elements.SimpleSlideMedia
                    isvideo={true}
                    placeholder={require("../img/sectores_infraestructura.jpg")}
                    source={require("../img/infraestructura.mp4")}
                  />
                )
              },
              {
                title: Strings.sectors.movilidad,
                media: (
                  <Elements.SimpleSlideMedia
                    isvideo={true}
                    placeholder={require("../img/sectores_movilidad.jpg")}
                    source={require("../img/movilidad.mp4")}
                  />
                )
              },
              {
                title: Strings.sectors.energia,
                media: (
                  <Elements.SimpleSlideMedia
                    isvideo={true}
                    placeholder={require("../img/sectores_energia.jpg")}
                    source={require("../img/bgvideo.mp4")}
                  />
                )
              },
              {
                title: Strings.sectors.agua,
                media: (
                  <Elements.SimpleSlideMedia
                    isvideo={true}
                    placeholder={require("../img/sectores_agua.jpg")}
                    source={require("../img/agua.mp4")}
                  />
                )
              }
            ]}
          />
        </Containers.Section>
      </Containers.Section>
    );
  }
}
