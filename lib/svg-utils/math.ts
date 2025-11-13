export function round(num: number, decimalPlaces: number): number {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
};

export const clamp = (
    value: number,
    min = 0,
    max = 1
  ) => {
    if (min > max) {
      [min, max] = [max, min];
    }
  
    return Math.max(min, Math.min(max, value));
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

  export function clampedNormalize(
    value: number,
    currentScaleMin: number,
    currentScaleMax: number,
    newScaleMin = 0,
    newScaleMax = 1
  ) {
    if (value <= currentScaleMin)
        return newScaleMin;
    if (value >= currentScaleMax)
        return newScaleMax;

    return clamp(
      normalize(
        value,
        currentScaleMin,
        currentScaleMax,
        newScaleMin,
        newScaleMax
      ),
      newScaleMin,
      newScaleMax
    );
};