import toast from "react-hot-toast";
export type ToastKind = "success" | "error" | undefined;

export class Notifi {
  private static successStyle: React.CSSProperties = {
    backgroundColor: "rgba(0, 25, 50, 0.3)",
    color: "#00ffcc",
    fontFamily: "JetBrains Mono",
    fontSize: "14px",
    padding: "1rem",
    overflowY: "hidden",
    cursor: "text",
    border: "1px solid rgba(0, 255, 204, 0.3)",
    borderRadius: "4px",
    filter: "drop-shadow(0 0 8px rgba(0, 255, 204, 0.5))",
  };
  private static errorStyle: React.CSSProperties = {
    backgroundColor: "rgba(0, 25, 50, 0.3)",
    color: "coral",
    fontFamily: "JetBrains Mono",
    fontSize: "14px",
    padding: "1rem",
    overflowY: "hidden",
    cursor: "text",
    border: "1px solid coral",
    borderRadius: "4px",
    filter: "drop-shadow(0 0 8px rgba(0, 255, 204, 0.5))",
  };
  private static showSuccessMessage = () => {
    toast.success("Success! Message sent to Debajyati!", {
      position: "top-center",
      style: this.successStyle,
    });
  };

  private static showErrorMessage = () => {
    toast.error("Oh no! Couldn't send message!", {
      position: "top-center",
      style: this.errorStyle,
    });
  };

  public static ToastMessage(toastKind: ToastKind): void {
    switch (toastKind) {
      case "success":
        this.showSuccessMessage();
        break;
      case "error":
        this.showErrorMessage();
        break;

      default:
        break;
    }
  }
};
