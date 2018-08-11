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
    fetch('/api/contact', {
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
      
      <div className="Background">
        <div className="Home-section">
          <hr className="Line"/>

          {this.state.saved ?

            <div>
            <p className="Desc">
              your message was saved!
            </p>
              <p></p>
            </div>

            :

            <div>
              <p className="Desc">
                please fill out this form, and i will be in touch asap!
              </p>
              <p></p>

              <form>
                <label className="label">
                  name*:
                  <p></p>
                  <textarea onChange={this.onNameChange} className="input" type="text" name="name" />
                </label>
                <p></p>
                <label className="label">
                  email address*:
                  <p></p>
                  <textarea onChange={this.onEmailChange} className="input" type="text" name="email" />
                </label>
                <p></p>
                <label className="label">
                  subject*:
                  <p></p>
                  <textarea onChange={this.onSubjectChange} className="input" type="text" name="email" />
                </label>
                <p></p>
                <label className="label">
                  message*:
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
