/**
 * Método que calcula el rango entre numeros de un array
 * @param array {number[]} Array inicial
 * @returns {string | undefined} Una cadena con los rangos o indefinido
 */
export function fromArrayToRanges(array: number[]): string | undefined {
  // Comprobamos que el array no esté vació
  if (array.length === 0) {
    return undefined;
  } else {
    const result: string[] = [];
    // Iteramos sobre el array, teniendo siempre en cada iteración i = j
    for (let i = 0, j = 0; j < array.length; j++, i = j) {
      // Mientras que el actual sea igual al consecutivo - 1
      while (array[j] === array[j + 1] - 1) {
        j++;
      }
      if (i !== j) {
        result.push(array[i] + "_" + array[j])
      } else {
        result.push(array[j].toString())
      }
    }
    return result.join();
  }
}

/**
 * Método que calcula el array de rango de una string
 * @param str {string} Cadena incial
 * @returns {number[] | undefined} El array de numeros o indefinido
 */
export function fromRangesToArray(str: string): number[] | undefined {
  // Comprobamos que la cadena no esté vació
  if (str.length === 0) {
    return undefined;
  } else {
    let result: number[] = [];
    const range: string[] = str.split(", ");
    let start: number;
    let end: number;
    for (let i = 0; i < range.length; i++) {
      for (let j = 0; j < range[i].length; j++) {
        if (range[i].includes('_')) {
          start = parseInt(range[i]);
          end = parseInt(range[i].substring(j + 1));
          for (let k = start; k <= end; k++) {
            result.push(k);
          }
        } else {
          result.push(parseInt(range[i]));
        }
      }
    }
    return result;
  }
}
