import React, { useState } from "react";
import { Text } from "@arwes/react";
import SciFiTerminal from "./SciFiTerminal";
import ExternalDisplay from "./ExternalDisplay";

type ExternalContentType = "pfp" | "skills" | "socials" | null;

const AboutMePage: React.FC = () => {
  const [externalContent, setExternalContent] =
    useState<ExternalContentType>(null);
  const [isTerminalActive, setIsTerminalActive] = useState(true);

  const handleShowCommand = (contentType: ExternalContentType) => {
    setExternalContent(contentType);
  };

  const disableTerminal = () => {
    setIsTerminalActive(false);
  };

  if (!isTerminalActive) {
    return (
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: "1.2rem" }}>
          Terminal session ended. Refresh to restart.
        </Text>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", flex: "1", flexWrap: "wrap" }}>
        <div
          style={{
            height: "100%",
            minHeight: "100%",
            overflowY: "auto",
            width: "100%",
            padding: "1rem",
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "10rem",
            marginBottom: "10rem",
          }}
        >
          <Text
            style={{
              marginBottom: "1rem",
              fontSize: "0.9rem",
              opacity: 0.7,
            }}
          >
            GUEST CONSOLE
          </Text>
          <div style={{ flex: 1 }}>
            <SciFiTerminal
              shutdownTerminal={disableTerminal}
              onShowCommand={handleShowCommand}
            />
          </div>
        </div>
      </div>

      {/* External Display Section */}

      {externalContent && (
        <div style={{ flex: "0 0 auto" }}>
          <div
            style={{
              padding: "1rem",
              minHeight: "150px",
              position: "relative",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                marginBottom: "1rem",
                fontSize: "0.9rem",
                opacity: 0.7,
              }}
            >
              VISUAL OUTPUT
            </Text>
            <ExternalDisplay contentType={externalContent} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMePage;
