import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './contactMeHero.scss'

const ContactMeHero = () => {
  const form = useRef();
  const [submitting, setSubmitting] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    setSubmitting(true);

    emailjs
      .sendForm(
        "service_dpthzzb",
        "template_n99zd6c",
        form.current,
        "NgHZLwPDr_ER03DEA"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className='contactMeHero container'>
        <h1>Hey! Wanna <br /> collaborate?</h1>
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <input required type="text" name="user_name" placeholder="What's your name? *" />
            <input required type="email" name="user_email" placeholder="Your email *" />
            <h1 style={{paddingTop: '25px'}}>Share your idea with me</h1>
            <h4 style={{color: '#7f7f7f', fontSize: '18px'}}>Shoot me a direct email and I will get in touch with you as soon as possible.</h4>
            <textarea required type='text' name="message" placeholder="Write a Message *" />
            <button type="submit" className="btn btn-primary" value="Send" disabled={submitting}>{submitting ? "Sending..." : "Send Message"}</button>
          </form> 
        </div>
      </div>
  )
}

export default ContactMeHero
