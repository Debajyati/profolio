import { FrameLines, useFrameAssembler } from "@arwes/react-frames";
import { Animator } from "@arwes/react-animator";
import {
  useRef,
  useState,
  useEffect,
  type ReactElement,
  type ReactNode,
} from "react";

interface LineFrameAssembledProps {
  children: ReactNode;
  width?: number;
  height?: number;
  transparency?: boolean;
}

const LineFrameAssembled = ({
  children,
  width = 320,
  height = 240,
  transparency = false,
}: LineFrameAssembledProps): ReactElement => {
  const elementRef = useRef<SVGSVGElement>(null);
  const [active, setActive] = useState(true);

  useFrameAssembler(elementRef);

  useEffect(() => {
    const tid = setTimeout(() => setActive(!active), active ? 3_000 : 1_500);
    return () => clearTimeout(tid);
  }, [active]);

  return (
    <Animator active={active} duration={{ enter: 1, exit: 1 }}>
      <div
        className="card-container"
        style={{
          position: "relative",
          width: width,
          height: height,
          padding: 0,
          background: "transparent",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <FrameLines
          elementRef={elementRef}
          style={{
            // @ts-expect-error css variables
            "--arwes-frames-bg-color": transparency ? "rgba(0,0,0,0)" : "hsl(130, 40%, 8%)",
            "--arwes-frames-bg-filter":
              "drop-shadow(0 0 4px hsl(130, 40%, 15%))",
            "--arwes-frames-line-color": "hsl(110, 75%, 25%)",
            "--arwes-frames-line-filter":
              "drop-shadow(0 0 2px hsl(110, 75%, 25%))",
            "--arwes-frames-deco-color": "hsl(110.55, 100%, 53.92%)",
            "--arwes-frames-deco-filter":
              "drop-shadow(0 0 4px hsl(110.55, 100%, 53.92%))",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          animated={false}
          padding={2}
        />
        <div 
          style={{ 
            position: "relative",
            color: "hsl(110.55, 100%, 53.92%)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxSizing: "border-box"
          }}
        >
          {children}
        </div>
      </div>
    </Animator>
  );
};

export default LineFrameAssembled;
