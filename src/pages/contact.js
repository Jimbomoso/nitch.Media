import React from "react";
import "../styles/contact.scss"
import Layout from "../components/layout"
import Bounce from "react-reveal/Bounce"
import Metadata from "../components/metadata"

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Layout>
        <Metadata title="Contact" description="Contact Nitch Media" />
        <Bounce top cascade>
          <div className="formBox">
            <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/xnqgeewz" method="post">
              <fieldset id="fs-frm-inputs">
                <label for="full-name">Full Name</label>
                <input type="text" name="name" id="full-name" placeholder="name" required="true" />
                <label for="email-address">Email Address</label>
                <input type="email" name="_replyto" id="email-address" placeholder="email" required="true" />
                <label for="message">Message</label>
                <textarea rows="5" name="message" id="message" placeholder="How can we help?" required="true"></textarea>
                <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
              </fieldset>
              <input type="submit" id="submit" value="Submit" />
            </form>
          </div>
        </Bounce>
      </Layout>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
