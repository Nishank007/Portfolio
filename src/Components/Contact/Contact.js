import React, { Component, useState } from "react";
import { Container, Paper } from "@material-ui/core";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import './Contact.css';

class Contact extends Component {
  state = {
    successMessage: "",
  };


  sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_10122",
        "template_10122",
        event.target,
        "user_FvU8o71sfPlQZF2JaGvNl"
      )
      .then(
        (result) => {
          console.log(result.text);
          this.setState({
            successMessage:
              "Sent! I'll contact you as soon as possible.",
          });
          event.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  render() {
    return (
      <Container maxWidth="xl" id="contact">
        <hr />
        <h3 style={{ textAlign: "center", margin: "1rem", color: "#F7F9FC" }}>
          Contact Me
        </h3>
        <hr />
        
        <Container>
          <br></br>
          <h4
            style={{ textAlign: "center", fontWeight: "900", color: "#0dd157" }}
          >
            {this.state.successMessage}
          </h4>
          <form onSubmit={(event) => this.sendEmail(event)}>
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <input
                    type="text"
                    className="form-group-input"
                    placeholder="Enter your Name"
                    name="name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    className="form-group-input"
                    placeholder="Enter your Email"
                    name="email"
                    
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    className="form-group-input"
                    placeholder="Enter Subject"
                    name="subject"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    placeholder="Description"
                    name="description"
                  ></textarea>
                </div>
                <div class="space"></div>
                <div class="content u-text-center">
                  <button
                    style={{ width: "50%", textAlign: "center" }}
                    class="btn-info"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Container>
      </Container>
    );
  }
}

export default Contact;
