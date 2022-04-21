import { Button } from "antd";
import Image from "next/image";
import Macbook from "../../src/assets/images/Macbook.png";
import Google from "../../src/assets/images/Google.svg";
import Facebook from "../../src/assets/images/Facebook.svg";
import Apple from "../../src/assets/images/Apple.svg";
import Microsoft from "../../src/assets/images/Microsoft.svg";
import Visitbox from "../../src/components/Visitbox";
import ProjectOne from "../../src/assets/images/project1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonSvg from "../../src/assets/images/Bottom.svg"
import Ellipse from "../../src/assets/images/Ellipse.svg"
import Bcg from "../../src/assets/images/dframe.svg"
import Develop from "../../src/assets/images/develop.png"
import total from "../../src/assets/images/total.svg"
import spend from "../../src/assets/images/spend.svg"
import Partners from "../../src/components/Partners";
import design from "../../src/assets/images/design.svg"
import right from "../../src/assets/images/right.svg"
import file from "../../src/assets/images/file.svg"


import "swiper/css";
const Main = () => {
  const scrollContainer = (evt) => {
    evt.currentTarget.scrollLeft += evt.deltaY;
    evt.stopPropagation();
  };

  return (
    <section className="home">
      <div className="home-wrapper container">
        <div className="left-wrapper">
          <span className="aeonik-medium-16 digital">digital agency</span>
          <h1>Consequat sit leo lectus</h1>
          <p>
            Ornare aliquet purus, sit tellus, posuere potenti feugiat dictum.
            Amet, sit est nulla et lacus, est congue. Sem et scelerisque.
          </p>
          <Button type="primary aeonik-medium-18">View our project</Button>
          <h5>TRUSTED BY DYNAMIC COMPANIES</h5>
          <ul className="companys">
            <li>
              <Image src={Google} />
            </li>
            <li>
              <Image src={Facebook} />
            </li>
            <li>
              <Image src={Apple} />
            </li>
            <li>
              <Image src={Microsoft} />
            </li>
            <li>
              <Image src={Google} />
            </li>
          </ul>
        </div>
        <div className="right-wrapper">
          <div className="img-wrapper">
            <Image src={Macbook} />
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
            facilisi augue.{" "}
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
      <div className="works container">
        <div className="left-wrapper">
          <span className="title">Projects</span>
          <h1>Recent Works</h1>
          <p>
            Amet proin vel in eleifend euismod molestie est nullam tincidunt.
            Quis suspendisse ultrices arcu enim id ante.
          </p>
          <div className="btn-wrapper">
            <Button type="primary" className="btn-primary">
              View all projects
            </Button>
          </div>
        </div>
        <div className="right-wrapper">
          <ul onWheel={scrollContainer}>
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
                <div className="item-wrapper">
                <div className="project-img-wrapper">
                  <Image src={ProjectOne} />
                </div>
                <h2>Online school mobile and web app</h2>
                <p>Website / Birzoom</p>
                </div>
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
      <section className="statistic-wrapper">
      <div className="statistics container">
          <div className="left-wrapper">
              <div className="ellipse">
                    <Image src={Ellipse} />
              </div>
                <div className="img-wrapper">
                    <Image src={ButtonSvg} />
                </div>
          </div>
          <div className="right-wrapper">
              <div className="bcg">
                    <Image src={Bcg} />
              </div>
                <div className="content">
                    <span className="case">CASE</span>
                    <h1>Research</h1>
                    <p>Orci, elit, purus laoreet sagittis, vel vehicula felis. Non sagittis interdum cursus enim, interdum at a arcu aenean. Pharetra tellus sed velit risus nullam est.</p>
                    <Button className="white-borfer-btn">View all projects</Button>
                </div>
          </div>
      </div>
      </section>
      <div className="developing ">
          <div className="developing-wrappper container ">
              <div className="left-wrapper">
                  <div className="content">
                  <span className="case">CASE</span>
                    <h1>Design &  Developing</h1>
                    <p>Orci, elit, purus laoreet sagittis, vel vehicula felis. Non sagittis interdum cursus enim, interdum at a arcu aenean. Pharetra tellus sed velit risus nullam est.</p>
                    <Button className="outline-btn">View all projects</Button>
                  </div>
              </div>
              <div className="right-wrapper">
                  <div className="img-wrapper">
                      <Image src={Develop}/>
                  </div>
              </div>
          </div>
      </div>
      <section className="statistic-wrapper">
      <div className="statistics container strategy">
          <div className="left-wrapper">
              <div className="ellipse">
                    <Image src={Ellipse} />
              </div>
                <div className="images">
                <div className="img-wrapper">
                    <Image className="total" src={total}/>
                    
                </div>
                <div className="img-wrapperr">
                    <Image src={spend} />
                </div>
                </div>
          </div>
          <div className="right-wrapper">
              <div className="bcg">
                    <Image src={Bcg}/>
              </div>
                <div className="content">
                    <span className="case">CASE</span>
                    <h1>Strong strategy</h1>
                    <p>Orci, elit, purus laoreet sagittis, vel vehicula felis. Non sagittis interdum cursus enim, interdum at a arcu aenean. Pharetra tellus sed velit risus nullam est.</p>
                    <Button className="white-borfer-btn">View all projects</Button>
                </div>
          </div>
      </div>
      </section>
      <Partners/>
      <Visitbox/>
    </section>
  );
};
export default Main;
