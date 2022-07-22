"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortDecreasing = void 0;
/**
 * Método que ordena un número por sus dígitos.
 * @param num número a ordenar
 * @returns número ordenado
 */
function sortDecreasing(num) {
    let numArray = String(num).split("").map(Number);
    numArray.sort(function (a, b) { return b - a; });
    return parseInt(numArray.join(""));
}
exports.sortDecreasing = sortDecreasing;
