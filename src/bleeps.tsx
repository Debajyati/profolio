import clicksound from "./public/sounds/click.mp3";
import introsound from "./public/sounds/intro.mp3";
import successSound from "./public/sounds/success.mp3";
import assembleSound from "./public/sounds/assemble1.mp3";
import errorSound from "./public/sounds/error.mp3";

export type BleepsNames = "click" | "intro" | "success" | "assemble" | "error";

export function bleepPlay(bleep:BleepsNames) {
  switch (bleep) {
    case "click":{
      const audio = new Audio(clicksound);
      audio.play();
      break;
    }
    case "assemble": {
      const audio = new Audio(assembleSound);
      audio.play();
      break;
    }
    case "success": {
      const audio = new Audio(successSound);
      audio.play();
      break;
    }
    case "error": {
      const audio = new Audio(errorSound);
      audio.play();
      break;
    }
    case "intro": {
      const audio = new Audio(introsound);
      audio.play();
      break;
    }
    default:
      break;
  }
}
