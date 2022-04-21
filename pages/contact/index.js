import Image from "next/image"
import bcg from "../../src/assets/images/dframe.svg"
import { Button } from "antd"
import Partners from "../../src/components/Partners"
import Head from "next/head";
const Contact = () => {


    const data = [
        {
            title:"UX/UI design",
            id:1
        },
        {
            title:"Developing",
            id:2
        },
        {
            title:"Mobile app",
            id:3
        },
        {
            title:"Website",
            id:4
        },
        {
            title:"CRM system",
            id:5
        },
        {
            title:"Backend",
            id:6
        },
    ]

    const selected = (evt) =>{
        evt.target.classList.toggle("active")
    }

    return(
        <section className="contact">
            <Head>
                <title>Rounded LLC</title>
            </Head>
            <div className="contact-wrapper ">
                <div className="container">
                <div className="bcg-wrapper">
                    <Image src={bcg}/>
                </div>
                <div className="form-wrapper">
                <div className="content">
                    <span>Contact</span>
                    <h1>Let’s Talk</h1>
                    <p>Ornare aliquet purus, sit tellus, posuere potenti feugiat dictum. Amet, sit est nulla et lacus, est congue. Sem et scelerisque.</p>
                </div>
                <form>
                    <h1>Contact us</h1>
                    <div className="inputs">
                        <label htmlFor="name">Full name</label>
                        <input type="text" id="name" placeholder="Full name"/>
                        <label htmlFor="company-name">Company</label>
                        <input type="text" id="company-name" placeholder="Company name"/>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder="Email "/>
                    </div>
                    <div className="chackboxes">
                        <h2>Services</h2>
                        <div className="select-services">
                            {
                                data && data.map(item=>(
                                    <span key={item.id} onClick={selected}>{item.title}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className="textbox">
                        <h2>Message</h2>
                        <textarea className="textarea" cols="30" rows="10" placeholder="Type here" required></textarea>
                    </div>
                    <Button type="primary" className="submit-btn">Send request</Button>
                </form>
                </div>
                </div>
            </div>
            <div className="adress container">
                  <ul>
                      <li>
                          <span>tashkent office</span>
                          <p>Yunusabad 4, near passport registration place</p>
                      </li>
                      <li>
                          <span>phone number</span>
                          <p>+998 97 491 11 10</p>
                      </li>
                      <li>
                          <span>email address</span>
                          <p>roundedllc@gmail.com</p>
                      </li>
                  </ul>
            </div>              
            <div className="map-wrapper">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d490.1126590780745!2d69.28165847789445!3d41.3640630615115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d577607108f%3A0x5aca61029b234cf!2sSmart%20Software%20Solutions!5e0!3m2!1sru!2s!4v1648210636256!5m2!1sru!2s" width="100%" height="100%"    ></iframe>
            </div>
            <Partners/>
        </section>
    )
}
export default Contact