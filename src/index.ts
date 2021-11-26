let frameCount = 0;
let startTime = performance.now();
export const calcFps = () => {
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

const reportFPS = (fps: number) => {
  console.log("FPS", fps);
};
