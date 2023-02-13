import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import './contactMeHero.scss'

const ContactMeHero = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contactMeHero container'>
        <h1>Hey! Wanna <br /> collaborate?</h1>
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="What's your name? *" />
            <input type="email" name="user_email" placeholder="Your email *" />
            <h1 style={{paddingTop: '25px'}}>Share your idea with me</h1>
            <h4 style={{color: '#7f7f7f', fontSize: '18px'}}>Shoot me a direct email and I will get in touch with you as soon as possible.</h4>
            <textarea name="message" placeholder="Write a Message *" />
            <button type="submit" class="btn btn-primary" value="Send">Send Message</button>
          </form> 
        </div>
    </div>

  //   <StyledContactForm>
  //   <form ref={form} onSubmit={sendEmail}>
  //     <label>Name</label>
  //     <input type="text" name="user_name" />
  //     <label>Email</label>
  //     <input type="email" name="user_email" />
  //     <label>Message</label>
  //     <textarea name="message" />
  //     <input type="submit" value="Send" />
  //   </form>
  // </StyledContactForm>
  )
}

export default ContactMeHero





// // Styles
// const StyledContactForm = styled.div`
//   width: 400px;
//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;
//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
//     label {
//       margin-top: 1rem;
//     }
//     input[type="submit"] {
//       margin-top: 2rem;
//       cursor: pointer;
//       background: rgb(249, 105, 14);
//       color: white;
//       border: none;
//     }
//   }
// `;