import React, { Component } from "react";

export class RecentProjects extends Component {
  render() {
    return (
      <div className="recent-projects">
        <div className="title">Proyectos recientes</div>
        <div className="projects">
          {this.props.projects.map(function(opt) {
            return <div className="project">{opt}</div>;
          })}
        </div>
        <div className="ctas">
          <a href="/">
            <div className="cta">
              <span>Regresar al inicio</span>
            </div>
          </a>
          <a href="/#expertise">
            <div className="cta">
              <span>Ver Nuestro Expertise</span>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
