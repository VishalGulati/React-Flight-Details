import React, { Component } from 'react';
import './AnswerForm.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import validator from 'validator';

class AnswerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: '',
      email: '',
      phone: '',
      answerText: '',
      lengthAnswerText: 0,
      errorHandling: {
        name: false,
        email: false,
        phone: false,
        answer: false
      },
      errorMessages: {
        name: 'Please enter name',
        email: 'Please enter email',
        phone: 'Please number only for  phone',
        answer: 'Please enter answer'
      }
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePhoneChange(event) {
    this.setState({ phone: event.target.value });
  }

  handleTextChange(event) {
    this.setState({ answerText: event.target.value, lengthAnswerText: event.target.value.length });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.formIsValid()) {
      this.props.onAnswerAdded(this.state.count, this.state.name, this.state.email, this.state.answerText);
    }
  }

  formIsValid = () => {
    var state = this.state;

    if (validator.isEmpty(state.name)) {
      state.errorHandling.name = true; 
      this.setState(state);
      return false;
    }
    else if (!validator.isEmail(state.email)) {
      state.errorHandling.name = false; 
      state.errorHandling.email = true; 
      this.setState(state);
      return false;
    }
    else if (!validator.isNumeric(state.phone)) {
      state.errorHandling.name = false; 
      state.errorHandling.email = false; 
      state.errorHandling.phone = true; 
      this.setState(state);
      return false;
    }
    else if (validator.isEmpty(state.answerText)) {
      state.errorHandling.name = false; 
      state.errorHandling.email = false; 
      state.errorHandling.phone = false; 
      state.errorHandling.answer = true; 
      this.setState(state);
      return false;
    }
    else {
      state.errorHandling.name = false; 
      state.errorHandling.email = false; 
      state.errorHandling.phone = false; 
      state.errorHandling.answer = false; 
    }

    return true;
  }

  render() {
    const charsKeyed = this.state.lengthAnswerText;
    const errorMessages = this.state.errorMessages;
    const errorHandling = this.state.errorHandling;
    return (
      <form onSubmit={this.handleSubmit} className="answers-form">
        <div className="form-group row">
          <div className="col-sm-4">
            <input className={"form-control " + (errorHandling.name ? "red" : "normal")} id="name" type="text" placeholder="Enter your name" onChange={this.handleNameChange} />
            <span className={"help-block " + (errorHandling.name ? "show" : "hidden")}>{errorMessages.name}</span>
          </div>
          <div className="col-sm-4">
            <input className={"form-control " + (errorHandling.email ? "red" : "normal")} id="email" type="email" placeholder="Enter your email" onChange={this.handleEmailChange} />
            <span className={"help-block " + (errorHandling.email ? "show" : "hidden")}>{errorMessages.email}</span>
          </div>
          <div className="col-sm-4">
            <input className={"form-control " + (errorHandling.phone ? "red" : "normal")} id="phone" type="text" placeholder="9999999999" onChange={this.handlePhoneChange} />
            <span className={"help-block " + (errorHandling.phone ? "show" : "hidden")}>{errorMessages.phone}</span>
          </div>
        </div>
        <div className="form-group">
          <textarea className={"form-control " + (errorHandling.answer ? "red" : "normal")} rows="5" id="comment" maxLength="200" placeholder="Enter your Comment" onChange={this.handleTextChange}></textarea>
          <span className={"help-block " + (errorHandling.answer ? "show" : "hidden")}>{errorMessages.answer}</span>
          <p className="text-right charcount"> { (200 - charsKeyed) + ' of 200 characters left' } </p>
        </div>
        <input className="btn btn-danger" type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAnswerAdded: (count, name, email, answerText) => dispatch({ type: actionTypes.ADD_ANSWER, payload: { count, name, email, answerText } })
  }
}

export default connect(null, mapDispatchToProps)(AnswerForm);