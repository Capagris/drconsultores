import React, { Component } from "react";
import * as Containers from "../components/containers";
import * as Elements from "../components/elements";
import { Footer } from "../components/footer";
import { expertise, avexp, getExpertise } from "../functions/expertise";
export class ExpertisePage extends Component {
  state = {
    slug: "",
    title: "",
    expertise: false
  };
  componentWillMount() {
    const name = this.props.match.params.name;
    if (avexp.indexOf(name) > -1) {
      this.setState({
        slug: name,
        title: getExpertise(name).title,
        expertise: getExpertise(name)
      });
    } else {
      window.location.href = "/";
    }
  }
  componentDidMount() {}
  render() {
    return (
      <Containers.Container
        classes={["expertise"]}
        forceMenu={true}
        contentTitle={this.state.title}
      >
        <Containers.Section
          id="expertisebinder"
          forceMenu={true}
          customTitle={this.state.title}
        >
          {this.state.expertise ? (
            <div>
              {this.state.expertise.subsections ? (
                <Containers.Section
                  id="expertisebinder-complex"
                  full
                  forceMenu={true}
                >
                  <Elements.ComplexSlide
                    slides={this.state.expertise.subsections}
                  />
                </Containers.Section>
              ) : null}
            </div>
          ) : null}
          <Containers.Section id="expertisebinder" full forceMenu={true}>
            <Elements.ServicesList opt={this.state.expertise} />
          </Containers.Section>

          <Containers.Section id="expertisebinder" forceMenu={true}>
            <Elements.RecentProjects projects={this.state.expertise.projects} />
          </Containers.Section>
        </Containers.Section>
        <Containers.Section id="contact" forceMenu={true}>
          <Footer />
        </Containers.Section>
      </Containers.Container>
    );
  }
}
