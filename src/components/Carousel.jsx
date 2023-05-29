import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Carousel.css";
import logo from "../assets/img/hola.svg";

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        centerMode: true
    };
  return (
    <div className="my-carousel">
      <Slider {...settings}>
        <div className="slide">
          <div className="image-container">
            <img src={logo} alt="HBO" className="highlighted"/>
            <img src="https://art-gallery-latam.api.hbo.com/images/GZAZHkgS32aXCwgEAAANK/tile?v=e0341c212cb3c6da6e023c2915c02eaa&size=3840x2160&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:max-originals&language=en-us" alt="Slide 1" />
            <div className="caption0">
              <img src="https://art-gallery-latam.api.hbo.com/images/GZAZHkgS32aXCwgEAAANK/logoburnedinleft?v=0ae6a807b2e38f423fbc59c960ae33e1&size=560x169&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&language=en-us" className="hbo"/>
              <p style={{ fontSize: "16px" }}><b>Las historias que amas y nuevas por descubrir</b></p>
              <p style={{ fontSize: "20px" }}>Reproduce las mejores peliculas, series, originals y mas</p>
              <button class="hbo-button"><b>👻 SUSCRIBIRSE AHORA</b></button>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="image-container">
            <img src={logo} alt="HBO" className="highlighted"/><img src="https://art-gallery-latam.api.hbo.com/images/GYyofRQHeuJ6fiQEAAAEy/tile?v=d525ce85f6f6c9b1bac93fba626878c8&size=2320x1305&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:hbo&language=en-us" alt="Slide 2" />
            <div className="caption0">
              <img src="https://art-gallery-latam.api.hbo.com/images/GYyofRQHeuJ6fiQEAAAEy/logoburnedinleft?v=456b77c3e212cdd3edd0384f9c11926f&size=560x169&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&language=en-us" className="hbo"/>
              <p style={{ fontSize: "16px" }}><b>Las historias que amas y nuevas por descubrir</b></p>
              <p style={{ fontSize: "20px" }}>Reproduce las mejores peliculas, series, originals y mas</p>
              <button class="hbo-button"><b>👻 SUSCRIBIRSE AHORA</b></button>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="image-container">
            <img src={logo} alt="HBO" className="highlighted"/><img src="https://art-gallery-latam.api.hbo.com/images/GYsYeoAxKH8LCwgEAAAOR/tile?v=fb853c19425cf7e9b6356f63cfaee215&size=2320x1305&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:hbo&language=en-us" alt="Slide 3" />
            <div className="caption0">
              <img src="https://art-gallery-latam.api.hbo.com/images/GYsYeoAxKH8LCwgEAAAOR/logoburnedinleft?v=5e9b67e283e162a1fd4af4bc81fc1389&size=1040x313&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&language=en-us" className="hbo"/>
              <p style={{ fontSize: "16px" }}><b>Las historias que amas y nuevas por descubrir</b></p>
              <p style={{ fontSize: "20px" }}>Reproduce las mejores peliculas, series, originals y mas</p>
              <button class="hbo-button"><b>👻 SUSCRIBIRSE AHORA</b></button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
