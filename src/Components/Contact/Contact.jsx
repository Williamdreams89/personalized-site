import React from "react";
import "./contact.css";
import {
  FaInbox,
  FaShare,
  FaPhoneVolume,
  FaSearchLocation,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import SendIcon from '@material-ui/icons/Send';

function ContactMe() {
  return (
    <div className="contactme__main__section" id="contact">
      <div className="section__header">
        <h2 className="section__title">Contact Me</h2>
        <hr className="title__header__line" />
      </div>
      <div className="contact__parent__container">
        <div className="contact__header">
          <h4>
            CONTACT <hr className="horizontal" />
          </h4>
          <h1>CONTACT ME</h1>
        </div>
        <div className="contact__children">
          <div className="contact__object">
            <i>
              <FaSearchLocation />
            </i>
            <div className="contact__detail">
              <h2 className="contact__item__title">My Address</h2>
              <p className="contact__value">
                77 Lowcost Street, Ejura, Kumasi, Ghana
              </p>
            </div>
          </div>

          <div className="contact__object">
            <i>
              <FaShare />
            </i>
            <div className="contact__detail">
              <h2 className="contact__item__title">Social Profiles</h2>
              <div className="contact__inline__icons">
                <a href=""><FaTwitter /></a>
                <a href=""><FaFacebook /></a>
                <a href=""><FaInstagram /></a>
                <a href=""><FaSkype /></a>
                <a href=""><FaLinkedin /></a>
                <a href=""><FaGithub /></a>
              </div>
            </div>
          </div>

          <div className="contact__object">
            <i>
              <FaInbox />
            </i>
            <div className="contact__detail">
              <h2 className="contact__item__title">Email Me</h2>
              <p className="contact__value">williamdreams89@outlook.com</p>
            </div>
          </div>

          <div className="contact__object">
            <i>
              <FaPhoneVolume />
            </i>
            <div className="contact__detail">
              <h2 className="contact__item__title">Call Me</h2>
              <p className="contact__value">+233 5410 17 933</p>
            </div>
          </div>
        </div>
        <div className="contact__form">
          <div className="contact__form__parent">
            <div className="row__big__screens">
            <input type="text" className="text__field" placeholder="Your Name" required />
            <input type="email" className="email__field" placeholder="Your Email" required />
            </div>
            <input type="text" className="subject__field" placeholder="Subject" required />
            <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            <div className="contact__buttons">
            <button type="submit" className="contactme__btn"><i><SendIcon /></i>Send Message</button>
            </div>
          </div>
        </div>
      </div>
        <div className="down__space"></div>
    </div>
  );
}

export default ContactMe;
