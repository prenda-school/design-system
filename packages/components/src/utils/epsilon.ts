export const epsilon = 1e-6;

export const withEpsilon = (value: number): number => {
  return Math.round(value / epsilon) * epsilon;
};
