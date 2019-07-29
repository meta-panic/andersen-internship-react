import { randomFill } from "crypto";

const raf = (global.requestAnimationFrame = cb => {
  setTimeout(cb, 0);
});

export default randomFill;
