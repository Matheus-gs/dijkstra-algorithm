export function randomNumber(max: number = 100, min: number = 1) {
  const isInteger = Number.isInteger(max) && Number.isInteger(min)
  const randomIntegerNumber = Math.round(Math.random() * (max - min) + min);
  const randomFloatNumber = Number((Math.random() * (max - min) + min).toFixed(2));
  return isInteger ? randomIntegerNumber : randomFloatNumber;
}
