import React, { Component } from 'react';
import '../css/Contact.css';
import fox from '../images/fox.png'


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

    if (this.state.name.length == 0 || this.state.email.length == 0 || this.state.subject.length == 0 || this.state.message.length == 0) {
      alert('please fill out all sections!')
      return
    }


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
                Your message was sent!
              </p>
              <img src={fox} className="fox" />
              <p></p>
            </div>

            :

            <div>
              <p className="Desc">
                Fill this out and I will be in touch!
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
                  Email address*:
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
                <input className="Button" onClick={this.onClick} type="submit" value="submit" />
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
