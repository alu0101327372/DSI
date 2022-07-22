"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cabezasCerberus = void 0;
/**
 * Metodo que calcula el factorial de un numero
 * @param number numero factorial
 * @returns factorial del numero
 */
function factorial(number) {
    if (number === 0) {
        return 1;
    }
    return number * factorial(number - 1);
}
/**
 * Metodo que calcula el numero de cabezas de cerberus
 * @param cabezas cabezas iniciales
 * @param n cabezas
 * @param ataque numero de ataques
 * @returns
 */
function cabezasCerberus(cabezas, n, ataque) {
    let i = 1;
    ;
    while (i <= ataque) {
        cabezas = cabezas - 1 + factorial(i) * n;
        i++;
    }
    return cabezas;
}
exports.cabezasCerberus = cabezasCerberus;
