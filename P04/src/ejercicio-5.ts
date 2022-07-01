/**
 * Método que calcula la media de los numeros y la concatenación de un array de cadenas y numeros
 * @param array {(number | string)[]} Array de cadenas y numeros
 * @returns {(number | string)[] | undefined} La media y la concatenación o indefinido
 */
export function meanAndConcatenate(array: (number | string)[]): (number | string)[] | undefined {
  if (array.length === 0) {
    return undefined;
  } else {
    const numbers: number[] = [];
    const strings: string[] = [];
    const result: (number | string)[] = [];
    let sum: number = 0;
    let mean: number = 0;
    let concat: string = '';
    /** Separar los numeros y las cadenas */
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "number") {
        numbers.push(array[i] as number);
      } else {
        strings.push(array[i] as string);
      }
    }
    /** Calcular la media */
    if (numbers.length !== 0) {
      for (let j = 0; j < numbers.length; j++) {
        sum += numbers[j];
      }
      mean = sum / numbers.length;
    }
    /** Calcular la concatenación */
    if (strings.length !== 0) {
      for (let k = 0; k < strings.length; k++) {
        concat += strings[k];
      }
    }
    /** Unir la media y la concatenación */
    if (mean !== 0 && concat !== '') {
      result.push(mean, concat);
    } else if (mean === 0) {
      result.push(concat);
    } else {
      result.push(mean);
    }
    return result;
  }
}
