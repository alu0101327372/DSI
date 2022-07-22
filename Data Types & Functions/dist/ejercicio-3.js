"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromCamelToSnakeCase = exports.fromSnakeToCamelCase = void 0;
/**
 * Metodo que convierte una cadena en formato Snakecase a CamelCase.
 * @param str cadena a convertir
 * @returns cadena convertida
 */
function fromSnakeToCamelCase(str) {
    let str_vector = str.split("_");
    let result = [];
    for (let element = 0; element < str_vector.length; element++) {
        if (element === 0) {
            result.push(str_vector[element]);
        }
        else {
            result.push(str_vector[element].charAt(0).toUpperCase() + str_vector[element].slice(1));
        }
    }
    return result.join("");
}
exports.fromSnakeToCamelCase = fromSnakeToCamelCase;
/**
 * Metodo que convierte una cadena en formato CamelCase a Snakecase
 * @param str cadena a convertir
 * @returns cadena convertida
 */
function fromCamelToSnakeCase(str) {
    var result = str.replace(/([A-Z])/g, " $1");
    return result.split(' ').join('_').toLowerCase();
}
exports.fromCamelToSnakeCase = fromCamelToSnakeCase;
