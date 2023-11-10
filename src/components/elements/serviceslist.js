import React, { Component } from "react";

export class ServicesList extends Component {
  render() {
    var x = 0;
    return (
      <div className="service-list">
        <div className="service-list-col service-list-col-1">
          <div className="list-title">Nuestros servicios</div>
          <div className="the-list">
            {this.props.opt.services.map(function(opt) {
              x++;
              return (
                <div className="list">
                  <div className="i">{x + "."}</div>
                  <div className="l">{opt}</div>
                </div>
              );
            })}
          </div>
          <img src={this.props.opt.main1} className="service-img-1" />
        </div>
        <div className="service-list-col service-list-col-2">
          <div
            className="service-img-2"
            style={{ backgroundImage: "url(" + this.props.opt.main2 + ")" }}
          />
          {this.props.opt.slug == "data" ? (
            <div className="helena">
              <img src={require("../../img/helena.svg")} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
