"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLeapYear = void 0;
/**
 * Metodo que calcula si es un año es bisiesto.
 * @param year año a comprobar
 * @returns True si es bisiesto or False si no lo es
 */
function isLeapYear(year) {
    if ((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) {
        return true;
    }
    return false;
}
exports.isLeapYear = isLeapYear;
