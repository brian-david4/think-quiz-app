const ease = [0.16, 1, 0.3, 1];

export const layoutAnims = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 2, ease, delay: 1.2 },
  },
};
export const clipBorder = {
  initial: {
    clipPath: `polygon(97.5% 97.5%, 97.5% 2.5%, 97.5% 2.5%, 97.5% 97.5%)`,
  },
  enter: {
    clipPath: `polygon(2.5% 97.5%, 2.5% 2.5%, 97.5% 2.5%, 97.5% 97.5%)`,
    transition: { duration: 1.2, ease: [0.61, 1, 0.87, 1] },
  },
  exit: {
    clipPath: `polygon(97.5% 97.5%, 97.5% 2.5%, 97.5% 2.5%, 97.5% 97.5%)`,
    transition: { duration: 1, ease },
  },
};
export const exit = {
  initial: {
    opacity: 1,
  },
  exit: {
    y: "100%",
    transition: { duration: 2.5, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
  },
};
