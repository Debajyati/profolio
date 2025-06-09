import React, { useEffect, useRef, useState } from "react";
import { links as socials } from "../../constants/links";
import { translucentTexture } from "../../constants/translucent";

interface SciFiTerminalProps {
  onShowCommand: (contentType: "pfp" | "skills" | "socials" | null) => void;
  shutdownTerminal: () => void;
}

const bio =
  "Hi! I am Debajyati, A passionate Software developer and Linux Enthusiast, creating innovative solutions with modern web technologies. I love building interactive experiences and exploring new technologies. I am always learning new things.";

const skills = {
  technologies: [
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Docker",
    "Express",
    "AWS",
    "React Native",
    "C++",
  ],
  others: ["Technical Writing", "DSA & Problem Solving"],
};

const SciFiTerminal: React.FC<SciFiTerminalProps> = ({
  onShowCommand,
  shutdownTerminal,
}) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [output, setOutput] = useState<string[]>([
    "Welcome to my Interactive Portfolio Terminal!",
    "Type 'help' to see available commands.",
  ]);
  const [currentLine, setCurrentLine] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom when output changes
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const addToOutput = (text: string) => {
    setOutput((prev) => [...prev, text]);
  };

  const processCommand = (commandInput: string) => {
    if (!commandInput.trim()) return;

    // Add command to history
    setCommandHistory((prev) => [...prev, commandInput]);
    setHistoryIndex(-1);

    // Add command to output
    addToOutput(`guest@portfolio:~$ ${commandInput}`);

    const [command, ...args] = commandInput.toLowerCase().split(/\s+/);
    const argument = args.join(" ");

    // Reset external display by default
    onShowCommand(null);

    switch (command) {
      case "help":
        addToOutput("Available commands:");
        addToOutput("  print bio          - Displays my biography");
        addToOutput("  print skills       - Lists my technical skills");
        addToOutput("  print socials      - Shows my social media links");
        addToOutput("  show pfp           - Displays my profile picture");
        addToOutput("  show skills        - Shows skill badges/logos");
        addToOutput("  show socials       - Shows social media icons");
        addToOutput("  clear              - Clears the terminal screen");
        addToOutput("  exit               - Closes this terminal");
        break;

      case "print":
        if (argument === "bio") {
          addToOutput("Bio:");
          addToOutput(bio);
        } else if (argument === "skills") {
          addToOutput("Technical Skills:");
          addToOutput(skills.technologies.join(", "));
          addToOutput("Other Skills:");
          addToOutput(skills.others.join(", "));
        } else if (argument === "socials") {
          addToOutput("Social Links:");
          Object.entries(socials).forEach(([key, value]) => {
            addToOutput(
              `  ${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`,
            );
          });
        } else {
          addToOutput(`print: unknown argument '${argument}'`);
          addToOutput("Try 'print bio', 'print skills', or 'print socials'");
        }
        break;

      case "show":
        if (argument === "pfp") {
          addToOutput("Displaying profile picture...");
          onShowCommand("pfp");
        } else if (argument === "skills") {
          addToOutput("Displaying skill badges...");
          onShowCommand("skills");
        } else if (argument === "socials") {
          addToOutput("Displaying social icons...");
          onShowCommand("socials");
        } else {
          addToOutput(`show: unknown argument '${argument}'`);
          addToOutput("Try 'show pfp', 'show skills', or 'show socials'");
        }
        break;

      case "clear":
        setOutput([]);
        break;

      case "exit":
        addToOutput("Shutting down... (Refresh page to restart!)");
        setTimeout(() => {
          shutdownTerminal();
        }, 1000);
        break;

      default:
        addToOutput(`Command not found: ${commandInput}`);
        addToOutput("Type 'help' for a list of commands");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand(currentLine);
      setCurrentLine("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentLine(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentLine("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentLine(commandHistory[newIndex]);
        }
      }
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      ref={terminalRef}
      onClick={handleTerminalClick}
      style={translucentTexture}
    >
      {/* Output */}
      <div style={{ marginBottom: "0.5rem" }}>
        {output.map((line, index) => (
          <div key={index} style={{ marginBottom: "2px" }}>
            {line}
          </div>
        ))}
      </div>

      {/* Input Line */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ color: "#00ffcc", marginRight: "8px", filter: "drop-shadow(0 0 8px rgba(0, 255, 204, 0.5))", }}>
          guest@portfolio:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={currentLine}
          onChange={(e) => setCurrentLine(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#00ffcc",
            fontFamily: "JetBrains Mono",
            fontSize: "14px",
            flex: 1,
            caretColor: "#00ffcc",
          }}
          autoFocus
        />
        <span
          style={{
            color: "#00ffcc",
            animation: "blink 1s infinite",
            fontSize: "14px",
          }}
        >
          █
        </span>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default SciFiTerminal;
