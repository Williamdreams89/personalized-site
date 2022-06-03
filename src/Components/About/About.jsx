// import { Carousel } from "bootstrap";
import React from "react";
import "./about.css";
import { useState } from "react";
import CountUp from "react-countup";
import { FaSmile, FaHeadphones, FaAward, FaBookOpen } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";


function AboutMe() {
  return (
    <div className="aboutMe__section">
      <div className="title__section">
        <h2 className="section__title">About Me</h2>
        <hr className="title__header__line" />
      </div>
      <div className="about__container">
        <div className="about__parent">
          <div className="about__header">
            <h4>
              About <hr className="horizontal" />
            </h4>
            <h1>Learn More About Me</h1>
          </div>
          <div className="about__table__row">
            <div className="image__column">
              <img
                src="about_pic.jpg"
                alt="about_pic"
                className="about__picture"
              />
            </div>
            <div className="description__column">
              <h1 className="about__role">Junior Full Stack Developer</h1>
              <p className="brief__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                ex, sunt cumque sit omnis eius odit velit inventore accusamus,
                natus eos illum cupiditate fugit temporibus reiciendis. Commodi
                excepturi nulla ad! Dolorem, esse hic officia eius consectetur
                recusandae, commodi, aspernatur sapiente doloribus vitae vero
                possimus cupiditate.
              </p>
              <ul className="my__details">
                <li className="dob">Birthday: 9 August 1987</li>
                <li className="email">Email: williamdreams89@outlook.com</li>
                <li className="phone">Phone: +233541017933</li>
                <li className="city">Kumasi, Ghana</li>
                <li className="age">Age: 45</li>
                <li className="degree">Degree: Bachelor</li>
                <li className="freelance">Freelance: Available</li>
              </ul>
  
            </div>
          </div>
        </div>
        <div className="other__great__details">
          <div className="box clients">
            <span className="emoji">
              <FaSmile className="fa" />
            </span>
            <h2 className="total">
              <CountUp start={0} end={232} />
            </h2>
            <p className="about__item">Happy Clients</p>
          </div>
          <div className="box clients">
            <span className="emoji">
              <FaBookOpen className="fa" />
            </span>
            <h2 className="total">
              <CountUp start={0} end={521} />
            </h2>
            <p className="about__item">Projects</p>
          </div>
          <div className="box clients">
            <span className="emoji">
              <FaHeadphones className="fa" />
            </span>
            <h2 className="total">
              <CountUp start={0} end={1463} />
            </h2>
            <p className="about__item">Hours of Support</p>
          </div>
          <div className="box clients">
            <span className="emoji">
              <FaAward className="fa" />
            </span>
            <h2 className="total">
              <CountUp start={-10} end={25} />
            </h2>
            <p className="about__item">Awards</p>
          </div>
        </div>
        {/*============ SKILLS =========== */}
        <div className="skills__section">
          <div className="parent__container">
            <div className="skills__header">
              <h2 className="header__title">
                Skills <hr className="horizontal" />
              </h2>
            </div>
            <div className="skills__children">
              <div className="skills__child">
                <p className="skill__title ">
                  HTML <span className="percentage__level">90%</span>
                </p>
                <div className="percent__bar">
                  <div className="html__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  CSS <span className="percentage__level">94.5%</span>
                </p>
                <div className="percent__bar">
                  <div className="css__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  JAVASCRIPT <span className="percentage__level">76.99%</span>
                </p>
                <div className="percent__bar">
                  <div className="javascript__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  PYTHON <span className="percentage__level">90%</span>
                </p>
                <div className="percent__bar">
                  <div className="python__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  DJANGO <span className="percentage__level">85%</span>
                </p>
                <div className="percent__bar">
                  <div className="django__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  DRF APIs <span className="percentage__level">90%</span>
                </p>
                <div className="percent__bar">
                  <div className="drf__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  REACTJS <span className="percentage__level">60%</span>
                </p>
                <div className="percent__bar">
                  <div className="react__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  FLUTTER <span className="percentage__level">5%</span>
                </p>
                <div className="percent__bar">
                  <div className="flutter__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  GIT <span className="percentage__level">65%</span>
                </p>
                <div className="percent__bar">
                  <div className="git__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  DBMS <span className="percentage__level">75%</span>
                </p>
                <div className="percent__bar">
                  <div className="dbms__skill__percent__level"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============ INTERESTS =========== */}

        {/*============ TESTIMONIALS =========== */}
        <div className="about__testimonials__section">
          <div className="testimonial__header">
              <h2 className="header__title">
                Testimonial <hr className="horizontal" />
              </h2>
            </div>
          <>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              speed = {1500}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              
              modules={[Autoplay, Pagination]}
              className="mySwiper"
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 60,
                },
                850: {
                  slidesPerView: 1,
                  spaceBetween: 60,
                },
              }}
            >
              <SwiperSlide>
                <div className="testimonial__item">
                  <p className="testimonial__message">
                    <svg
                      viewBox="2 0 24 24"
                      fill="orangered"
                      height="4em"
                      width="4em"
                      className="mySVG"
                    >
                      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 106.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1017.5 10z" />
                    </svg>{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet fuga numquam odit quod delectus aperiam nihil eveniet
                    obcaecati laudantium nam exer saepe maxime molestias, vitae velit
                    eos quibusdam explicabo? At aliquam ipsam porro a. Delectus,
                    sapiente quid.
                    <svg
                      viewBox="0 0 24 24"
                      fill="orangered"
                      height="5em"
                      width="5em"
                      className="mySVG2"
                    >
                      <path d="M21.95 8.721l-.025-.168-.026.006A4.5 4.5 0 1017.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 00-.063-.539zm-11 0l-.025-.168-.026.006A4.5 4.5 0 106.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 00-.064-.537z" />
                    </svg>
                  </p>
                  <img src="benji.jpg" alt="benji" />
                  <div className="testimonial__detail">
                    <h2>
                      <strong>Benjamin Attakuma </strong>
                    </h2>
                    <p>Database Administrator</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item">
                  <p className="testimonial__message">
                    <svg
                      viewBox="2 0 24 24"
                      fill="orangered"
                      height="4em"
                      width="4em"
                      className="mySVG"
                    >
                      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 106.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1017.5 10z" />
                    </svg>{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet fuga numquam odit quod delectus aperiam nihil eveniet
                    obcaecati laudantium nam exerci voluptatum sed ad impedit
                    natus consectetur nobis saepe maxime molestias, vitae velit
                    eos quibusdam explicabo? At aliquam ipsam porro a. Delectus,
                    sapiente quidem.
                    <svg
                      viewBox="0 0 24 24"
                      fill="orangered"
                      height="5em"
                      width="5em"
                      className="mySVG2"
                    >
                      <path d="M21.95 8.721l-.025-.168-.026.006A4.5 4.5 0 1017.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 00-.063-.539zm-11 0l-.025-.168-.026.006A4.5 4.5 0 106.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 00-.064-.537z" />
                    </svg>
                  </p>
                  <img src="pr_frank.jpg" alt="benji" />
                  <div className="testimonial__detail">
                    <h2>
                      <strong>Frank Obeng Essien</strong>
                    </h2>
                    <p>Preacher, CCCM-UCC</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item">
                  <p className="testimonial__message">
                    <svg
                      viewBox="2 0 24 24"
                      fill="orangered"
                      height="4em"
                      width="4em"
                      className="mySVG"
                    >
                      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 106.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1017.5 10z" />
                    </svg>{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet fuga numquam odit quod delectus aperiam nihil eveniet
                    obcaecati laudantium nam exerci voluptatum sed ad impedit
                    natus consectetur nobis saepe maxime molestias, vitae velit
                    eos quibusdam explicabo? At aliquam ipsam porro a. Delectus,
                    sapiente quidem.
                    <svg
                      viewBox="0 0 24 24"
                      fill="orangered"
                      height="5em"
                      width="5em"
                      className="mySVG2"
                    >
                      <path d="M21.95 8.721l-.025-.168-.026.006A4.5 4.5 0 1017.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 00-.063-.539zm-11 0l-.025-.168-.026.006A4.5 4.5 0 106.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 00-.064-.537z" />
                    </svg>
                  </p>
                  <img src="max.jpg" alt="benji" />
                  <div className="testimonial__detail">
                    <h2>
                      <strong>Maxwell Osei Gyebi</strong>
                    </h2>
                    <p>Content Creator & Artist</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item">
                  <p className="testimonial__message">
                    <svg
                      viewBox="2 0 24 24"
                      fill="orangered"
                      height="4em"
                      width="4em"
                      className="mySVG"
                    >
                      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 106.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1017.5 10z" />
                    </svg>{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet fuga numquam odit quod delectus aperiam nihil eveniet
                    obcaecati laudantium nam exerci voluptatum sed ad impedit
                    natus consectetur nobis saepe maxime molestias, vitae velit
                    eos quibusdam explicabo? At aliquam ipsam porro a. Delectus,
                    sapiente quidem.
                    <svg
                      viewBox="0 0 24 24"
                      fill="orangered"
                      height="5em"
                      width="5em"
                      className="mySVG2"
                    >
                      <path d="M21.95 8.721l-.025-.168-.026.006A4.5 4.5 0 1017.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 00-.063-.539zm-11 0l-.025-.168-.026.006A4.5 4.5 0 106.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 00-.064-.537z" />
                    </svg>
                  </p>
                  <img src="benji.jpg" alt="benji" />
                  <div className="testimonial__detail">
                    <h2>
                      <strong>Benjamin Attakuma </strong>
                    </h2>
                    <p>Database Administrator</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item">
                  <p className="testimonial__message">
                    <svg
                      viewBox="2 0 24 24"
                      fill="orangered"
                      height="4em"
                      width="4em"
                      className="mySVG"
                    >
                      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 106.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1017.5 10z" />
                    </svg>{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet fuga numquam odit quod delectus aperiam nihil eveniet
                    obcaecati laudantium nam exerci voluptatum sed ad impedit
                    natus consectetur nobis saepe maxime molestias, vitae velit
                    eos quibusdam explicabo? At aliquam ipsam porro a. Delectus,
                    sapiente quidem.
                    <svg
                      viewBox="0 0 24 24"
                      fill="orangered"
                      height="5em"
                      width="5em"
                      className="mySVG2"
                    >
                      <path d="M21.95 8.721l-.025-.168-.026.006A4.5 4.5 0 1017.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 00-.063-.539zm-11 0l-.025-.168-.026.006A4.5 4.5 0 106.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 00-.064-.537z" />
                    </svg>
                  </p>
                  <img src="benji.jpg" alt="benji" />
                  <div className="testimonial__detail">
                    <h2>
                      <strong>Benjamin Attakuma </strong>
                    </h2>
                    <p>Database Administrator</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item">
                  <p className="testimonial__message">
                    <svg
                      viewBox="2 0 24 24"
                      fill="orangered"
                      height="4em"
                      width="4em"
                      className="mySVG"
                    >
                      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 106.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1017.5 10z" />
                    </svg>{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet fuga numquam odit quod delectus aperiam nihil eveniet
                    obcaecati laudantium nam exerci voluptatum sed ad impedit
                    natus consectetur nobis saepe maxime molestias, vitae velit
                    eos quibusdam explicabo? At aliquam ipsam porro a. Delectus,
                    sapiente quidem.
                    <svg
                      viewBox="0 0 24 24"
                      fill="orangered"
                      height="5em"
                      width="5em"
                      className="mySVG2"
                    >
                      <path d="M21.95 8.721l-.025-.168-.026.006A4.5 4.5 0 1017.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 00-.063-.539zm-11 0l-.025-.168-.026.006A4.5 4.5 0 106.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 00-.064-.537z" />
                    </svg>
                  </p>
                  <img src="benji.jpg" alt="benji" />
                  <div className="testimonial__detail">
                    <h2>
                      <strong>Benjamin Attakuma </strong>
                    </h2>
                    <p>Database Administrator</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
