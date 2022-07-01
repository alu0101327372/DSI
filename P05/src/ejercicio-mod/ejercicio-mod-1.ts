/**
 * @class Clase que representa un número racional
 */
export class Racional {
  /**
   * Inicializa un número racional.
   * @param n numerador
   * @param d denominador
   */
  constructor(private n: number, private d: number) {
    if (d == 0) {
      this.n = NaN;
      this.d = NaN;
    } else {
      this.n = n;
      this.d = d;
    }
  }

  /**
   * Getter del numerador
   * @returns {number} Numerador
   */
  public getN(): number {
    return this.n;
  }

  /**
   * Getter del denominador
   * @returns {number} denominador
   */
  public getD(): number {
    return this.d;
  }

  /**
   * Invierte un número racional
   * @returns {Racional} Numero racional invertido.
   */
  public inverse(): Racional {
    return new Racional(this.d, this.n);
  }

  /**
   * Suma de numeros racionales.
   * @param r1 Racional a sumar
   * @returns {Racional} numero racional con la suma
   */
  public suma(r1: Racional): Racional {
    var numerador: number, denominador:number;

    numerador = (r1.n * this.d) + (r1.d * this.n);
    denominador = r1.d * this.d;

    return new Racional(numerador, denominador);
  }

  /**
   * Resta de numeros racionales.
   * @param r1 Racional a restar
   * @returns {Racional} numero racional con la resta
   */
  public resta(r1: Racional): Racional {
    var numerador: number, denominador:number;

    numerador = (r1.n * this.d) - (r1.d * this.n);
    denominador = (r1.d * this.d);

    return new Racional(numerador, denominador);
  }

  /**
   * Multiplicación de numeros racionales.
   * @param r1 Racional a multplicar
   * @returns {Racional} numero racional con la multiplicación
   */
  public multiplicacion(r1: Racional): Racional {
    var numerador: number, denominador:number;

    numerador = (r1.n * this.n);
    denominador = (r1.d * this.d);

    return new Racional(numerador, denominador);
  }

  /**
   * División de numeros racionales.
   * @param r1 Racional a dividir
   * @returns {Racional} numero racional con la división
   */
  public division(r1: Racional): Racional {
    var numerador: number, denominador:number;

    numerador = (r1.n * this.d);
    denominador = (r1.d * this.n);

    return new Racional(numerador, denominador);
  }

  /**
   * Reduce a la mínima expresión un número racional.
   * @returns {Racional} Numero racional reducido
   */
  public reducir(): void {
    var r0: number,r1: number ,r2:number;

    r0 = this.n;
    r1 = this.d;

    do {
        r2 = r0 % r1
        r0 = r1;
        r1 = r2;
    } while (r2 != 0);

    this.n = this.n / r0;
    this.d = this.d / r0;
  }

  /**
   * Convierte un numero a punto fijo.
   * @returns {number} Numero en punto fijo
   */
  public puntoFijo() {
    return Number(parseFloat((this.n / this.d).toString()).toFixed(2));
  }

  /**
   * Imprime un numero racional por pantalla
   * @returns {string} Numero racional impreso
   */
  public print(): string {
    return this.n + " / " + this.d;
  }
}
