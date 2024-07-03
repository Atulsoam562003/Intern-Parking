import React, { useEffect, useState } from "react";
// import Doctor from "../Assets/doctor-picture.png";
import Parking from "../Assets/Img/meric-dagli-wGDNPxpNJuY-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          {/* <p className="text-headline">❤️ Health comes first</p> */}
          <p className="text-headline">
            Say Goodbye to Parking Hassles with ParkPal!
          </p>

          <h2 className="text-title">Find Your Parking Space and Book It!!!</h2>
          <p className="text-descritpion">
            Discover hassle-free parking solutions with ParkPal. Whether you
            need a spot for a quick visit or long-term parking, ParkPal has you
            covered. Enjoy convenient booking, secure payments, and real-time
            availability.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Parking
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>200k+</p>
              <p>Parking Spots Managed</p>
            </div>

            <div className="text-stats-container">
              <p>100+</p>
              <p>Smart Parking Locations</p>
            </div>

            <div className="text-stats-container">
              <p>5+</p>
              <p>Years of Smart Parking Solutions</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Parking} alt="Parking Space" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
