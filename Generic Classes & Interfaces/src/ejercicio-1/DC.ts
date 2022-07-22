import { Fighter } from "./Fighter";

/**
 * @class Representa un DC.
 */
export class DC extends Fighter {
  /**
   * Inicializa un DC con todos sus atributos.
   * @param nombre {string} Nombre del DC
   * @param peso {number} Peso del DC
   * @param altura {number} Altura en cm del DC
   * @param tipo {string} Tipo de DC
   * @param stats {[number, number, number, number]} Cualidades del DC
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
   * Imprime por pantalla los datos del DC.
   * @returns {string} Datos del DC
   */
   public print(): string {
    return `DC llamado ${this.nombre}\n` +
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