/**
 * Método que calcula n tablas de multiplicar de tamaño N
 * @param N numero de tablas de tamaño N
 * @returns {number[][] | undefined} Tablas de multiplcar de los primeros N productos o indefinido
 */
export function productTable(N: number): number[][] | undefined {
  if (N >= 1) {
    const array: number[][] = [];
    for (let i = 1; i <= N; i++) {
      const tabla: number[] = [];
      for (let j = 1; j <= N; j++) {
        tabla.push(i * j);
      }
      array.push(tabla);
    }
    return array;
  } else {
    return undefined;
  }
}
