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
