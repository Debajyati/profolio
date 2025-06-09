import { type ReactElement, type ReactNode } from 'react';
import { Animator } from '@arwes/react-animator';
import { FrameNefrex } from '@arwes/react-frames';

interface NerfexFrameProps {
  children?: ReactNode,
  width?: number,
  height?: number
}

const NerfexFrame = ({ children, width = 300, height = 200 }: NerfexFrameProps): ReactElement => {
  return (
    <Animator>
      <div style={{ position: "relative", width: width, height: height }}>
        <FrameNefrex
          style={{
            // @ts-expect-error css variables
            "--arwes-frames-bg-color": "hsl(180, 75%, 10%)",
            "--arwes-frames-line-color": "hsl(180, 75%, 30%)",
            "--arwes-frames-deco-color": "hsl(180, 75%, 50%)",
          }}
        />
        <div style={{ position: "relative", color: "hsl(180, 75%, 50%)" }}>
          {children}
        </div>
      </div>
    </Animator>
  );
};

export default NerfexFrame;
