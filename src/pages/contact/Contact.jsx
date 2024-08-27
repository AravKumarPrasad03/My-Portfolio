import React, { useState } from 'react';  
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { AiFillLinkedin } from "react-icons/ai";
import emailjs from 'emailjs-com';  
import { toast, ToastContainer } from 'react-toastify'; // ADD THIS LINE
import 'react-toastify/dist/ReactToastify.css'; // ADD THIS LINE
import "./contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_USER_ID       
    ).then(
      (result) => {
        console.log(result.text);
        setResponseMessage('');
        toast.success('Email sent successfully!'); // SHOW SUCCESS TOAST
      },
      (error) => {
        console.log(error.text);
        setResponseMessage('Failed to send message.');
        toast.error('Failed to send email. Please try again.'); // SHOW ERROR TOAST
      }
    );
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't Be Shy!</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing new projects,
            creative ideas or opportunities to be part of your visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail Me</span>
                <h4 className="info__desc"><b>arav3737@gmail.com</b></h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call Me</span>
                <h4 className="info__desc"><b>+91-8360799055</b></h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.linkedin.com/in/arav-kumar-prasad-673003232/" className="contact__social-link">
              <AiFillLinkedin />
            </a>
            <a href="https://www.facebook.com/arav.kumar.792303" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="https://x.com/AravKumar03" className="contact__social-link">
              <FaTwitter />
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form__control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form__control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="form__control"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              name="message"
              placeholder="Your Message"
              className="form__control textarea"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button className="button" type="submit">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
      
      {responseMessage && <p>{responseMessage}</p>} 

      <ToastContainer /> {/* ADD THIS TO RENDER TOAST NOTIFICATIONS */}
    </section>
  );
};

export default Contact;
