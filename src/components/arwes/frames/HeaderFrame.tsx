import { type ReactElement } from "react";
import { Animator } from "@arwes/react-animator";
import { FrameHeader } from "@arwes/react-frames";

const HeaderFrame = (): ReactElement => {
  return (
    <Animator>
      <div style={{ position: "relative", width: 300, height: 30 }}>
        <FrameHeader
          style={{
            margin: "1rem",
            marginLeft: 0,
            padding: "5px",
            paddingLeft: "2px",
            // @ts-expect-error css variables
            "--arwes-frames-bg-color": "hsl(180, 75%, 10%)",
            "--arwes-frames-line-color": "hsl(180, 75%, 30%)",
            "--arwes-frames-deco-color": "hsl(180, 75%, 50%)",
          }}
          contentLength={60}
        />
        <div
          style={{
            position: "relative",
            color: "cyan",
            font: "500 21px JetBrains Mono",
            margin: "1rem",
            marginLeft: 0,
            padding: "5px",
            paddingLeft: "2px",
          }}
        >
          MENU
        </div>
      </div>
    </Animator>
  );
};

export default HeaderFrame;
