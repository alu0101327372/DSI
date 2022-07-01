/**
 * Método que ordena un número por sus dígitos.
 * @param num número a ordenar
 * @returns número ordenado
 */
export function sortDecreasing(num: number): number {
  let numArray: number[] = String(num).split("").map(Number);
  numArray.sort(function(a, b){return b - a});
  return parseInt(numArray.join(""));
}