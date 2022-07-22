import { Fighter } from "./Fighter";

/**
 * @type {tiposPokemon} - crea un nuevo tipo llamado 'tiposPokemon'
*/
export type tiposPokemon = "fuego" | "agua" | "hierba" | "electrico";

/**
 * @class Representa un pokemon.
 */
export class Pokemon extends Fighter {
  /**
   * Inicializa un pokemon con todos sus atributos.
   * @param nombre {string} Nombre del pokemon
   * @param peso {number} Peso del pokemon
   * @param altura {number} Altura en cm del pokemon
   * @param tipo {tiposPokemon} Tipo de pokemon
   * @param stats {[number, number, number, number]} Cualidades del pokemon
   * @param catchpharse {string} Frase
   */
   constructor(
    nombre: string,
    peso: number,
    altura: number,
    tipo: tiposPokemon,
    stats: [number, number, number, number],
    catchpharse: string) {
      super(nombre, peso, altura, tipo, stats, catchpharse);
    }

  /**
   * Imprime por pantalla los datos del pokemon.
   * @returns {string} Datos del pokemon
   */
   public print(): string {
    return `Pokemon llamado ${this.nombre}\n` +
      `Peso: ${this.peso}\n` +
      `Tipo: ${this.tipo}\n` +
      `Altura: ${this.altura}\n` +
      `Ataque: ${this.estadisticas.ataque}\n` +
      `Defensa: ${this.estadisticas.defensa}\n` +
      `Velocidad: ${this.estadisticas.velocidad}\n`+
      `Frase: ${this.catchpharse}\n` +
      `HP: ${this.estadisticas.hp}\n`;
  };
}