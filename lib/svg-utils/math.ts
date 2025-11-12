export function round(num: number, decimalPlaces: number): number {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
};

export function normalize(
    value: number,
    currentScaleMin: number,
    currentScaleMax: number,
    newScaleMin = 0,
    newScaleMax = 1
  ) {
    const standardNormalization =
      (value - currentScaleMin) / (currentScaleMax - currentScaleMin);
  
    return (
      (newScaleMax - newScaleMin) * standardNormalization + newScaleMin
    );
  };