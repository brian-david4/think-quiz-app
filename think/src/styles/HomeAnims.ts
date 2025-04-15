export const clipBorder = {
  initial: {
    clipPath: `polygon(3% 3%, 50% 3%, 97% 3%, 97% 50%, 97% 95%, 50% 95%, 3% 95%, 3% 50%)`,
  },
  enter: {
    clipPath: [
      `polygon(3% 3%, 50% 3%, 97% 3%, 97% 50%, 97% 95%, 50% 95%, 3% 95%, 3% 50%)`,
      // `polygon(5% 5%, 50% 6%, 95% 5%, 94% 50%, 95% 95%, 50% 94%, 5% 95%, 6% 50%)`,
      `polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)`,
      `polygon(3% 3%, 50% 3%, 97% 3%, 97% 50%, 97% 95%, 50% 95%, 3% 95%, 3% 50%)`,
    ],
    transition: { duration: 3, ease: [0.61, 1, 0.87, 1] },
  },
};

export const layoutAnims = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 2, ease: [0.16, 1, 0.3, 1], delay: 2 },
  },
};
