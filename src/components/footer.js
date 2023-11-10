import React, { Component } from "react";
import * as Form from "./form";
import * as EmailValidator from "email-validator";
import { http_fetch } from "../functions/http";
import { Element } from "react-scroll";
import Logo from "../img/monogramafooter.svg";
export class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <div className="footer-logo-big">
              <img src={Logo} />
            </div>
          </div>
          <div className="footer-text">
            <div className="footer-form-title">Oficinas Centrales</div>
            GOBERNADOR JOSE GUADALUPE COVARRUBIAS 78 - 101<br />
            SAN MIGUEL CHAPULTEPEC, 11850, MIGUEL HIDALGO, CDMX<br />
            <a href="mailto:info@dr-consultores.com">INFO@DR-CONSULTORES.COM</a>
            <br />
            <a href="tel:+525570902377">+52 (55) 7090 2377</a>
          </div>
          <div className="footer-text">
            <div className="footer-form-title">Oficinas Regionales</div>
            Puerta Bajio Torre 1, Blvd. Paseo de los Insurgentes 23<br />
            Piso 5<br />
            SAN JOSÉ DE LAS PILETAS, 37330, BAJÍO<br />
            <a href="mailto:+524773440035">+52 (477) 34 40 035</a>
          </div>
          <div className="footer-text">
            <div className="footer-form-title">Estamos aquí para servirte</div>
          </div>
          <FooterForm
            onNotification={(title, content) =>
              this.props.onNotification(title, content)
            }
          />
        </div>
        <Copyright />
      </footer>
    );
  }
}
Footer.defaultProps = {
  showMonograma: true
};
class FooterForm extends Component {
  state = {
    name: "",
    email: "",
    tel: "",
    terms: false,
    whatsapp: false,
    isvalid: false,
    emailisvalid: false
  };
  componentDidMount() {}
  _verifyForm() {
    var isvalid = false;
    var istelsetok = true;
    if (this.state.whatsapp && !this.state.tel) {
      istelsetok = false;
    }
    if (
      this.state.emailisvalid &&
      this.state.name &&
      this.state.terms &&
      istelsetok
    ) {
      isvalid = true;
    }
    this.setState({
      isvalid: isvalid
    });
  }
  _setForm(field, value) {
    var self = this;
    this.setState({
      [field]: value
    });
    if (field === "email") {
      var emailisvalid = EmailValidator.validate(value);
      this.setState({
        emailisvalid: emailisvalid
      });
    }
    setTimeout(function() {
      self._verifyForm();
    }, 100);
  }
  async _submit(form, inputs) {
    var savename = this.state.name;
    var obj = {
      email: this.state.email,
      name: this.state.name,
      phone: this.state.tel,
      whatsapp: this.state.whatsapp ? 1 : 0
    };
    var r = await http_fetch("sendContactForm", obj);
    if (r) {
      this._form._clearSubmit();
      this.props.onNotification(
        "",
        "¡Gracias " + savename + "! Recibimos tu correo, estaremos en contacto."
      );
    }
  }
  render() {
    return (
      <Element
        className="footer-form"
        name="footer-reserva"
        id="footer-reserva"
      >
        <div className="footer-form-form">
          <Form.Main
            ref={form => {
              this._form = form;
            }}
            isvalid={this.state.isvalid}
            onSubmit={(form, inputs) => {
              this._submit(form, inputs);
            }}
            submitTitle="Contactar"
          >
            <div className="inputs-container">
              <Form.Input
                label="Nombre"
                required
                onModified={value => this._setForm("name", value)}
              />
              <Form.Input
                label="Correo electrónico"
                type="email"
                required
                onModified={value => this._setForm("email", value)}
              />
              <Form.Input
                label="No. de celular"
                type="tel"
                onModified={value => this._setForm("tel", value)}
              />
            </div>
            <div className="checkbox-container">
              <Form.Checkbox
                onChange={value => this._setForm("terms", value)}
                label="Acepto <a href=&quot;#&quot; target=&quot;_blank&quot;>términos y condiciones</a>"
              />
            </div>
          </Form.Main>
        </div>
      </Element>
    );
  }
}
class Copyright extends Component {
  render() {
    return (
      <div className="footer-copyright">
        <div className="footer-copyright-tr">
          © 2018 Desarrollo Regional SA de CV | Todos los derechos reservados |{" "}
          <a href="mailto:info@dr-consultores.com">info@dr-consultores.com</a> |{" "}
          <a href="#" target="_blank">
            Términos y políticas
          </a>
        </div>
        <div className="footer-copyright-tr">
          Con buena vibra por{" "}
          <a href="https://lunapunto.com" target="_blank">
            Luna Punto
          </a>, 02-2018
        </div>
      </div>
    );
  }
}
