/**
 * @class Clase que realiza el Cifrado César.
 * @abstract
 */
export abstract class Cifrado {
  protected readonly alfabeto: string[];
  protected shift: number[];

  /**
   * Inicializa el alfabeto.
   * @param alfabeto Alfabeto de entrada
   */
  constructor(
    alfabeto: string,
  ) {
    this.alfabeto = alfabeto.split('');
    this.shift = [];
  }

  /**
   * Realiza el desplazamiento de la clave
   * @param key {string} Clave que representa el desplazamiento
   */
  protected shiftKey(key: string): void {
    for (let i = 0; i < key.length; i++) {
      this.shift.push(this.alfabeto.indexOf(key[i]) + 1);
    }
  }

  /**
   * Realiza el des/cifrado cesar
   * @param cypher {string} Texto des/cfrado que se quiere descifrar
   * @param key {string} Clave que representa el desplazamiento
   */
  abstract cypher(text: string, key: string): string;
}
