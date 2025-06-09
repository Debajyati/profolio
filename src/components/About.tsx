import "../bootstrap/main.css";
import type React from "react";
import Background from "./arwes/Background.tsx";
import AboutMePage from "./Terminal/AboutMePage.tsx";
import { Animator, Text } from "@arwes/react";

const About = (): React.JSX.Element => {
  return (
    <>
      <Background />
      <Animator>
      <Text
        style={{
          color: "cyan",
          top: "12rem",
          margin: 0,
          padding: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
        }}
        as="h1"
        className="h2"
      >
        03 : About Me
      </Text>
      </Animator>

      <AboutMePage />
    </>
  );
};
export default About;
