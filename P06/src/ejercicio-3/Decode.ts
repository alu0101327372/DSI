import { Cifrado } from "./Cifrado";

/**
 * @class Descifra el mensaje con una clave.
 * @extends Cifrado
 */
export class Decode extends Cifrado {
  /**
   * Inicializa el alfabeto.
   * @param alfabeto Alfabeto de entrada
   */
  constructor(alfabeto: string) {
    super(alfabeto);
  }

  /**
   * Descifra el mensaje con una clave.
   * @param cypher {string} Texto cfrado que se quiere descifrar
   * @param key {string} Clave que representa el desplazamiento
   * @returns {string} El texto cifrado
   */
  public cypher(cypher: string, key: string): string {
    let decrypt: string = '';
    this.shiftKey(key);
    for (let i = 0; i < cypher.length; i++) {
      decrypt += this.alfabeto[(this.alfabeto.indexOf(cypher[i]) - this.shift[i % this.shift.length]) % this.alfabeto.length];
    }
    return decrypt;
  }
}