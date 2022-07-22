"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidISBN = void 0;
function isValidISBN(isbn) {
    let str = isbn.replace(/[^0-9X]/gi, '');
    let digit, check, checkStr, sum = 0, weight = 10, result;
    if (str.length !== 10) {
        return false;
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
        result = checkStr === str[str.length - 1].toUpperCase();
        return true;
    }
}
exports.isValidISBN = isValidISBN;
