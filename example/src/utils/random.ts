export const random = (min = 1, max = 100): number =>
  Math.floor(Math.random() * (max - min + 1) + min)
