import React from "react";
import "../bootstrap/main.css";
import NerfexFrame from "./arwes/frames/NerfexFrame";
const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        fontFamily: "JetBrains Mono",
        position: "fixed",
        textAlign: "center",
        color: "white",
        margin: "auto",
        padding: "10px",
        bottom: 0,
        left: "25%",
        right: "25%",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <NerfexFrame height={25}>
            <p>
              <b>
                <big>
                  <span>&copy; {currentYear} Debajyati Dey</span>
                </big>
              </b>
            </p>
            </NerfexFrame>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
