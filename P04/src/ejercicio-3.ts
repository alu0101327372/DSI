/**
 * @type {[string, number]} Crea un tipo llamado codigoColores
 */
export type codigoColores = [string, number];

/**
 * @type {const} Código de colores de las resistencias
 */
const resistencia: codigoColores[] = [
  ['negro', 0],
  ['marron', 1],
  ['rojo', 2],
  ['naranja', 3],
  ['amarillo', 4],
  ['verde', 5],
  ['azul', 6],
  ['violeta', 7],
  ['gris', 8],
  ['blanco', 9]
];

/**
 * Método que calcula descodifica resistencias
 * @param color {string[]} colores de las resistencias
 * @returns {number | undefined} Entero de dos digitos de las resistencias o indefinido
 */
export function decodeResistor(...color: string[]): number | undefined {
  let result: string = '';
  const colorCheck = [];
  if (color.length === 0) {
    return undefined;
  } else {
    for (let k = 0; k < color.length; k++) {
      colorCheck.push(color[k].toLowerCase());
    }

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < resistencia.length; j++) {
        if (colorCheck[i] === resistencia[j][0]) {
          result += resistencia[j][1];
        }
      }
    }
    return parseInt(result);
  }
}
