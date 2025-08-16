import React from "react";
import { Animator } from "@arwes/react-animator";
import { GridLines, Dots, MovingLines } from "@arwes/react-bgs";

type BackgroundProps = {
  bgType?: "onlygrid" | "full" | "onlyMovingLines";
};

const Background = ({
  bgType = "full",
}: BackgroundProps): React.JSX.Element => {
  const [active, setActive] = React.useState(true);

  React.useEffect(() => {
    const tid = setInterval(() => setActive(!active), active ? 5_000 : 1_000);
    return () => clearTimeout(tid);
  }, [active]);

  if (bgType === "full") {
    return (
      <Animator active={active} duration={{ enter: 1, interval: 10 }}>
        <div
          style={{
            position: "fixed",
            height: "auto",
            inset: 0,
            minHeight: "100%",
            backgroundColor: "#000906",
            backgroundImage:
              "radial-gradient(85% 85% at 50% 50%, hsla(185, 100%, 25%, 0.25) 0%, hsla(185, 100%, 25%, 0.12) 50%, hsla(185, 100%, 25%, 0) 100%)",
            background: "no-repeat center center fixed cover",
          }}
        >
          <GridLines lineColor="hsla(180, 100%, 75%, 0.05)" distance={30} />
          <Dots color="hsla(180, 100%, 75%, 0.05)" distance={30} />
          <MovingLines
            lineColor="hsla(180, 100%, 75%, 0.07)"
            distance={30}
            sets={20}
          />
        </div>
      </Animator>
    );
  }

  if (bgType === "onlyMovingLines") {
    return (
      <Animator active={active} duration={{ enter: 1, interval: 10 }}>
        <div
          style={{
            position: "fixed",
            height: "auto",
            inset: 0,
            minHeight: "100%",
            backgroundColor: "#000906",
            backgroundImage:
              "radial-gradient(85% 85% at 50% 50%, hsla(185, 100%, 25%, 0.25) 0%, hsla(185, 100%, 25%, 0.12) 50%, hsla(185, 100%, 25%, 0) 100%)",
            background: "no-repeat center center fixed cover",
          }}
        >
          <Dots color="hsla(180, 100%, 75%, 0.05)" distance={30} />
          <MovingLines
            lineColor="hsla(180, 100%, 75%, 0.07)"
            distance={30}
            sets={20}
          />
        </div>
      </Animator>
    );
  }
  return (
    <div
      style={{
        backgroundColor: "#000906",
        backgroundImage:
          "radial-gradient(85% 85% at 50% 50%, hsla(185, 100%, 25%, 0.25) 0%, hsla(185, 100%, 25%, 0.12) 50%, hsla(185, 100%, 25%, 0) 100%)",
      }}
    >
      <GridLines
        lineColor="hsla(180, 100%, 75%, 0.5)"
        style={{ backgroundColor: "black" }}
      />
    </div>
  );
};

export default Background;
