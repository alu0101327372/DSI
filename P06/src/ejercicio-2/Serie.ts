/**
 * @class Representa una serie.
 */
export class Serie {
  /**
   * Inicializa una serie.
   * @param name Nombre de la serie
   * @param year Año en la que salió.
   */
  constructor(private name: string, private year: number) {
    this.name = name;
    this.year = year;
  }

  /**
   * Devuelve el nombre de la serie
   * @returns {string} Nombre de la serie
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Devuelve el año de la serie
   * @returns {number} Año de la serie
   */
  public getYear(): number {
    return this.year;
  }
}