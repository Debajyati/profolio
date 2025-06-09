import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";
import img404 from "../assets/images/404-Error-Portal-Vortex-Copyright-Debajyati-Dey.png";
import { Animator, FrameCorners } from "@arwes/react";

export type NotFoundModalProps = {
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
  onGoBack?: () => void;
  onHoverEnter?: React.MouseEventHandler;
  onHoverLeave?: React.MouseEventHandler;
};

export type NotFoundModalRef = {
  open: () => void;
  close: () => void;
  isopen: () => boolean | undefined;
};

const NotFoundModal = forwardRef<NotFoundModalRef, NotFoundModalProps>(
  function NotFoundModal(
    { style, onClick, onGoBack }: NotFoundModalProps,
    ref,
  ) {
    const dialog = useRef<HTMLDialogElement | null>(null);
    const frameRef = useRef<SVGSVGElement | null>(null);
    const divRef = useRef<HTMLDivElement | null>(null);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current?.showModal();
        },
        close() {
          dialog.current?.close();
          const currentTarget = frameRef.current as SVGSVGElement;
          if (currentTarget) {
            currentTarget.style.display = "none";
          }
        },
        isopen() {
          return dialog.current?.open;
        },
      };
    });

    const handleGoBack = () => {
      if (onGoBack) {
        onGoBack();
      } else {
        // Default behavior - go back in history
        window.history.back();
      }
    };

    return (
      <Animator>
        <div style={{ position: "relative" }} ref={divRef}>
          <FrameCorners
            elementRef={frameRef}
            style={{
              // @ts-expect-error css variables
              "--arwes-frames-bg-color": "hsl(190, 95%, 15%)", // Deep blue-black
              "--arwes-frames-line-color": "hsl(120, 100%, 35%)", // Hacker green
              "--arwes-frames-deco-color": "hsl(200, 100%, 50%)", // Neon blue
            }}
          />
          <div style={{ position: "relative" }} ref={divRef}>
            <dialog
              className="transparent-modal"
              onClick={onClick}
              style={{
                backgroundColor: "rgba(0, 20, 40, 0.95)",
                border: "2px solid hsl(120, 100%, 35%)",
                borderRadius: "8px",
                padding: "2rem",
                textAlign: "center",
                minWidth: "380px",
                maxWidth: "500px",
                boxShadow: `
                  0 0 20px rgba(0, 255, 100, 0.3),
                  0 0 40px rgba(0, 150, 255, 0.2),
                  inset 0 0 20px rgba(0, 0, 0, 0.5)
                `,
                backdropFilter: "blur(10px)",
                ...style,
              }}
              ref={dialog}
            >
              {/* 404 Heading */}
              <h1
                style={{
                  color: "hsl(180, 75%, 65%)", // Neon blue
                  fontSize: "4rem",
                  fontWeight: "bold",
                  margin: "0 0 1rem 0",
                  textShadow: `
                    0 0 10px hsl(180, 75%, 65%),
                    0 0 20px hsl(200, 100%, 50%),
                    0 0 30px hsl(200, 100%, 40%)
                  `,
                  fontFamily: "monospace",
                  letterSpacing: "0.1em",
                }}
              >
                404
              </h1>

              {/* Error Message */}
              <p
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLParagraphElement;
                  target.style.color = "hsl(120, 100%, 65%)";
                  target.style.textShadow = `
                    0 0 10px hsl(120, 100%, 65%),
                    0 0 15px hsl(120, 100%, 55%)
                  `;
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLParagraphElement;
                  target.style.color = "hsl(120, 100%, 45%)"; // Hacker green
                  target.style.textShadow = "none";
                }}
                style={{
                  color: "hsl(120, 100%, 45%)", // Hacker green
                  fontSize: "1.5rem",
                  margin: "1rem 0 2rem 0",
                  textShadow: `
                    0 0 5px hsl(120, 100%, 45%),
                    0 0 10px hsl(120, 100%, 35%)
                  `,
                  fontFamily: "monospace",
                  letterSpacing: "0.05em",
                }}
              >
                <span>SECTOR NOT FOUND</span>
                <br />
                <span style={{ fontSize: "1.2rem", opacity: 0.8 }}>
                  Requested resource doesn't exist or is moved to Nullvoid
                </span>
              </p>

              {/* Glitch Effect Image/Icon */}
              <div
                style={{
                  margin: "1.5rem 0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    border: "3px solid hsl(120, 100%, 35%)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    color: "hsl(180, 75%, 65%)",
                    boxShadow: `
                      0 0 15px hsl(120, 100%, 35%),
                      inset 0 0 15px rgba(0, 255, 100, 0.2)
                    `,
                    animation: "pulse 2s infinite",
                  }}
                >
                  <big>
                    <img
                      src={img404}
                      height={105}
                      width={105}
                      style={{
                        overflowClipBox: "content-box",
                        clipPath: "circle(50%)",
                      }}
                    />
                  </big>
                </div>
              </div>

              {/* Go Back Button */}
              <Button
                buttonType="button"
                onClick={handleGoBack}
                style={{
                  backgroundColor: "hsl(120, 100%, 20%)",
                  borderColor: "hsl(120, 100%, 35%)",
                  color: "hsl(120, 100%, 80%)",
                  padding: "0.8rem 2rem",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  transition: "all 0.3s ease",
                  boxShadow: `
                    0 0 10px rgba(0, 255, 100, 0.3),
                    inset 0 0 10px rgba(0, 255, 100, 0.1)
                  `,
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLButtonElement;
                  target.style.backgroundColor = "hsl(120, 100%, 25%)";
                  target.style.boxShadow = `
                    0 0 20px rgba(0, 255, 100, 0.5),
                    inset 0 0 15px rgba(0, 255, 100, 0.2)
                  `;
                  target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLButtonElement;
                  target.style.backgroundColor = "hsl(120, 100%, 20%)";
                  target.style.boxShadow = `
                    0 0 10px rgba(0, 255, 100, 0.3),
                    inset 0 0 10px rgba(0, 255, 100, 0.1)
                  `;
                  target.style.transform = "scale(1)";
                }}
                name="click"
              >
                GO BACK HOME
              </Button>

              {/* CSS Animations */}
              <style>{`
                @keyframes pulse {
                  0%, 100% { 
                    opacity: 1;
                    transform: scale(1);
                  }
                  50% { 
                    opacity: 0.7;
                    transform: scale(1.05);
                  }
                }
                
                @keyframes glitch {
                  0%, 100% { transform: translateX(0); }
                  20% { transform: translateX(-2px); }
                  40% { transform: translateX(2px); }
                  60% { transform: translateX(-1px); }
                  80% { transform: translateX(1px); }
                }

                dialog::backdrop {
                  background: rgba(0, 0, 0, 0.8);
                  backdrop-filter: blur(5px);
                }
              `}</style>
            </dialog>
          </div>
        </div>
      </Animator>
    );
  },
);

export default NotFoundModal;
