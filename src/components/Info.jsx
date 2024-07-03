import React from "react";
import InformationCard from "./InformationCard";
import {
  faParking,
  faCarSide,
  faMapSigns,
} from "@fortawesome/free-solid-svg-icons";
// import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          ParkPal revolutionizes the way you find and manage parking. Our
          comprehensive smart parking solutions are designed to provide you with
          seamless, efficient, and convenient parking experiences. Discover how
          ParkPal can make your parking hassle-free and more efficient.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Smart Parking Management"
          description="Our Smart Parking Management service provides real-time parking
            availability and easy booking options. Whether you're looking for a
            spot in a busy city center or a reserved parking space at an event,
            ParkPal ensures you find the best spot quickly and effortlessly."
          icon={faParking}
        />

        <InformationCard
          title="Automated Parking Assistance"
          description="ParkPal's Automated Parking Assistance uses state-of-the-art
            technology to guide you to your parking spot with precision. From
            entry to exit, our system ensures a smooth parking experience,
            reducing the time and stress associated with finding parking."
          icon={faCarSide}
        />

        <InformationCard
          title="Navigation and Guidance"
          description="With ParkPal's Navigation and Guidance services, you can navigate
            complex parking structures with ease. Our intuitive guidance system
            helps you find your way, ensuring you never get lost and always
            know where your vehicle is parked."
          icon={faMapSigns}
        />
      </div>
    </div>
  );
}

export default Info;
