/**
 * @class Representa un tablero.
 */
export class Grid<T> {
  public data: T[][];

  /**
   * Inicializa un tablero.
   * @param rows {number} Numero de filas
   * @param columns {number} Numero de columnas
   * @param initialValues {T} Valor inicial de cada celda.
   */
  constructor(public rows: number, public columns: number, private initialValues: T) {
    this.data = new Array<T[]>(rows);
    for (let row = 0; row < rows; row++) {
      this.data[row] = new Array<T>(columns);
      for (let column = 0; column < columns; column++) {
        this.data[row][column] = this.initialValues;
      }
    }
  }

  /**
   * Método Limpia el tablero.
   */
  public clear() {
    this.data = new Array<T[]>(this.rows);
    for (let row = 0; row < this.rows; row++) {
      this.data[row] = new Array<T>(this.columns);
      for (let column = 0; column < this.columns; column++) {
        this.data[row][column] = this.initialValues;
      }
    }
  }
};