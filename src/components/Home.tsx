import type React from "react";
import "../bootstrap/main.css";
import Hero from "./Hero";
import backgroundImage from "../assets/images/futuristicHD.jpg";

const borderIds = [
  "site-border-left",
  "site-border-right",
  "site-border-top",
  "site-border-bottom",
];

const Home = (): React.JSX.Element => {
  return (
    <>
      {borderIds.map((id,index) => (
        <div key={index} id={id}></div>
      ))}

      <Hero backgroundImage={backgroundImage} />
    </>
  );
};

export default Home;
