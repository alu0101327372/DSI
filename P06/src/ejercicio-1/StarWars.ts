import { Fighter } from "./Fighter";

/**
 * @type {tipoStarWars} - crea un nuevo tipo llamado 'tipoStarWars'
*/
export type tipoStarWars = "luminoso" | "oscuro";

/**
 * @class Representa un StarWars.
 */
export class StarWars extends Fighter {
  /**
   * Inicializa un StarWars con todos sus atributos.
   * @param nombre {string} Nombre del StarWars
   * @param peso {number} Peso del StarWars
   * @param altura {number} Altura en cm del StarWars
   * @param tipo {tipoStarWars} Tipo de StarWars
   * @param stats {[number, number, number, number]} Cualidades del StarWars
   * @param catchpharse {string} Frase
   */
  constructor(
    nombre: string,
    peso: number,
    altura: number,
    tipo: tipoStarWars,
    stats: [number, number, number, number],
    catchpharse: string) {
      super(nombre, peso, altura, tipo, stats, catchpharse);
    }

  /**
   * Imprime por pantalla los datos del StarWars.
   * @returns {string} Datos del StarWars
   */
   public print(): string {
    return `Star Wars llamado ${this.nombre}\n` +
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