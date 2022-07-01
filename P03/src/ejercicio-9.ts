/**
 * @constant
 * @type {number[]}
 */
const DECIMAL: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

/**
 * @constant
 * @type {string[]}
 */
const ROMAN: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

/**
 * Método que convierte un numero romano a decimal.
 * @param num numero romano a convertir
 * @returns numero decimal
 */
export function romanToDecimal(num: string): number {
  var sum: number = 0, i: number = 0;
  while (i < num.length) {
    let roman1: number = DECIMAL[ROMAN.indexOf(num[i])];
    if (i + 1 < num.length) {
      let roman2: number = DECIMAL[ROMAN.indexOf(num[i + 1])];
      if (roman1 >= roman2) {
        sum += roman1;
        i++;
      } else {
        sum += roman2 - roman1;
        i += 2;
      }
    } else {
      sum += roman1;
      i++;
    }
  }
  return sum;
}



/**
 * Método que convierte un numero decimal a romano.
 * @param num numero decimal a convertir
 * @returns numero romano
 */
export function decimalToRoman(num: number): string {
  var result: string = "";
  for (let i = 0; i < DECIMAL.length; i++) {
    while (num % DECIMAL[i] < num) {
      result += ROMAN[i];
      num -= DECIMAL[i];
    }
  }
  return result;
}
