/**
 * @class Representa una película.
 */
export class Pelicula {
  /**
   * Inicializa una pelicula.
   * @param name Nombre de la pelicula
   * @param year Año en la que salió.
   * @param director Director de la película
   */
  constructor(private name: string, private year: number, private director: string) {
    this.name = name;
    this.year = year;
    this.director = director;
  }

  /**
   * Devuelve el nombre de la película
   * @returns {string} Nombre de la película
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Devuelve el año de la pelicula
   * @returns {number} Año de la pelicula
   */
  public getYear(): number {
    return this.year;
  }

  /**
   * Devuelve el director de la pelicula.
   * @returns {number} Director de la pelicula
   */
  public getDirector(): string {
    return this.director;
  }
}