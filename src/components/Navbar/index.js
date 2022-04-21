import React, { useState, useEffect, useRef } from "react";
import { Tabs, Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Rounded from "../../assets/images/Rounded.svg";
import RoundedW from "../../assets/images/rounded-white.png";
import { Menu, Dropdown } from "antd";
import globe from "../../assets/images/globe.svg";
import Eng from "../../assets/images/Eng.png";
import Ru from "../../assets/images/Ru.png";
import Uz from "../../assets/images/Uz.png";
import whiteglobe from "../../assets/images/whiteglobe.svg"

const { TabPane } = Tabs;
function callback(key) {
  console.log();
}

const Navbar = () => {
  const { pathname } = useRouter();
  const [ theme, setTheme] = useState(false)
  const [currentTab, setCurrentTab] = useState("");

  useEffect(() => {
    const path = pathname;
    if (path === "/") {
      setCurrentTab("5");
    } else if (path === "/services") {
      setCurrentTab("2");
    } else if (path === "/projects") {
      setCurrentTab("3");
    } else if (path === "/contact") {
      setCurrentTab("4");
    } else if (path === "/about") {
      setCurrentTab("1");
    }
  });

  const nav = useRef("blue-theme")


  const [logo , setLogo] = useState(Rounded)
  
 useEffect(()=>{
    if (pathname === "/contact") {
      setTheme(true)
    } else {
      setTheme(false)
    }
 },[pathname])

  
  const [lang, setLang] = useState("Eng");
  const menuLang = (
    <Menu>
      <Menu.Item key={1} onClick={() => setLang("Eng")}>
        <div className="language">
          <div className="lang-img-wrapper">
            <Image src={Eng} />
          </div>
          <span>English</span>
        </div>
      </Menu.Item>
      <Menu.Item key={2} onClick={() => setLang("Ru")}>
        <div className="language">
          <div className="lang-img-wrapper">
            <Image src={Ru} />
          </div>
          <span>Русский</span>
        </div>
      </Menu.Item>
      <Menu.Item key={3} onClick={() => setLang("Uz")}>
        <div className="language">
          <div className="lang-img-wrapper">
            <Image src={Uz} />
          </div>
          <span>O'zbek</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <section ref={nav} className={theme ? "navbar blue-theme":"navbar"}>
      <div className="wrapper navcontainer">
        <div className="logo-wrapper">
          <Link href={"/"}>
            <a><Image src={ theme ? RoundedW : Rounded} /></a>
          </Link>
        </div>
        <div className="nav-wrapper">
              <div className="tabs-wrapper">
              <Tabs activeKey={currentTab} onChange={callback}>
              <TabPane key="5">
              </TabPane>
                <TabPane tab={<Link href="/about"><a className="navlink">About Us</a></Link>} key="1">
                
                </TabPane>
                <TabPane tab={<Link href="/services"><a className="navlink">Our Services</a></Link>} key="2">
                  
                </TabPane>
                <TabPane tab={<Link href="/projects"><a className="navlink">Our Projects</a></Link>} key="3">
                  
                </TabPane>
                <TabPane tab={<Link href="/contact"><a className="navlink">Contact</a></Link>} key="4">
                  
                </TabPane>
              </Tabs>
            </div>
          <div className="user">
          <Dropdown overlay={menuLang} trigger={['click']} placement="bottomRight">
              <div className="user-lang">
                <div className="globe-wrapper">
                  <Image src={ theme ? whiteglobe : globe} alt="icon"/>
                </div>
                <span>{lang}</span>
              </div>
            </Dropdown>
          </div>
          <Button className="border-31 ligth-btn">Start project</Button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
