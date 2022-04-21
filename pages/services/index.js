import Head from "next/head";
import { Button } from "antd";
import iMac from "../../src/assets/images/iMac.png";
import Image from "next/image";
import iPhone from "../../src/assets/images/iPhone.png";
import spend from "../../src/assets/images/spend.svg";
import figma from "../../src/assets/images/figma.svg";
import js from "../../src/assets/images/js.svg";
import photoshop from "../../src/assets/images/photoshop.png";
import java from "../../src/assets/images/java.svg";
import nodejs from "../../src/assets/images/node_js.svg"
import bitbucet from "../../src/assets/images/bitbucket.svg"
import go from "../../src/assets/images/go.png"
import codepen from "../../src/assets/images/codepen.png"
import php from "../../src/assets/images/php.png"
import python from "../../src/assets/images/python.png"
import jquery from "../../src/assets/images/jquery.png"
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectOne from "../../src/assets/images/project1.png";
import Visitbox from "../../src/components/Visitbox";
import Partners from "../../src/components/Partners";
import right from "../../src/assets/images/toright.svg"

import "swiper/css";
const Services = () => {
  return (
    <section className="services">
      <Head>
        <title>Rounded LLC</title>
      </Head>
      <div className="home-wrapper container">
        <div className="left-wrapper">
          <span className="aeonik-medium-16 digital">Company</span>
          <h1>Consequat sit leo lectus</h1>
          <p>
            Ornare aliquet purus, sit tellus, posuere potenti feugiat dictum.
            Amet, sit est nulla et lacus, est congue. Sem et scelerisque.
          </p>
          <Button type="primary aeonik-medium-18">View our project</Button>
        </div>
        <div className="right-wrapper">
          <div className="img-wrapper">
            <Image src={iMac} />
          </div>
          <div className="img2-wrapper">
            <Image src={iPhone} />
          </div>
        </div>
      </div>
      <div className="btn-wrapper">
        <Button className="light-btn">
          Design
          <div className="">
            <Image src={right} alt="icon"/>
          </div>
        </Button>
        <Button className="light-btn">
          Development
          <div className="">
            <Image src={right} alt="icon"/>
          </div>
        </Button>
      </div>
      <div className="websites">
        <div className="websites-wrapper container">
          <div className="left-wrapper">
            <span className="header">Design</span>
            <h1>Design app and websites</h1>
            <p>
              Amet proin vel in eleifend euismod molestie est nullam tincidunt.
              Quis suspendisse ultrices arcu enim id ante. Non fames cursus
              rhoncus gravida eleifend tincidunt.
            </p>
            <h4>- UX design</h4>
            <h4>- UI design</h4>
            <Button type="primary" className="start-btn">Start project</Button>
          </div>
          <div className="right-wrapper">
            <div className="img-wrapper">
              <Image src={spend} />
            </div>
          </div>
        </div>
        <div className="tools container">
          <span className="header">Tool</span>
          <h1>Design tools</h1>
          <p>
            Amet proin vel in eleifend euismod molestie est nullam tincidunt.
            Quis suspendisse ultrices arcu enim id ante.
          </p>
          <ul>
            <li>
              <div className="logo-wrapper">
                <Image src={figma} />
              </div>
              <span>Figma</span>
            </li>
            <li>
              <div className="logo-wrapper">
                <Image src={js} />
              </div>
              <span>Java script</span>
            </li>
            <li>
              <div className="logo-wrapper">
                <Image src={java} />
              </div>
              <span>Java</span>
            </li>
            <li>
              <div className="logo-wrapper">
                <Image src={photoshop} />
              </div>
              <span>Photoshop</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="websites">
        <div className="websites-wrapper container">
          <div className="left-wrapper">
            <span className="header">dev</span>
            <h1>Development projects</h1>
            <p>
              Amet proin vel in eleifend euismod molestie est nullam tincidunt.
              Quis suspendisse ultrices arcu enim id ante. Non fames cursus
              rhoncus gravida eleifend tincidunt.
            </p>
            <h4>- Front end</h4>
            <h4>- Beck end</h4>
            <h4>- App</h4>
            <h4>- Dashboard</h4>
            <Button type="primary" className="start-btn">Start project</Button>
          </div>
          <div className="right-wrapper">
            <div className="img-wrapper">
              <Image src={spend} />
            </div>
          </div>
        </div>
        <div className="tools container">
          <span className="header">Tool</span>
          <h1>Development tools</h1>
          <p>
            Amet proin vel in eleifend euismod molestie est nullam tincidunt.
            Quis suspendisse ultrices arcu enim id ante.
          </p>
          <ul>
            <li>
              <div className="logo-wrapper">
                <Image src={js} />
              </div>
              <span>Javascript</span>
            </li>
            <li>
              <div className="logo-wrapper">
                <Image src={nodejs} />
              </div>
              <span>Node Js</span>
            </li>
            <li>
              <div className="logo-wrapper">
                <Image src={bitbucet} />
              </div>
              <span>Bitbucket</span>
            </li>
            <li>
              <div className="logo-wrapper">
                <Image src={java} />
              </div>
              <span>Java</span>
            </li>
          </ul>
          <ul className="tool-list">
          <li>
              <div className="logo-wrapper">
                <Image src={go} />
              </div>
              <span>Go</span>
            </li>
            <li>
              <div className="logo-wrapper">
                <Image src={codepen} />
              </div>
              <span>Codepen</span>
            </li>
            <li>
              <div className="logo-wrapper">
                <Image src={jquery} />
              </div>
              <span>Jquery</span>
            </li>
            <li>
              <div className="logo-wrapper">
                <Image src={python} />
              </div>
              <span>Python</span>
            </li>
            <li>
              <div className="logo-wrapper">
                <Image src={php} />
              </div>
              <span>Php</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="works container">
        <div className="left-side-wrapper">
          <span className="title">Projects</span>
          <h1>Recent Works</h1>
          <p>
            Amet proin vel in eleifend euismod molestie est nullam tincidunt.
            Quis suspendisse ultrices arcu enim id ante.
          </p>
          <div>
            <Button type="primary" className="btn-primary">
              View all projects
            </Button>
          </div>
        </div>
        <div className="right-side-wrapper">
          <ul>
          <Swiper
            spaceBetween={40}
            slidesPerView={2.38}
            freeMode={true}
            grabCursor= {true}
            loop= {true}
            // spaceBetween= {40}
            speed= {1000}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={ProjectOne} />
                </div>
                <h2>Online school mobile and web app</h2>
                <p>Website / Birzoom</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={ProjectOne} />
                </div>
                <h2>Online school mobile and web app</h2>
                <p>Website / Birzoom</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={ProjectOne} />
                </div>
                <h2>Online school mobile and web app</h2>
                <p>Website / Birzoom</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={ProjectOne} />
                </div>
                <h2>Online school mobile and web app</h2>
                <p>Website / Birzoom</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={ProjectOne} />
                </div>
                <h2>Online school mobile and web app</h2>
                <p>Website / Birzoom</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={ProjectOne} />
                </div>
                <h2>Online school mobile and web app</h2>
                <p>Website / Birzoom</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={ProjectOne} />
                </div>
                <h2>Online school mobile and web app</h2>
                <p>Website / Birzoom</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={ProjectOne} />
                </div>
                <h2>Online school mobile and web app</h2>
                <p>Website / Birzoom</p>
              </li>
            </SwiperSlide>
          </Swiper>
          </ul>
       
        </div>
      </div>
      <Partners/>
      <Visitbox/>
    </section>
  );
};
export default Services;
