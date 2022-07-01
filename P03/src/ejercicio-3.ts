/**
 * Metodo que convierte una cadena en formato Snakecase a CamelCase.
 * @param str cadena a convertir
 * @returns cadena convertida
 */
export function fromSnakeToCamelCase(str: string): string {
  let str_vector = str.split("_");
  let result: string[] = [];
  for (let element = 0; element < str_vector.length; element++) {
    if (element === 0) {
      result.push(str_vector[element]);
    } else {
      result.push(str_vector[element].charAt(0).toUpperCase() + str_vector[element].slice(1));
    }
  }
  return result.join("");
}



/**
 * Metodo que convierte una cadena en formato CamelCase a Snakecase
 * @param str cadena a convertir
 * @returns cadena convertida
 */
export function fromCamelToSnakeCase(str: string): string {
  var result: string = str.replace(/([A-Z])/g, " $1" );
  return result.split(' ').join('_').toLowerCase();
}