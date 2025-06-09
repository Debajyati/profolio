import React from "react";
import { Text } from "@arwes/react";
import profilePic from "../../assets/images/profile.jpg";
import { skills, skillStyle } from "../../constants/skills";
import { linksArray } from "../../constants/links";
import { allIconsArray } from "../../constants/SocialsArray";
import { transformParallel } from "../../algorithm";

interface ExternalDisplayProps {
  contentType: "pfp" | "skills" | "socials" | null;
}

const MyPFPImage = () => (
  <div style={{ textAlign: "center" }}>
    <Text style={{ marginBottom: "1rem", color: "#00ffcc" }}>
      Profile Picture
    </Text>
    <img
      src="https://avatars.githubusercontent.com/u/127122455?v=4"
      alt="Profile"
      onError={(e) => (e.currentTarget.src = profilePic)}
      style={{
        maxWidth: "150px",
        height: "auto",
        borderRadius: "8px",
        border: "2px solid #00ffcc",
        boxShadow: "0 0 20px rgba(0, 255, 204, 0.3)",
      }}
    />
  </div>
);

const SkillBadges = () => (
  <div>
    <Text
      style={{ marginBottom: "1rem", color: "#00ffcc", textAlign: "center" }}
    >
      Tech Stack
    </Text>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {skills.map(({ src, title }, index) => (
        <img
          key={index}
          src={src}
          alt={title}
          title={title}
          style={skillStyle}
        />
      ))}
    </div>
  </div>
);

const mouseOverEventHandler = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) => {
  e.currentTarget.style.transform = "scale(1.1)";
  e.currentTarget.style.filter = "drop-shadow(0 0 12px rgba(0, 255, 204, 0.8))";
};
const mouseOutEventHandler = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) => {
  e.currentTarget.style.transform = "scale(1)";
  e.currentTarget.style.filter = "drop-shadow(0 0 8px rgba(0, 255, 204, 0.5))";
};

const SocialIcons = () => (
  <div>
    <Text
      style={{ marginBottom: "1rem", color: "#00ffcc", textAlign: "center" }}
    >
      Connect With Me
    </Text>
    <div
      style={{
        display: "flex",
        gap: "15px",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {transformParallel(allIconsArray,linksArray,(Icon,link,idx)=> (
        <a
          key={idx}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#00ffcc",
            transition: "all 0.3s ease",
            filter: "drop-shadow(0 0 8px rgba(0, 255, 204, 0.5))",
          }}
          onMouseOver={mouseOverEventHandler}
          onMouseOut={mouseOutEventHandler}
        >
          <Icon />
        </a>
      ))}
    </div>
  </div>
);

const ExternalDisplay: React.FC<ExternalDisplayProps> = ({ contentType }) => {
  if (!contentType) {
    return null;
  }

  switch (contentType) {
    case "pfp":
      return <MyPFPImage />;
    case "skills":
      return <SkillBadges />;
    case "socials":
      return <SocialIcons />;
    default:
      return null;
  }
};

export default ExternalDisplay;
