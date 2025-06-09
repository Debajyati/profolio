import type React from "react";
import Background from "./arwes/Background.tsx";

import WorkCard from "./WorkCard";
import { Text } from "@arwes/react";

import NKryptorImg from "../public/NKryptor.png";
import EfficienvimImg from "../public/Efficienvim.png";
import GITFMImg from "../public/GITFM.png";
import ASCIIDONUTImg from "../public/ASCII-DONUT.png";
import ArtiflexImg from "../public/Artiflex-splash-icon.png";
import JSONPARSERImg from "../public/JSON Parser Logo.png";

const workItems = [
  {
    number: "001/006",
    title: "gitFM",
    description:
      "Easy CLI tool to search or clone GitHub/GitLab repositories fully or partially. Never leave your terminal!",
    imageUrl: GITFMImg,
    detailPath: "https://www.npmjs.com/package/gitfm",
  },
  {
    number: "002/006",
    title: "Nkryptor",
    description:
      "Encrypt and Decrypt Images online with various AES Encryption Standard Algorithms",
    imageUrl: NKryptorImg,
    detailPath: "https://nkryptor.streamlit.app/",
  },
  {
    number: "003/006",
    title: "Efficienvim",
    description:
      "A Highly Efficient & Multifaceted Neovim Starter Configuration entirely in lua with Lazy.nvim",
    imageUrl: EfficienvimImg,
    detailPath: "https://github.com/Debajyati/Efficienvim",
  },
  {
    number: "004/006",
    title: "ascii-donut",
    description:
      "A TypeScript library to render ASCII donut animation in terminal. Customizable colors, interval timing, and resolution.",
    imageUrl: ASCIIDONUTImg,
    detailPath: "https://www.npmjs.com/package/ascii-donut",
  },
  {
    number: "005/006",
    title: "Artiflex (WIP)",
    description:
      "AI Image generator,editor and image to prompt generator android app in REACT native. Currently in Development",
    imageUrl: ArtiflexImg,
    detailPath: "https://github.com/Debajyati/Artiflex",
  },
  {
    number: "006/006",
    title: "json-parser",
    description:
      "A JSON Parser in C++",
    imageUrl: JSONPARSERImg,
    detailPath: "https://github.com/Debajyati/json-parser",
  },
];

const Works: React.FC = () => {
  return (
    <>
      <Background />

      <div
        className="section-container"
        style={{
          minHeight: "100vh",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {/* Header Section */}
          <div className="row section-container-spacer">
            <div
              className="col-sm-12 text-center"
              style={{ marginBottom: "3rem" }}
            >
              <Text
                style={{
                  color: "hsl(180, 100%, 50%)",
                  // fontSize: "2.5rem",
                  fontWeight: "bold",
                  margin: 0,
                  padding: 0,
                  top: "12rem",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  textAlign: "center",
                }}
                as="h1"
                className="h2"
              >
                02 : Projects
              </Text>
            </div>
          </div>

          {/* Projects Grid */}
          <div
            className="projects-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
              padding: "0 1rem",
              justifyItems: "center",
            }}
          >
            {workItems.map((item, idx) => (
              <WorkCard
                key={idx}
                number={item.number}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                detailPath={item.detailPath}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
