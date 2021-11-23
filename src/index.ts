import { sleep } from "./utils";

setInterval(() => {
  sleep(40);
}, 0);

let frameCount = 0;
let startTime = performance.now();
const calcFps = () => {
  const now = performance.now();
  if (now > 1000 + startTime) {
    performance.mark("frame");
    reportFPS(frameCount);
    frameCount = 0;
    startTime = now;
  }
  frameCount++;

  window.requestAnimationFrame(calcFps);
};
calcFps();

const reportFPS = (fps: number) => {
  console.log("FPS", fps);
};

export const fps = 100;
