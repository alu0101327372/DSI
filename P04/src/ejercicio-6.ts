/**
 * Método que pone al final los ceros de un array
 * @param array {number[]} Array de numeros
 * @returns {number[] | undefined} Array de numeros con los ceros al final o indefinido
 */
export function moveZeros(array: number[]): number[] | undefined {
  if (array.length === 0) {
    return undefined;
  } else {
    let zeros: number[] = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 0) {
        array.splice(i, 1);
        zeros.push(0);
      }
    }
    return array.concat(zeros);
  }
}
