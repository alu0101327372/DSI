import { Fighter } from "./Fighter";

/**
 * @class Representa un Dragon Ball.
 */
export class DragonBall extends Fighter {
  /**
   * Inicializa un Dragon Ball con todos sus atributos.
   * @param nombre {string} Nombre del Dragon Ball
   * @param peso {number} Peso del Dragon Ball
   * @param altura {number} Altura en cm del Dragon Ball
   * @param tipo {string} Tipo de Dragon Ball
   * @param stats {[number, number, number, number]} Cualidades del Dragon Ball
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
   * Imprime por pantalla los datos del Dragon Ball.
   * @returns {string} Datos del Dragon Ball
   */
   public print(): string {
    return `Dragon Ball llamado ${this.nombre}\n` +
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