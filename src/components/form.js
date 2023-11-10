import React, { Component } from "react";
import { generateRandomString } from "../functions/general";
import InputMask from "react-input-mask";
import renderHTML from "react-render-html";
import * as MD from "react-icons/lib/md";
export class Main extends Component {
  state = {
    submitting: false
  };
  playsound() {
    this._notification.play();
  }
  _clearSubmit() {
    this.setState({
      submitting: false
    });
    var inputs = this._form.getElementsByTagName("input");
    var ix = inputs.length;
    var e = 0;
    for (var i = 0; i < ix; i++) {
      var input = inputs[i];
      input.value = "";
    }
  }
  _displayError(msg) {}
  _validate() {
    var inputs = this._form.getElementsByTagName("input");
    var ix = inputs.length;
    var e = 0;
    for (var i = 0; i < ix; i++) {
      var input = inputs[i];
      if (input.getAttribute("data-required") && !input.value) {
        input.className += " error";
        e++;
      } else {
        input.classList.remove("error");
      }
    }
    if (e) {
      this._clearSubmit();
    } else {
      this.props.onSubmit(this._form, inputs);
    }
  }
  _submit(e) {
    e.preventDefault();
    if (this.props.isvalid) {
      this.setState({
        submitting: true
      });
      this._validate();
    }
  }
  render() {
    return (
      <div className="form-container">
        <form
          onSubmit={e => this._submit(e)}
          ref={form => {
            this._form = form;
          }}
        >
          {this.props.children}
          <Submit
            submitting={this.state.submitting}
            title={this.props.submitTitle}
            disabled={!this.props.isvalid}
          />
        </form>
      </div>
    );
  }
}
Main.defaultProps = {
  submitTitle: "Enviar",
  isvalid: false,
  onSubmit: null,
  submitting: false
};
export class Checkbox extends Component {
  state = {
    ref: generateRandomString(),
    ischecked: this.props.checked
  };
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange() {
    var ischecked = this._checkbox.checked;
    this.setState({
      ischecked: ischecked
    });
    this.props.onChange(ischecked);
  }
  render() {
    return (
      <div className="ch">
        <div className="ch-icon">
          <input
            type="checkbox"
            ref={checkbox => (this._checkbox = checkbox)}
            onChange={this.onChange}
          />
          {!this.state.ischecked ? (
            <MD.MdCheckBoxOutlineBlank
              size={this.props.iconsize}
              fill="#bdd641"
            />
          ) : (
            <MD.MdCheckCircle size={this.props.iconsize} fill="#bdd641" />
          )}
        </div>
        <div className="ch-label">{renderHTML(this.props.label)}</div>
      </div>
    );
  }
}
Checkbox.defaultProps = {
  checked: false,
  iconsize: 18,
  label: ""
};
export class Input extends Component {
  state = {
    ref: generateRandomString(),
    value: ""
  };
  constructor(props) {
    super(props);
    this.handleLoginKeyUp = this.keyUpHandler.bind(this, this.state.ref);
  }
  componentDidMount() {
    if (this.props.required) {
      document
        .getElementById(this.state.ref)
        .setAttribute("data-required", true);
    }
  }
  keyUpHandler(refName, e) {
    var value = e.target.value;
    this.setState({
      value: value
    });
    this.props.onModified(value);
  }
  render() {
    var inputClasses = ["ic_input"];
    if (this.state.value) {
      inputClasses.push("active");
    }
    return (
      <div className="ic">
        {this.props.hint &&
          !(this.props.invalid && this.props.errorHint) && (
            <div className="hint">{this.props.hint}</div>
          )}
        {this.props.invalid &&
          this.props.errorHint &&
          this.state.value && (
            <div className="hint error-hint">{this.props.errorHint}</div>
          )}
        {this.props.type !== "tel" ? (
          <input
            className={inputClasses.join(" ")}
            id={this.state.ref}
            type={this.props.type}
            ref={this.state.ref}
            onKeyUp={this.handleLoginKeyUp}
            onChange={this.handleLoginKeyUp}
          />
        ) : (
          <InputMask
            className={inputClasses.join(" ")}
            id={this.state.ref}
            type={this.props.type}
            ref={this.state.ref}
            onKeyUp={this.handleLoginKeyUp}
            onChange={this.handleLoginKeyUp}
            mask="(999) 999 9999"
            maskChar=" "
          />
        )}
        <label>
          {this.props.label}
          {this.props.required && <span className="required">*</span>}
        </label>
      </div>
    );
  }
}
Input.defaultProps = {
  value: "",
  type: "text",
  onModified: null,
  label: "",
  hint: "",
  required: false
};

export class Submit extends Component {
  render() {
    var classes = [];
    if (this.props.disabled || this.props.submitting) {
      classes.push("disabled");
    }
    return (
      <div className="submit-container">
        <div className="sc button">
          <button className={classes.join(" ")}>
            {!this.props.submitting ? <span>{this.props.title}</span> : null}
          </button>
        </div>
      </div>
    );
  }
}
Submit.defaultProps = {
  title: "Enviar",
  disabled: false,
  submitting: false
};
