import figma from "../../assets/images/figma.svg"
import js from "../../assets/images/js.svg"
import photoshop from "../../assets/images/photoshop.png"
import java from "../../assets/images/java.svg"
import node_js from "../../assets/images/node_js.svg"
import bitbucket from "../../assets/images/bitbucket.svg"
import invision from "../../assets/images/invision.svg"
import sketch from "../../assets/images/sketch.svg"
import Image from "next/image"

const Partners = () =>{
    return(
        <div className="partners">
          <div className="partner-wrapper container">
                <p className="title">Partner</p>
                <h1>Our Partners</h1>
                <p className="paragraph">Ornare aliquet purus, sit tellus, posuere potenti feugiat dictum. Amet, sit est nulla et lacus, est congue. Sem et scelerisque.</p>
                <ul>
                    <li>
                        <div className="logo-wrapper">
                            <Image src={figma}/>
                        </div>
                        <span>Figma</span>
                    </li>
                    <li>
                        <div className="logo-wrapper">
                            <Image src={js}/>
                        </div>
                        <span>Java script</span>
                    </li>
                    <li>
                        <div className="logo-wrapper">
                            <Image src={java}/>
                        </div>
                        <span>Java</span>
                    </li>
                    <li>
                        <div className="logo-wrapper">
                            <Image src={photoshop}/>
                        </div>
                        <span>Photoshop</span>
                    </li>
                    <li>
                        <div className="logo-wrapper">
                            <Image src={invision}/>
                        </div>
                        <span>Invision</span>
                    </li>
                    <li>
                        <div className="logo-wrapper">
                            <Image src={bitbucket}/>
                        </div>
                        <span>Bitbucket</span>
                    </li>
                    <li>
                        <div className="logo-wrapper">
                            <Image src={node_js}/>
                        </div>
                        <span>Node js</span>
                    </li>
                    <li>
                        <div className="logo-wrapper">
                            <Image src={sketch}/>
                        </div>
                        <span>Scetch</span>
                    </li>
                </ul>
          </div>
      </div>
    )
}

export default Partners