import React from "react";
import "./resume.css";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import MaximizeIcon from "@material-ui/icons/Maximize";

function Resume() {
  return (
    <div className="resume__section">
      <div className="title__section">
        <h1 className="section__title">RESUME</h1>
        <hr className="title__header__line" />
      </div>
      <div className="resume__parent">
        <h1 className="error__message">
          Site Under development, Please try again later
        </h1>
        <div className="resume__inner__header">
          <h2>
            Resume
            <hr className="horizontal" />
          </h2>
          <h1> CHECK MY RESUME</h1>
        </div>
        <div className="resume__children">
          <div className="resume__item">
            <h2 className="resume__item__title">SUMMARY</h2>
            <div className="resume__item__body">
              <h2>
                <strong>PASSIONATE DESIGNER</strong>
              </h2>
              <div className="resume__body">
                <p>
                  Innovative and deadline-driven Web Designer with 3+ years of
                  experience designing and developing user-centered
                  digital/print marketing material from initial concept to
                  final, polished deliverable.
                </p>
                <ul>
                  <li>BLK K. PLT 77, Low-cost, Ejura, Kumasi, Ghana</li>
                  <li>+233 5410 17 933</li>
                  <li>williamdreams89@outlook.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="resume__item">
            <h2 className="resume__item__title">EDUCATION</h2>
            <div className="resume__item__body">
              <h2>
                <strong>B. E. C. E CERTIFICATE</strong>
              </h2>
              <div className="resume__body">
                <button className="basic__edu__btn">2009 - 2012</button>
                <h5>Church of Christ Junior High Education, Ejura - Ashanti</h5>
                <p>
                  Qui deserunt veniam. Et sed aliquam labore tempore sed
                  quisquam iusto autem sit. Ea vero voluptatum qui ut
                  dignissimos deleniti nerada porti sand markend Innovative and
                  deadline-driven Web Designer with 3+ years of experience
                  designing and developing user-centered digital/print marketing
                  material from initial concept to final, polished deliverable.
                </p>
              </div>
            </div>
          </div>
          <div className="resume__item">
            <h2 className="resume__item__title"></h2>
            <div className="resume__item__body">
              <h3>
                <strong className="education">WASSCE GENERAL SCIENCE</strong>
              </h3>
              <div className="resume__body">
                <button className="basic__edu__btn">2012 - 2015</button>
                <h5>Ejuraman Anglican Senior High School, Ejura - Ashanti</h5>
                <p>
                  Qui deserunt veniam. Et sed aliquam labore tempore sed
                  quisquam iusto autem sit. Ea vero voluptatum qui ut
                  dignissimos deleniti nerada porti sand markend Innovative and
                  deadline-driven Web Designer with 3+ years of experience
                  designing and developing user-centered digital/print marketing
                  material from initial concept to final, polished deliverable.
                </p>
              </div>
            </div>
          </div>
          <div className="resume__item">
            <h2 className="resume__item__title"></h2>
            <div className="resume__item__body">
              <h2>
                <strong>B.Sc (HEALTH INFO. MANAGEMENT)</strong>
              </h2>
              <div className="resume__body">
                <button className="basic__edu__btn">2019 - Present</button>
                <h5>University of Cape Coast, Cape Coast</h5>
                <p>
                  Qui deserunt veniam. Et sed aliquam labore tempore sed
                  quisquam iusto autem sit. Ea vero voluptatum qui ut
                  dignissimos deleniti nerada porti sand markend Innovative and
                  deadline-driven Web Designer with 3+ years of experience
                  designing and developing user-centered digital/print marketing
                  material from initial concept to final, polished deliverable.
                </p>
              </div>
            </div>
          </div>
          <div className="resume__item">
            <h2 className="resume__item__title">PROFESSIONAL EXPERIENCE</h2>
            <div className="resume__item__body">
              <h2>
                <strong>PASSIONATE DESIGNER</strong>
              </h2>
              <div className="resume__body">
                <p>
                  Innovative and deadline-driven Web Designer with 3+ years of
                  experience designing and developing user-centered
                  digital/print marketing material from initial concept to
                  final, polished deliverable.
                </p>
                <ul>
                  <li>BLK K. PLT 77, Low-cost, Ejura, Kumasi, Ghana</li>
                  <li>+233 5410 17 933</li>
                  <li>williamdreams89@outlook.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
