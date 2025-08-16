import React, { lazy, Suspense } from "react";
import "../bootstrap/main.css";
const Hero = lazy(() => import("./Hero"));
import backgroundImage from "../assets/images/Alien-Spaceship-by-Debajyati-Dey.png";

const borderIds = [
  "site-border-left",
  "site-border-right",
  "site-border-top",
  "site-border-bottom",
];

const SuspenseFallBack = () => (
  <div
    className="hero-full-container background-image-container white-text-container background-hover-container"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="hero-full-wrapper">
            <div className="text-content">
              <h1 style={{ color: "cyan" }}>
                Hello,
                <br />
              </h1>
              <h2 style={{ color: "cyan" }}>I'm Debajyati Dey</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Home = (): React.JSX.Element => {
  return (
    <>
      {borderIds.map((id, index) => (
        <div key={index} id={id}></div>
      ))}
      <Suspense fallback={<SuspenseFallBack />}>
        <Hero backgroundImage={backgroundImage} />
      </Suspense>
    </>
  );
};

export default Home;
