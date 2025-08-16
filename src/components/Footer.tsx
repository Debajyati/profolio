import React, { Suspense } from "react";
import "../bootstrap/main.css";
const NerfexFrame = React.lazy(() => import("./arwes/frames/NerfexFrame"));
const currentYear = new Date().getFullYear();

const FooterCore = () => (
  <p>
    <b>
      <big>
        <span>&copy; {currentYear} Debajyati Dey</span>
      </big>
    </b>
  </p>
);

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
            <Suspense fallback={<FooterCore />}>
              <NerfexFrame height={25}>
                <FooterCore />
              </NerfexFrame>
            </Suspense>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
