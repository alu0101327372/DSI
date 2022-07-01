import { Cifrado } from "./Cifrado"

/**
 * @class Cifra el mensaje con una clave.
 * @extends Cifrado
 */
export class Encode extends Cifrado {
  /**
   * Inicializa el alfabeto.
   * @param alfabeto Alfabeto de entrada
   */
  constructor(alfabeto: string) {
    super(alfabeto);
  }

  /**
   * Cifra el mensaje con una clave.
   * @param text {string} Texto que se quiere cifrar
   * @param key {string} Clave que representa el desplazamiento
   * @returns {string} El texto cifrado
   */
  public cypher(text: string, key: string): string {
    let encrypt: string = '';
    this.shiftKey(key);
    for (let i = 0; i < text.length; i++) {
      encrypt += this.alfabeto[(this.alfabeto.indexOf(text[i]) + this.shift[i % this.shift.length]) % this.alfabeto.length];
    }
    return encrypt;
  }
}