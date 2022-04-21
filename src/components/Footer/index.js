import Image from "next/image"; 
import Rounded from '../../assets/images/Rounded.svg'
import telegram from '../../assets/images/telegram.svg'
import instagram from '../../assets/images/instagram.svg'
import youtube from '../../assets/images/youtube.svg'
import facebookicon from '../../assets/images/facebookicon.svg'
import Link from "next/link";

const Footer = () =>{
    return(
        <footer>
           <div className="footer-wrapper container">
           <div className="logo-wrapper">
                <Image src={Rounded} />
            </div>
                <ul className="footer-links">
                    <li>
                        <span>Services</span>
                        <ul>
                            <li><Link href="/projects"><a>Web design</a></Link></li>
                            <li><Link href="/projects"><a>Mobile design</a></Link></li>
                            <li><Link href="/projects"><a>Mobile app</a></Link></li>
                        </ul>
                    </li>
                    <li>
                        <span>Company</span>
                        <ul>
                            <li><Link href="/about"><a>About Us</a></Link></li>
                            <li><Link href="/projects"><a>Our works</a></Link></li>
                            <li><Link href="/about"><a>Our team</a></Link></li>
                        </ul>
                        </li>
                    <li>                  
                        <span>Email</span>
                        <p>rounded@gmail.com</p>
                    </li>
                    <li>
                        <span>Contact</span>
                        <p>+998 90 123 45 67</p>
                    </li>
                </ul>
                <div className="bottom-wrapper">
                    <p>© Copyright 2019 - 2022 Pixoul LLC. All rights reserved.</p>
                    <ul className="bottom-links">
                        <li><span>Privacy Policy</span></li>
                        <li><span>Terms of Service</span></li>
                        <li><span>Legal Disclaimer</span></li>
                    </ul>
                    <ul className="messengers">
                        <li><Image src={telegram} alt="icon"/></li>
                        <li><Image src={instagram} alt="icon"/></li>
                        <li><Image src={youtube} alt="icon"/></li>
                        <li><Image src={facebookicon} alt="icon"/></li>
                    </ul>
                </div>
           </div>
        </footer>
    )
}

export default Footer