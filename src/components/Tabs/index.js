import React, { useState } from "react";
import { Radio } from "antd";
import pro1 from "../../assets/images/pro1.png"
import pro2 from "../../assets/images/pro2.png"
import pro3 from "../../assets/images/pro3.png"
import pro4 from "../../assets/images/pro4.png"
import Image from "next/image"

const TabBar = () => {

  const data = [
    {
      img: pro1,
      product: "ios",
      title:"Online school mobile and web app",
      description: "Website / Birzoom",
      id:1,

    },
    {
      img: pro2,
      product: "android",
      title:"Online school mobile and web app",
      description: "Website / Birzoom",
      id:2
    },
    {
      img: pro3,
      product: "desktop",
      title:"Online school mobile and web app",
      description: "Website / Birzoom",
      id:3
    },
    {
      img: pro4,
      product: "web",
      title:"Online school mobile and web app",
      description: "Website / Birzoom",
      id:4
    },
    {
      img: pro1,
      product: "desktop",
      title:"Online school mobile and web app",
      description: "Website / Birzoom",
      id:5
    },
    {
      img: pro2,
      product: "android",
      title:"Online school mobile and web app",
      description: "Website / Birzoom",
      id:6
    },
    {
      img: pro3,
      product: "web",
      title:"Online school mobile and web app",
      description: "Website / Birzoom",
      id:7
    },
    {
      img: pro4,
      product: "ios",
      title:"Online school mobile and web app",
      description: "Website / Birzoom",
      id:8
    },
    {
      img: pro4,
      product: "tv",
      title:"Online school mobile and web app",
      description: "Website / Birzoom",
      id:9
    },
  ]


  const [value,setValue] = useState("all")
  const getValue = (evt=>{
    setValue(evt.target.value)
  })

  
  return (
    <>
      <Radio.Group onChange={getValue} defaultValue="all" buttonStyle="solid" className="tabbar">
        <Radio.Button value="all">All projects</Radio.Button>
        <Radio.Button value="ios">IOS</Radio.Button>
        <Radio.Button value="android">Android</Radio.Button>
        <Radio.Button value="desktop">Desktop</Radio.Button>
        <Radio.Button value="web">Web & Cloud</Radio.Button>
        <Radio.Button value="tv">Smart TV</Radio.Button>
      </Radio.Group>

      <ul className="product-list">
          {
            data && data.filter((item)=>{
              if(value === "all"){
                return data
              }else if(item.product===value){
                return item

              }
            }).map(row=>(
              <li key={row.id}>
                <div className="img-wrapper">
                  <Image src={row.img}/>
                </div>
                <h1>{row.title}</h1>
                <span>{row.description}</span>
              </li>
            ))
          }
      </ul>
    </>
  );
};

export default TabBar;

