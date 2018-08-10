import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      saved: false
    }
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  onSubjectChange = (event) => {
    this.setState({
      subject: event.target.value
    })
  }

  onMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  onClick = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'credentials': 'same-origin',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      })
    })
    .then(response => {
      if(response.status === 200){
        console.log('saved yay!')
        this.setState({
          saved: true
        })
      }
    })
    .catch(err => console.log('error saving message' + err))
  }
  

  render() {
    return (
      <div>
        <div className="Home-section">
          <hr className="Line"/>

          {this.state.saved ?

            <p className="Desc">
              Your message was saved!
            </p>

            :

            <div>
              <p className="Desc">
                Please fill out this form, and I will be in touch ASAP!
              </p>
              <p></p>

              <form>
                <label className="label">
                  Name*:
                  <p></p>
                  <textarea onChange={this.onNameChange} className="input" type="text" name="name" />
                </label>
                <p></p>
                <label className="label">
                  Email Address*:
                  <p></p>
                  <textarea onChange={this.onEmailChange} className="input" type="text" name="email" />
                </label>
                <p></p>
                <label className="label">
                  Subject*:
                  <p></p>
                  <textarea onChange={this.onSubjectChange} className="input" type="text" name="email" />
                </label>
                <p></p>
                <label className="label">
                  Message*:
                  <p></p>
                  <textarea onChange={this.onMessageChange} className="message" type="textarea" name="message" />
                </label>
                <p></p>
                <input className="Button" onClick={this.onClick} type="submit" value="Submit" />
              </form>

              <p></p>
            </div>
          }

          <hr className="Line"/>
        </div>
      </div>
    )}
  }

  export default Contact;
