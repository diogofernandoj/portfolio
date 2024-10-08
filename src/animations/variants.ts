type direction = "up" | "left" | "down" | "right";

export const fadeIn = (direction: direction, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      opacity: 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      transition: {
        type: "tween",
        duration: 0.5,
        delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
