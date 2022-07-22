/**
 * Metodo que calcula el numero de cabezas de cerberus
 * @param cabezas cabezas iniciales
 * @param n cabezas
 * @param ataque numero de ataques
 * @returns 
 */
export function cabezasCerberus(cabezas: number, n: number, ataque: number): number {
  let i: number = 1;

  while (i <= ataque) {
    var factorial = (num: number): number => {
      if (num === 0) {
        return 1;
      }
      return num * factorial(num - 1); 
    }
    cabezas = cabezas - 1 + factorial(i) * n;
    i++;
  }
  return cabezas;
}