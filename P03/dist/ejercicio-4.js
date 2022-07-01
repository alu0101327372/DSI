"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidISBN = void 0;
/**
 * Método que comprueba si una cadena es un ISBN válido.
 * @param isbn cadena a comprobar
 * @returns True si es válido or False si no lo es
 */
function isValidISBN(isbn) {
    let str = isbn.replace(/[^0-9X]/gi, '');
    let digit, check, checkStr, sum = 0, weight = 10, result = false;
    if (str.length !== 10) {
        return result;
    }
    else {
        for (let i = 0; i < 9; i++) {
            digit = parseInt(str[i], 10);
            sum += weight * digit;
            weight--;
        }
        check = 11 - sum % 11;
        if (check === 10) {
            checkStr = 'X';
        }
        else {
            checkStr = check.toString();
        }
        return result = checkStr === str[str.length - 1].toUpperCase();
    }
}
exports.isValidISBN = isValidISBN;
