/**
 * @class Representa un documental.
 */
export class Documental {
  /**
   * Inicializa un documental.
   * @param name Nombre del documental
   * @param year Año en la que salió.
   * @param duration Duración del documental
   */
  constructor(private name: string, private year: number, private duration: number) {
    this.name = name;
    this.year = year;
    this.duration = duration;
  }

  /**
   * Devuelve el nombre del documental.
   * @returns {string} Nombre del documental
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Devuelve el año del documental.
   * @returns {number} Año del documental
   */
  public getYear(): number {
    return this.year;
  }

 /**
   * Devuelve la duración del documental.
   * @returns {number} Duración del documental
   */
  public getDuration(): number {
    return this.duration;
  }
}