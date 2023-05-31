import React from "react";
import Slider from "react-slick";

import hero1 from "./imgs/hero1.jpg";
import hero2 from "./imgs/hero2.jpg";
import hero3 from "./imgs/hero3.jpg";
import Image from "next/image";

const Hero = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    play: true,
  };
  return (
    <div className="hero">
      <div className="container hero__container">
        <div className="hero__carusel">
          <Slider {...settings}>
            <div>
              <img
                className="hero__carusel-imgs"
                src="https://olcha.uz/image/original/sliders/oz/WHLVbKqMOj7Hk3N9jZRpj8k6clJRko6nmzCgHQXabfrhpFmoppkLFca2toxi.png"
                alt="img className='hero__carusel-imgs'"
              />
            </div>
            <div>
              <img
                className="hero__carusel-imgs"
                src="https://olcha.uz/image/original/sliders/oz/o33z6lfn3xxYGFmufGwqND4Y3TEHddvUjy7t8ljcF4cwBCViNi2MfjnzcQ21.png"
                alt="img className='hero__carusel-imgs'"
              />
            </div>
            <div>
              <img
                className="hero__carusel-imgs"
                src="https://olcha.uz/image/original/sliders/oz/PXfohuX8XuA5rBnDeLGvcU6gYA2uDb9osUjGT0VfryoM4SPirR16fDhekpUC.png"
                alt="img className='hero__carusel-imgs'"
              />
            </div>
            <div>
              <img
                className="hero__carusel-imgs"
                src="https://olcha.uz/image/original/sliders/oz/kFB8edbbMAZcB1HUkXyCDx9fjQqV1sllg9t3C6Xz0TQFHZMZ6DpzblIrXujl.png"
                alt="img className='hero__carusel-imgs'"
              />
            </div>
            <div>
              <img
                className="hero__carusel-imgs"
                src="https://olcha.uz/image/original/sliders/oz/PB4N04t5cRHsewA4yuiX3AQJVZLV1LTP4TSgd4RUAoSdJrJsjjYlw3sMtktT.png"
                alt="img className='hero__carusel-imgs'"
              />
            </div>
            <div>
              <img
                className="hero__carusel-imgs"
                src="https://olcha.uz/image/original/sliders/oz/mCwaHTtWCFHmLLQKNrEhXwG3y7k510Q2o0AN8IiS5bRepWwkJnSXWtZPNTfO.jpg"
                alt="img className='hero__carusel-imgs'"
              />
            </div>
          </Slider>
        </div>
        <div className="hero__day">
          <div className="hero__day-el">
            <div className="hero__day-header">
              Kun mahsuloti{" "}
              <div className="hero__day-heaer-timer">
                <span>05</span>: <span>07</span>: <span>56</span>
              </div>
            </div>
            <div className="hero__day-slider">
              <Slider {...settings}>
                <div className="hero__day-card">
                  <div className="hero__day-card-img-box">
                    <Image src={hero1} alt="img" />
                  </div>
                  <h3 className="hero__day-card-title">
                    Simsiz Wi-Fi router Netis W1{" "}
                  </h3>
                  <p className="hero__day-card-text">329 000 so'm</p>
                  <span className="hero__day-card-credet">
                    45 000 so'm x 12 oy
                  </span>

                  <div>
                    <h3 className="hero__day-card-title">
                      Simsiz Wi-Fi router Netis W1{" "}
                    </h3>
                    <p className="hero__day-card-text">329 000 so'm</p>
                    <span className="hero__day-card-credet">
                      45 000 so'm x 12 oy
                    </span>
                  </div>
                </div>

                <div className="hero__day-card">
                  <div className="hero__day-card-img-box">
                    <Image src={hero2} alt="img" />
                  </div>
                  <h3 className="hero__day-card-title">
                    Aqlli soat Huawei Band 7 To‘q kulrang{" "}
                  </h3>
                  <p className="hero__day-card-text">549 000 so'm</p>
                  <span className="hero__day-card-credet">
                    183 000 so'm x 3 oy
                  </span>
                  <div>
                    <h3 className="hero__day-card-title">
                      Aqlli soat Huawei Band 7 To‘q kulrang{" "}
                    </h3>
                    <p className="hero__day-card-text">549 000 so'm</p>
                    <span className="hero__day-card-credet">
                      183 000 so'm x 3 oy
                    </span>
                  </div>
                </div>

                <div className="hero__day-card">
                  <div className="hero__day-card-img-box">
                    <Image src={hero3} alt="img" />
                  </div>
                  <h3 className="hero__day-card-title">
                    shisha choynak 1000ml 451-5{" "}
                  </h3>
                  <p className="hero__day-card-text">88 333 so'm</p>
                  <span className="hero__day-card-credet">
                    13 000 so'm x 12 oy
                  </span>
                  <div>
                    {" "}
                    <h3 className="hero__day-card-title">
                      shisha choynak 1000ml 451-5{" "}
                    </h3>
                    <p className="hero__day-card-text">88 333 so'm</p>
                    <span className="hero__day-card-credet">
                      13 000 so'm x 12 oy
                    </span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
