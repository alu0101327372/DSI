/**
 * Método que calcula la multiplicación de un array popr un numero
 * @param array {number[]} Array del que multiplicar
 * @returns {number[] | undefined} Múltiplicación resultado o indefinido
 */
export function multiplyAll(array: number[]) {
  return function(num: number): number[] | undefined {
    if (array.length === 0) {
      return undefined;
    } else {
      return array.map((element) => element * num);
    }
  };
}
