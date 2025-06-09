import { type ReactElement, type ReactNode } from 'react';
import { Animator } from '@arwes/react-animator';
import { FrameNero } from '@arwes/react-frames';

interface NeroFrameProps {
  children?: ReactNode,
  width?: number,
  height?: number,
  frameBGColor?: React.CSSProperties["color"],
  frameDecoColor?: React.CSSProperties["color"],
  color?: React.CSSProperties["color"],
}

const NeroFrame = ({ children, width = 300,color= "hsl(180, 75%, 50%)", height = 200, frameBGColor="hsl(180, 85%, 10%)", frameDecoColor="hsl(180, 75%, 50%)" }: NeroFrameProps): ReactElement => {
  return (
    <Animator>
      <div style={{ position: "relative", width: width, height: height }}>
        <FrameNero
          style={{
            // @ts-expect-error css variables
            "--arwes-frames-bg-color":  frameBGColor,
            "--arwes-frames-line-color": "hsl(180, 75%, 30%)",
            "--arwes-frames-deco-color": frameDecoColor,
          }}
        />
        <div style={{ position: "relative", color: color }}>
          {children}
        </div>
      </div>
    </Animator>
  );
};

export default NeroFrame;

