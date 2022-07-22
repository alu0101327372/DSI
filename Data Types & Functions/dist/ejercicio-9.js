"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decimalToRoman = exports.romanToDecimal = void 0;
const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
/**
 * Método que convierte un numero romano a decimal.
 * @param num numero romano a convertir
 * @returns numero decimal
 */
function romanToDecimal(num) {
    var sum = 0, i = 0;
    while (i < num.length) {
        let roman1 = decimal[roman.indexOf(num[i])];
        if (i + 1 < num.length) {
            let roman2 = decimal[roman.indexOf(num[i + 1])];
            if (roman1 >= roman2) {
                sum += roman1;
                i++;
            }
            else {
                sum += roman2 - roman1;
                i += 2;
            }
        }
        else {
            sum += roman1;
            i++;
        }
    }
    return sum;
}
exports.romanToDecimal = romanToDecimal;
/**
 * Método que convierte un numero decimal a romano.
 * @param num numero decimal a convertir
 * @returns numero romano
 */
function decimalToRoman(num) {
    var result = "";
    for (let i = 0; i < decimal.length; i++) {
        while (num % decimal[i] < num) {
            result += roman[i];
            num -= decimal[i];
        }
    }
    return result;
}
exports.decimalToRoman = decimalToRoman;
