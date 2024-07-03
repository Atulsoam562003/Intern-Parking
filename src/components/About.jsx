import React from "react";
import ParkingImage from "../Assets/Img/the-ian-U0I2fIlraIo-unsplash.jpg";
import SolutionStep from "./SolutionStep";
// import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={ParkingImage} alt="Parking Lot" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to ParkPal, your ultimate smart parking solution designed to
          simplify and enhance your parking experience. Our innovative platform
          provides real-time parking availability, seamless booking, and
          automated assistance to ensure you find the best parking spots
          effortlessly. ParkPal is committed to revolutionizing urban mobility
          with cutting-edge technology and user-friendly features.
        </p>

        <h4 className="about-text-title">How ParkPal Works</h4>

        <SolutionStep
          title="Find a Parking Spot"
          description="Discover available parking spots in real-time with ParkPal. Our
            platform helps you find the perfect spot quickly and efficiently."
        />

        <SolutionStep
          title="Reserve Your Space"
          description="Reserve your parking space in advance with just a few clicks. ParkPal
            ensures your spot is ready and waiting when you arrive."
        />

        <SolutionStep
          title="Enjoy Hassle-Free Parking"
          description="Experience seamless parking with ParkPal's automated guidance and
            navigation system. Our platform provides step-by-step directions to
            your reserved spot."
        />
      </div>
    </div>
  );
}

export default About;
