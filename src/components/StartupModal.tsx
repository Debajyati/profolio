import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";
import { Animator, FrameCorners } from "@arwes/react";

export type modalProps = {
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler;
    onHoverEnter?: React.MouseEventHandler;
    onHoverLeave?: React.MouseEventHandler;
};

export type modalRef = {
    open: () => void;
    close: () => void;
    isopen: () => boolean | undefined;
};

const StartupModal = forwardRef<modalRef, modalProps>(function Modal(
    { style, onClick }: modalProps,
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
                currentTarget.style.display = "none";
            },
            isopen() {
                return dialog.current?.open;
            },
        };
    });
    return (
        <Animator>
            <div style={{ position: "relative" }} ref={divRef}>
                <FrameCorners
                    elementRef={frameRef}
                    style={{
                        // @ts-expect-error css variables
                        "--arwes-frames-bg-color": "hsl(180, 75%, 10%)",
                        "--arwes-frames-line-color": "hsl(180, 75%, 30%)",
                        "--arwes-frames-deco-color": "hsl(180, 75%, 50%)",
                    }}
                />
                <div style={{ position: "relative" }} ref={divRef}>
                    <dialog className="transparent-modal" onClick={onClick} style={style} ref={dialog}>
                        <h2 style={{ color: "hsl(180, 75%, 45%)" }}>WELCOME, VISITOR!</h2>
                        <big>
                            <p>
                                <span>My Portfolio Uses Sound Effects</span>
                            </p>
                            <p>
                                <span>CLICK IF YOU ARE PREPARED</span>
                            </p>
                        </big>
                        <Button
                            buttonType="button"
                            style={{
                                backgroundColor: "hsl(180, 75%, 25%)",
                                borderColor: "hsl(180, 75%, 45%)",
                            }}
                            name="click"
                        >
                            ENTER
                        </Button>
                    </dialog>
                </div>
            </div>
        </Animator>
    );
});

export default StartupModal;
