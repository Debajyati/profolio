import { type ReactElement, type ReactNode } from 'react';
import { Animator } from '@arwes/react-animator';
import { FrameCorners } from '@arwes/react-frames';

interface CornerFrameProps {
  children?: ReactNode,
  width?: number,
  height?: number,
  transparency?: boolean
}

const CornerFrame = ({children, width=300, height=200, transparency=false}: CornerFrameProps): ReactElement => {
  return (
    <Animator>
      <div style={{ position: "relative", width: width, height: height }}>
        <FrameCorners
          style={{
            // @ts-expect-error css variables
            "--arwes-frames-bg-color": transparency
              ? "none"
              : "hsl(180, 75%, 10%)",
            "--arwes-frames-line-color": "hsl(180, 75%, 30%)",
            "--arwes-frames-deco-color": "hsl(180, 75%, 50%)",
          }}
        />
        <div
          style={{ position: "relative", fontFamily: "tomorrow" }}
        >
          {children}
        </div>
      </div>
    </Animator>
  );
};

export default CornerFrame;
