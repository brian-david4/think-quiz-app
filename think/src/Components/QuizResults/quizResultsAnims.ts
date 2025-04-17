export const results = {
  initial: {
    y: "-110%",
    clipPath: `polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)`,
  },
  enter: {
    y: "0%",
    clipPath: `polygon(100% 0, 100% 100%, 0 100%, 0 0)`,
    transition: {
      duration: 1.5,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.6,
    },
  },
};
export const wordEnter = {
  initial: {
    skewX: -20,
    rotateX: -100,
    top: "150%",
  },
  enter: (idx: number) => ({
    skewX: 0,
    rotateX: 5,
    top: "0%",
    transition: {
      duration: 0.5,
      ease: [0.44, 0.819, 0.356, 0.948],
      delay: 0.075 * idx,
    },
  }),
};
