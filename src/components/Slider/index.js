import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';
// import { React } from 'react';
import bcg from "../../assets/images/dframe.svg"
import Image from "next/image"
import ellipse from "../../assets/images/Ellipse.svg"
import user1 from "../../assets/images/user1.png"
import user2 from "../../assets/images/user2.png"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/controller'
import "swiper/css/keyboard"
import "swiper/css/navigation"
import "swiper/css/navigation"
const Slider = () => {
    // const swiper = useSwiper();
  return (
      
   <section className='slider-wrapper'>
        <div className="bcg">
          <Image src={bcg}/>
      </div>
      <div className="bcg2">
        <Image src={ellipse}/>
      </div>
      <div className="title">
      <span>Feedback</span>
      <h1>What’s our customer say</h1>
      <p>Amet proin vel in eleifend euismod molestie est nullam tincidunt. Quis suspendisse ultrices arcu enim id ante. Non fames cursus rhoncus gravida eleifend tincidunt.</p>
      </div>
    <Swiper className='slider'
      loop={true}
      navigation={{
        prevEl:".prev",
        nextEl:".next"
    }}
      modules={[Navigation]}
      spaceBetween={38}
      slidesPerView={2}
      controller={true}
      keyboard={true}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('')}
      onSwiper={(swiper) => console.log(swiper)}
    >
   
      
      <SwiperSlide className='items'>
          <div className="box">
            <div className="user">
              <div className="userimg">
                <Image src={user1}/>
              </div>
              <div className="username">
                <h1>Jonh Swifth</h1>
                <span>CEO and Founder “One thing”</span>
              </div>
            </div>
            <p className='overal'>Nunc odio nunc dui interdum. Ultricies tincidunt nunc, viverra vitae maecenas feugiat. Odio gravida rhoncus ornare nunc nunc. Ligula amet aliquet quis in gravida bibendum ipsum. Rhoncus ante aenean enim, vivamus ullamcorper amet. Eu ut potenti dolor nulla ut. Tellus urna habitant semper vitae at. </p>
          </div>

      </SwiperSlide>
      <SwiperSlide className='items'>
      <div className="box">
            <div className="user">
              <div className="userimg">
                <Image src={user2}/>
              </div>
              <div className="username">
                <h1>Abadam Faluq</h1>
                <span>CEO and Founder “One thing”</span>
              </div>
            </div>
            <p>Amet proin eu etiam justo. Porttitor egestas rhoncus gravida eget et in pharetra blandit condimentum. Imperdiet urna, enim neque sed ultrices ullamcorper. Faucibus at luctus sit porttitor lectus. Scelerisque enim non, tellus ut scelerisque tellus nulla. Et diam neque tellus fermentum. Odio purus egestas id venenatis id etiam nisi cum. Pellentesque massa habitant justo, nullam nec id</p>
          </div>
      </SwiperSlide>
      <SwiperSlide className='items'>
      <div className="box">
            <div className="user">
              <div className="userimg">
                <Image src={user1}/>
              </div>
              <div className="username">
                <h1>Jonh Swifth</h1>
                <span>CEO and Founder “One thing”</span>
              </div>
            </div>
            <p className='overal'>Nunc odio nunc dui interdum. Ultricies tincidunt nunc, viverra vitae maecenas feugiat. Odio gravida rhoncus ornare nunc nunc. Ligula amet aliquet quis in gravida bibendum ipsum. Rhoncus ante aenean enim, vivamus ullamcorper amet. Eu ut potenti dolor nulla ut. Tellus urna habitant semper vitae at. </p>
          </div>
      </SwiperSlide>
      <SwiperSlide className='items'>
      <div className="box">
            <div className="user">
              <div className="userimg">
                <Image src={user2}/>
              </div>
              <div className="username">
                <h1>Abadam Faluq</h1>
                <span>CEO and Founder “One thing”</span>
              </div>
            </div>
            <p>Amet proin eu etiam justo. Porttitor egestas rhoncus gravida eget et in pharetra blandit condimentum. Imperdiet urna, enim neque sed ultrices ullamcorper. Faucibus at luctus sit porttitor lectus. Scelerisque enim non, tellus ut scelerisque tellus nulla. Et diam neque tellus fermentum. Odio purus egestas id venenatis id etiam nisi cum. Pellentesque massa habitant justo, nullam nec id</p>
          </div>
      </SwiperSlide>
      <div className="buttons">
      <div className="prev">
                <div className="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12L5 12"   />
                    <path d="M9 8L5 12"  />
                    <path d="M9 16L5 12"  />
                    </svg>
                </div>
              </div>
              <div className="next">
                <div className="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L19 12"  />
                    <path d="M15 8L19 12"   />
                    <path d="M15 16L19 12"   />
                    </svg>
                </div>
              </div>
      </div>
    </Swiper>
    {/* <button onClick={() => swiper.slideNext()}>Slide to the next slide</button> */}
   </section>
    
  );
};

export default Slider

