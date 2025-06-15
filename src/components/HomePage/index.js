import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import videoSrc from "./Videos/Precizna Poljoprivreda v3.mp4";
import videoSrcMobile from "./Videos/Precizna Poljoprivreda za Telefon v3.mp4";
import { HeadphoneOff, Headphones } from "lucide-react";

import "./HomePage.css";

const HomePageSection = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
  if (desktopVideoRef.current) {
    desktopVideoRef.current.muted = muted;
  }
  if (mobileVideoRef.current) {
    mobileVideoRef.current.muted = muted;
  }

    if (!muted) {
      if (window.innerWidth >= 768) {
        if (desktopVideoRef.current) {
          desktopVideoRef.current.muted = false;
        }
        if (mobileVideoRef.current) {
          mobileVideoRef.current.muted = true;
        }
      } else {
        if (desktopVideoRef.current) {
          desktopVideoRef.current.muted = true;
        }
        if (mobileVideoRef.current) {
          mobileVideoRef.current.muted = false;
        }
      }
    }
  }, [muted]);

  useEffect(() => {
    if (currentSlide === 0) {
      if (desktopVideoRef.current) {
        if (desktopVideoRef.current.readyState >= 3) {
          desktopVideoRef.current.play().catch((error) => {
            console.log("Error playing desktop video:", error);
          });
        } else {
          console.log("Desktop video is not ready to play yet");
        }
      }

      if (mobileVideoRef.current) {
        if (mobileVideoRef.current.readyState >= 3) {
          mobileVideoRef.current.play().catch((error) => {
            console.error("Error playing mobile video:", error);
          });
        } else {
          console.log("Mobile video is not ready to play yet");
        }
      }
    } else {
      if (desktopVideoRef.current) {
        const currentDesktopTime = desktopVideoRef.current.currentTime;
        desktopVideoRef.current.pause();
      }
      if (mobileVideoRef.current) {
        const currentMobileTime = mobileVideoRef.current.currentTime;
        mobileVideoRef.current.pause();
      }
    }
  }, [currentSlide]);

  const handleButtonClick = (id) => {
    navigate(`/Prodaja/${id}`);
  };

  const handleMuteToggle = () => {
    setMuted((prevState) => !prevState);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    afterChange: (index) => {
      console.log("Slider changed to index:", index);
      setCurrentSlide(index);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0", padding: "0px", display: "flex" }}>
          {dots}
        </ul>
      </div>
    ),
  };
  return (
    <div id="home" className="home-page-container">
      <Slider className="slider" ref={sliderRef} {...settings}>
        <div className="slide-content">
          {/* Desktop video */}
          <video
            ref={desktopVideoRef}
            className="responsive-video desktop-video"
            controlsList="nodownload nofullscreen noremoteplayback"
            autoPlay
            loop
            muted={muted}
            playsInline
            style={{
              width: "100%",
              height: "750px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
            poster="putanja/do/poster-slike.jpg"
          >
            <source src={videoSrc} type="video/mp4" />
            Vaš browser ne podržava video tag.
          </video>
          {/* Mobile video */}
          <video
            ref={mobileVideoRef}
            className="responsive-video mobile-video"
            autoPlay
            loop
            muted={muted}
            playsInline
            style={{
              width: "100%",
              height: "620px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
            poster="putanja/do/poster-slike.jpg"
          >
            <source src={videoSrcMobile} type="video/mp4" />
            Vaš browser ne podržava video tag.
          </video>
          <button onClick={handleMuteToggle} className="mute-btn">
            {muted ? <Headphones /> : <HeadphoneOff />}
          </button>
        </div>
        <div className="slide-content">
          <div className="text-content">
            <h1>DJI AGRAS T50</h1>
            <p>Moćan, Precizan, Inovativan</p>
            <button
              className="learn-more-button"
              onClick={() => handleButtonClick("DJI-Agras-T50")}
            >
              Saznaj Više
            </button>
          </div>
          <img className="responsive-image image1" alt="DJI AGRAS T50" />
        </div>
        <div className="slide-content">
          <div className="text-content">
            <h1>DJI AGRAS T25</h1>
            <p>Manji, Inteligentniji i Snažniji</p>
            <button
              className="learn-more-button"
              onClick={() => handleButtonClick("DJI-Agras-T25")}
            >
              Saznaj Više
            </button>
          </div>
          <img className="responsive-image image2" alt="DJI AGRAS T25" />
        </div>
        <div className="slide-content">
          <div className="text-content">
            <h1>DJI MAVIC 3M</h1>
            <p>Vidi više, Radi pametnije</p>
            <button
              className="learn-more-button"
              onClick={() => handleButtonClick("DJI-Mavic-3M")}
            >
              Saznaj Više
            </button>
          </div>
          <img className="responsive-image image3" alt="DJI MAVIC 3M" />
        </div>
      </Slider>
      <div
        className="custom-arrow custom-arrow-prev"
        onClick={() => sliderRef.current.slickPrev()}
      />
      <div
        className="custom-arrow custom-arrow-next"
        onClick={() => sliderRef.current.slickNext()}
      />
    </div>
  );
};

export default HomePageSection;