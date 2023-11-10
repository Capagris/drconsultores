import React, { Component } from "react";
import * as Containers from "../components/containers";
import * as Asset from "../components/assets";
import * as Elements from "../components/elements";
import Strings from "../functions/strings";
export class ExpertiseSection extends Component {
  render() {
    return (
      <Containers.Section id="expertise" full>
        <Elements.StaticSlide
          title={Strings.expertise.title}
          description={Strings.formatString(
            Strings.expertise.description,
            <span className="highlight">{Strings.expertise.highlight}</span>
          )}
          slides={[
            {
              href: "/expertise/economia",
              title: Strings.expertise.sections.economia,
              source: require("../img/economia.jpg")
            },
            {
              href: "/expertise/ingenieria",
              title: Strings.expertise.sections.ingenieria,
              source: require("../img/ingenieria.jpg")
            },
            {
              href: "/expertise/finanzas",
              title: Strings.expertise.sections.finanzas,
              source: require("../img/finanzas.jpg")
            },
            {
              href: "/expertise/transparencia",
              title: Strings.expertise.sections.transparencia,
              source: require("../img/transparencia_2.jpg")
            },
            {
              href: "/expertise/data",
              title: Strings.expertise.sections.data,
              source: require("../img/data.jpg")
            }
          ]}
        />
      </Containers.Section>
    );
  }
}
