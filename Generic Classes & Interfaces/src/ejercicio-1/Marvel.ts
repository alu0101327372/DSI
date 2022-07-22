import { Fighter } from "./Fighter";

/**
 * @class Representa un Marvel.
 */
export class Marvel extends Fighter {
  /**
   * Inicializa un Marvel con todos sus atributos.
   * @param nombre {string} Nombre del Marvel
   * @param peso {number} Peso del Marvel
   * @param altura {number} Altura en cm del Marvel
   * @param tipo {string} Tipo de Marvel
   * @param stats {[number, number, number, number]} Cualidades del Marvel
   * @param catchpharse {string} Frase
   */
  constructor(
    nombre: string,
    peso: number,
    altura: number,
    tipo: string,
    stats: [number, number, number, number],
    catchpharse: string) {
      super(nombre, peso, altura, tipo, stats, catchpharse);
    }

  /**
   * Imprime por pantalla los datos del Marvel.
   * @returns {string} Datos del Marvel
   */
   public print(): string {
    return `Marvel llamado ${this.nombre}\n` +
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