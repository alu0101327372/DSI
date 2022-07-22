import { Decode } from "./Decode";
import { Encode } from "./Encode";

var scanf = require('scanf');

/**
 * @class Realiza la ejecución.
 */
export class Run {
  /**
   * Inicializa un objeto Run.
   */
  constructor() {}

  /**
   * Realiza la ejecución.
   */
  public run(): string {
    console.log("Introduce el alfabeto");
    let alfabeto: string = scanf("%s");

    console.log("Quiere cifrar o descrifrar");
    let cipher = scanf("%s");

    if (cipher === 'cifrar') {
      let cifrado = new Encode(alfabeto.toUpperCase())
      console.log("Introduce la clave");
      let clave = scanf("%s");

      console.log("Introduce el texto");
      let texto = scanf("%s");

      return cifrado.cypher(texto.toUpperCase(), clave.toUpperCase());
    } else if (cipher === 'descifrar') {
      let cifrado = new Decode(alfabeto.toUpperCase())
      console.log("Introduce la clave");
      let clave = scanf("%s");

      console.log("Introduce el texto cifrado");
      let texto = scanf("%s");

      return cifrado.cypher(texto.toUpperCase(), clave.toUpperCase());
    } else {
      return "Opcion no soportada";
    }
  }
}