import TabBar from "../../src/components/Tabs";
import Head from "next/head";
import Image from "next/image";
import travelimg from "../../src/assets/images/travel1.png";
import { Button } from "antd";
import figma from "../../src/assets/images/figma.svg"
import travel2 from "../../src/assets/images/travel2.png"
import travel3 from "../../src/assets/images/travel3.png"
import javascript from "../../src/assets/images/js.svg"
import Partners from "../../src/components/Partners";
import Visitbox from "../../src/components/Visitbox";
const Projects = () => {
  return (
    <>
    <section className="projects">
    <Head>
        <title>Rounded LLC</title>
      </Head>
      <div className="project-wrapper container">
        <div className="header">
          <span>Company</span>
          <h1>Projects</h1>
          <p>
            Ornare aliquet purus, sit tellus, posuere potenti feugiat dictum.
            Amet, sit est nulla et lacus, est congue. Sem et scelerisque.
          </p>
        </div>
        <TabBar />
        <div className="travel">
          <div className="left-side-wrapper">
            <div className="box">
              <div className="img-wrapper">
                <Image src={travelimg} />
              </div>
            </div>
          </div>
          <div className="right-side-wrapper">
            <div className="content">
              <span className="title">Trip, travel , agency</span>
              <h1>Travel app and desktop website</h1>
              <p>
                Massa dignissim imperdiet enim facilisi. Pharetra id eget id
                nisi, maecenas. Pellentesque sit vitae ipsum aenean pulvinar.
                Molestie eget a, ut nibh lectus nunc, viverra vulputate. Quis
                cursus.
              </p>
              <Button type="primary" className="btn">
                View project
              </Button>
            </div>
          </div>
        </div>
        <div className="travel reverse">
          <div className="right-side-wrapper">
            <div className="content">
              <span className="title">Trip, travel , agency</span>
              <h1>Travel app and desktop website</h1>
              <p>
                Massa dignissim imperdiet enim facilisi. Pharetra id eget id
                nisi, maecenas. Pellentesque sit vitae ipsum aenean pulvinar.
                Molestie eget a, ut nibh lectus nunc, viverra vulputate. Quis
                cursus.
              </p>
              <Button type="primary" className="btn">
                View project
              </Button>
            </div>
          </div>
          <div className="left-side-wrapper">
            <div className="box">
              <div className="img-wrapper">
                <Image src={travelimg} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-travel">
        <div className="left-side-wrapper">
          <div className="content">
            <span className="title">Trip, travel , agency</span>
            <h1>Travel app and desktop website</h1>
            <p>
              Massa dignissim imperdiet enim facilisi. Pharetra id eget id nisi,
              maecenas. Pellentesque sit vitae ipsum aenean pulvinar. Molestie
              eget a, ut nibh lectus nunc, viverra vulputate. Quis cursus.
            </p>
            <div className="tool">
              <div className="logo-wrapper">
                <Image src={figma} />
              </div>
              <span>Figma</span>
            </div>
            <Button type="primary" className="btn">
              View project
            </Button>
          </div>
        </div>
        <div className="right-side-wrapper">
            <div className="img-wrapper">
                <Image src={travel3}/>
            </div>
        </div>
      </div>
      <div className="second-travel">
        
        <div className="right-side-wrapper">
            <div className="img-wrapper">
                <Image src={travel2}/>
            </div>
        </div>
        <div className="left-side-wrapper">
          <div className="content">
            <span className="title">Trip, travel , agency</span>
            <h1>Travel app and desktop website</h1>
            <p>
              Massa dignissim imperdiet enim facilisi. Pharetra id eget id nisi,
              maecenas. Pellentesque sit vitae ipsum aenean pulvinar. Molestie
              eget a, ut nibh lectus nunc, viverra vulputate. Quis cursus.
            </p>
            <div className="tool-item">
            <div className="tool">
              <div className="logo-wrapper">
                <Image src={figma} />
              </div>
              <span>Figma</span>
            </div>
            <div className="tool">
              <div className="logo-wrapper">
                <Image src={javascript} />
              </div>
              <span>Figma</span>
            </div>
            </div>
            <Button type="primary" className="btn">
              View project
            </Button>
          </div>
        </div>
      </div>
    </section>
    <Partners/>
    <Visitbox/>
    </>
  );
};
export default Projects;
