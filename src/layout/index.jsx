import React, { Component } from "react";
import * as Containers from "../components/containers";
import * as Elements from "../components/elements";
import { HomeSection } from "../sections/home";
import { AboutSection } from "../sections/about";
import { ExpertiseSection } from "../sections/expertise";
import { SectorsSection } from "../sections/sectors";
import { Footer } from "../components/footer";
export class HomePage extends Component {
  render() {
    return (
      <Containers.Container classes={[]} contentTitle="">
        <HomeSection />
        <AboutSection />
        <ExpertiseSection />
        <SectorsSection />
        <Containers.Section id="contact">
          <Footer />
        </Containers.Section>
      </Containers.Container>
    );
  }
}
