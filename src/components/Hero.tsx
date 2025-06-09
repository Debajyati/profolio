import React from "react";
import { ReactTyped } from "react-typed";
import "./Hero.module.css";

interface HeroProps {
  backgroundImage: string; // "/assets/images/futuristicHD.jpg"
}

const Hero: React.FC<HeroProps> = ({ backgroundImage }) => {
  const typedStrings = [
    "I'm Debajyati Dey",
    "A Web Developer",
    "Technical Writer",
    "React Native Crafter",
    "Don't Forget to Visit My Awesome Projects",
    "I Build NPM Packages",
    "A Linux Enthusiast",
    "I Build Stunning CLI Tools",
    "Casual NeoVim Enjoyer",
  ];

  const [bgPosition, setBgPosition] = React.useState("center center");

  const handleMouseEnter = () => {
    setBgPosition("55% 45%"); // Shift slightly right and up
  };

  const handleMouseLeave = () => {
    setBgPosition("center center");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    const { left, top, width, height } = target.getBoundingClientRect();

    const x = (e.clientX - left) / width; // normalized X: 0 to 1
    const y = (e.clientY - top) / height; // normalized Y: 0 to 1

    const shiftX = (x - 0.5) * 20; // range: -10 to +10
    const shiftY = (y - 0.5) * 20; // range: -10 to +10

    const newPosX = `calc(50% + ${-shiftX}px)`;
    const newPosY = `calc(50% + ${-shiftY}px)`;

    setBgPosition(`${newPosX} ${newPosY}`);
  };

  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: bgPosition,
  };

  return (
    <div
      className="hero-full-container background-image-container white-text-container background-hover-container"
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="hero-full-wrapper">
              <div className="text-content">
                <h1 style={{ fontFamily: "JetBrains Mono", color: "cyan" }}>
                  Hello,
                  <br />
                </h1>
                <h2 style={{ fontFamily: "JetBrains Mono", color: "cyan" }}>
                  <ReactTyped
                    strings={typedStrings}
                    loop={true}
                    typeSpeed={100}
                    backSpeed={20}
                    showCursor={true}
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
