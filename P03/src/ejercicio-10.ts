/**
 * Metodo que calcula la distancia de manhattan entre dos puntos.
 * @param p1 punto nº1
 * @param p2 punto nº2
 * @returns distancia de manhattan
 */
export function manhattanDistance(p1: number[], p2: number[]): number {
  let result: number = 0;
  if (p1.length != p2.length) {
    return 0;
  } else {
    for (let i = 0; i < p1.length; i++) {
      result += Math.abs(p1[i] - p2[i]);
    }
  }
  return result;
}