import Head from "next/head";
import about from "../../src/assets/images/about.png";
import { Button } from "antd";
import Image from "next/image";
import Ellipse from "../../src/assets/images/Ellipse.svg";
import Bcg from "../../src/assets/images/dframe.svg";
import user from "../../src/assets/images/user.png";
import worker1 from "../../src/assets/images/worker1.png";
import worker2 from "../../src/assets/images/worker2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "../../src/components/Slider";
import Partners from "../../src/components/Partners"
import Visitbox from "../../src/components/Visitbox"
import design from "../../src/assets/images/design.svg"
import right from "../../src/assets/images/right.svg"
import file from "../../src/assets/images/file.svg"
import users from "../../src/assets/images/users.svg"
import files from "../../src/assets/images/files.svg"
import design2 from "../../src/assets/images/design2.svg"


import "swiper/css";

const About = () => {
  return (
    <section className="about">
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
            <Image src={about} />
          </div>
        </div>
      </div>
      <div className="services">
        <div className="section-wrapper container">
          <span className="min-header">Services</span>
          <h1 className="header">What we do?</h1>
          <p className="header-p">
            Amet proin vel in eleifend euismod molestie est nullam tincidunt.
            Quis suspendisse ultrices arcu enim id ante. Non fames cursus
            rhoncus gravida eleifend tincidunt. Vitae malesuada vitae amet
            mattis leo, tempor. Diam bibendum sit eu adipiscing pharetra
            facilisi augue.
          </p>
          <ul>
            <li className="border-10">
              <div className="item-header">
                <div className="icon-wrapper-1 border-50">
                  <div className="">
                      <Image src={design} alt="icon"/>
                  </div>
                </div>
                <h1>Design</h1>
              </div>
              <p>
                Orci dignissim volutpat sed quam neque dictum eu. Donec congue
                viverra aliquam praesent blandit rutrum. Mi facilisi imperdiet
                integer.
              </p>
              <span>
                I need a design
                  <div className="">
                      <Image src={right} alt="icon"/>
                  </div>
              </span>
            </li>
            <li className="border-10">
              <div className="item-header">
                <div className="icon-wrapper-2 border-50">
                <div className="">
                      <Image src={file} alt="icon"/>
                  </div>
                </div>
                <h1>Development</h1>
              </div>
              <p>
                Orci dignissim volutpat sed quam neque dictum eu. Donec congue
                viverra aliquam praesent blandit rutrum. Mi facilisi imperdiet
                integer.
              </p>
              <span>
                I need a project
                <div className="">
                      <Image src={right} alt="icon"/>
                  </div>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="missions">
        <div className="mission-wrapper container">
          <div className="ellipse">
            <Image src={Ellipse} />
          </div>
          <div className="bcg">
            <Image src={Bcg} />
          </div>
          <h1>Our missions</h1>
          <p className="mission-target">Ornare aliquet purus, sit tellus, posuere potulla et lacus, est congue. Sem et scelerisque.dictum.</p>
          <div className="message border-10">
            <div className="user">
                <Image src={user} />
            </div>
            <h2>Mauris acambir</h2>
            <span>Director of “one thing”</span>
            <p>Ut ut diam vel et. Ultrices gravida eget faucibus massa venenatis proin. Facilisi nunc ultricies in nisl, platea. Felis eget elit donec sit id malesuada. Amet fringilla ipsum netus hendrerit pretium, magna. Orci aenean sed facilisi sollicitudin vulputate. Congue donec at amet vel consequat elit sit urna. Quis sit ut amet velit.</p>
          </div>
        </div>
      </div>
      <div className="rusults">
        <div className="result-wrapper container">
            <span>Results</span>
            <h1>Our Results</h1>
            <p>Amet proin vel in eleifend euismod molestie est nullam tincidunt. Quis suspendisse ultrices arcu enim id ante. Non fames cursus rhoncus gravida eleifend tincidunt. Vitae malesuada vitae amet mattis leo, tempor. Diam bibendum sit eu adipiscing pharetra facilisi augue. </p>
            <ul>
              <li>
                <div className="icon-wrapper icon-1">
                  <div className="">
                    <Image src={users} alt="icon"/>
                  </div>
                </div>
                <div className="text-content">
                  <h2>50+</h2>
                  <p>Clients</p>
                </div>
              </li>
              <li>
                <div className="icon-wrapper icon-2">
                  <div className="">
                    <Image src={files} alt="icon"/>
                  </div>
                </div>
                <div className="text-content">
                  <h2>150+</h2>
                  <p>Projects</p>
                </div>
              </li>
              <li>
                <div className="icon-wrapper icon-3">
                  <div className="">
                    <Image src={design2} alt="icon"/>
                  </div>
                </div>
                <div className="text-content">
                  <h2>2 years</h2>
                  <p>Experience</p>
                </div>
              </li>
            </ul>
        </div>
      </div>
      <div className="works container">
        <div className="left-wrapper">
          <span className="title">Projects</span>
          <h1>Our team</h1>
          <p>
          Amet proin vel in eleifend euismod molestie est nullam tincidunt. Quis suspendisse ultrices arcu enim id ante.
          </p>
          
        </div>
        <div className="right-wrapper">
          <ul>
          <Swiper
            spaceBetween={40}
            slidesPerView={2.38}
            freeMode={true}
            grabCursor= {true}
            loop= {true}
          >
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={worker1} />
                </div>
                <h2>Eget sem</h2>
                <p>Nisl lacinia</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={worker2} />
                </div>
                <h2>Mauris ac</h2>
                <p>Mauris sed</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={worker1} />
                </div>
                <h2>Mauris ac</h2>
                <p>Mauris sed</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={worker2} />
                </div>
                <h2>Mauris ac</h2>
                <p>Mauris sed</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={worker1} />
                </div>
                <h2>Mauris ac</h2>
                <p>Mauris sed</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={worker2} />
                </div>
                <h2>Mauris ac</h2>
                <p>Mauris sed</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={worker1} />
                </div>
                <h2>Mauris ac</h2>
                <p>Mauris sed</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={worker2} />
                </div>
                <h2>Mauris ac</h2>
                <p>Mauris sed</p>
              </li>
            </SwiperSlide>
          </Swiper>
          </ul>
       
        </div>
      </div>
      <div className="customers">
        <div className="customers-wrapper">
            <Slider/>
        </div>
      </div>
      <Partners/>
      <Visitbox/>
    </section>
  );
};
export default About;
