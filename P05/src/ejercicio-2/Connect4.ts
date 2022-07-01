import { Grid } from "./Grid";

var scanf = require('scanf');

/**
 * @enum {Color} Representa los estados del tablero
 */
export enum Color {
  Red = 'Rojo',
  Yellow = 'Amarillo',
  Empty = '',
}

/**
 * @class Juego de Conecta 4.
 */
export class Connect4 {
  private turnColor: Color;
  private grid: Grid<Color>;
  private winner: Color;

  /**
   * Inicializa un Conecta 4.
   * @param rows {number} Numero de filas
   * @param columns {number} Numero de columnas
   */
  constructor(rows: number, columns: number) {
    this.grid = new Grid<Color>(rows, columns, Color.Empty);
    this.turnColor = Color.Red;
    this.winner = Color.Empty;
  }

  /**
   * Método que simula el juego.
   * @returns {string} Ganador del juego
   */
  public start(): string {
    this.grid.clear();
    this.turnColor = Color.Red;
    this.winner = Color.Empty;

    while (this.checkWin(this.grid) === Color.Empty) {
      console.log('Introduce una ficha');
      var ficha = scanf('%d');
      this.dropChip(ficha);
      console.log(this.print());
    }
    return 'El ganador es el color ' + this.winner;
  }

  /**
   * Método que cambia el turno en cada tirada.
   * @param grid {Grid<Color>} Tablero del juego
   */
  private nextTurn(grid?: Grid<Color>): void {
    if (this.turnColor === Color.Red) {
      this.turnColor = Color.Yellow;
    } else {
      this.turnColor = Color.Red;
    }

    if (grid !== undefined) {
      this.grid = grid;
    }

    this.winner = this.checkWin(this.grid);
  }

  /**
   * Método que añade una ficha al tablero y cambia el turno.
   * @param column {number} Columna donde se añade la ficha
   */
  private dropChip(column: number): void {
    if (this.setLastEmptyRow(column, this.turnColor)) {
      this.nextTurn();
    }
  }

  /**
   * Método que cambia el estado del tablero cuando se quire añadir una ficha.
   * @param column {number} Columna donde se añade la ficha
   * @param color {Color} Color por el que se cambia la celda
   * @returns {boolean} True si se puede cambiar o false si no.
   */
  private setLastEmptyRow(column: number, color: Color): boolean {
    if (column > this.grid.columns - 1 || column < 0) {
      throw "Column is out of bounds!";
    }

    for (let row = 0; row < this.grid.rows; row++) {
      if (this.grid.data[row][column] !== Color.Empty) {
        if (row === 0) return false;

        this.grid.data[row - 1][column] = color;
        return true;
      }
    }

    this.grid.data[this.grid.rows - 1][column] = color;
    return true;
  }

  /**
   * Método que comprueba si existe un ganador.
   * @param grid {Grid<Color>} Tablero del jeugo
   * @returns {Color} El color del ganador
   */
  private checkWin(grid: Grid<Color>): Color {
    let consecutives = 0;
    let currentColor = Color.Empty;
    // check verticals
    for (let column = 0; column < grid.columns; column++) {
      consecutives = 0;
      currentColor = Color.Empty;
      for (let row = 0; row < grid.rows; row++) {
        switch (grid.data[row][column]) {
          case Color.Empty:
            consecutives = 0;
            currentColor = Color.Empty;
            break;

          case currentColor:
            consecutives++;
            if (consecutives === 4) {
              return currentColor;
            }
            break;

          default:
            consecutives = 1;
            currentColor = grid.data[row][column];
        }
      }
    }
    // check horizontals
    for (let row = 0; row < grid.rows; row++) {
      consecutives = 0;
      currentColor = Color.Empty;
      for (let column = 0; column < grid.columns; column++) {
        switch (grid.data[row][column]) {
          case Color.Empty:
            consecutives = 0;
            currentColor = Color.Empty;
            break;

          case currentColor:
            consecutives++;
            if (consecutives === 4) {
              return currentColor;
            }
            break;

          default:
            consecutives = 1;
            currentColor = grid.data[row][column];
        }
      }
    }
    // check top left diagonals
    for (let diagonalColumn = 0; diagonalColumn < grid.columns; diagonalColumn++) {
      consecutives = 0;
      currentColor = Color.Empty;
      for (let row = 0, column = diagonalColumn; row < grid.rows && column < grid.columns; row++, column++) {
        switch (grid.data[row][column]) {
          case Color.Empty:
            consecutives = 0;
            currentColor = Color.Empty;
            break;

          case currentColor:
            consecutives++;
            if (consecutives === 4) {
              return currentColor;
            }
            break;

          default:
            consecutives = 1;
            currentColor = grid.data[row][column];
        }
      }
    }
    // check bottom left diagonals
    for (let diagonalRow = 1; diagonalRow < grid.rows; diagonalRow++) {
      consecutives = 0;
      currentColor = Color.Empty;
      for (let row = diagonalRow, column = 0; row < grid.rows && column < grid.columns; row++, column++) {
        switch (grid.data[row][column]) {
          case Color.Empty:
            consecutives = 0;
            currentColor = Color.Empty;
            break;

          case currentColor:
            consecutives++;
            if (consecutives === 4) {
              return currentColor;
            }
            break;

          default:
            consecutives = 1;
            currentColor = grid.data[row][column];
        }
      }
    }
    // check top right diagonals
    for (let diagonalColumn = grid.columns - 1; diagonalColumn > -1; diagonalColumn--) {
      consecutives = 0;
      currentColor = Color.Empty;
      for (let row = 0, column = diagonalColumn; row < grid.rows && column > -1; row++, column--) {
        switch (grid.data[row][column]) {
          case Color.Empty:
            consecutives = 0;
            currentColor = Color.Empty;
            break;

          case currentColor:
            consecutives++;
            if (consecutives === 4) {
              return currentColor;
            }
            break;

          default:
            consecutives = 1;
            currentColor = grid.data[row][column];
        }
      }
    }
    // check bottom right diagonals
    for (let diagonalRow = 1; diagonalRow < grid.rows; diagonalRow++) {
      consecutives = 0;
      currentColor = Color.Empty;
      for (let row = diagonalRow, column = grid.columns - 1; row < grid.rows && column > -1; row++, column--) {
        switch (grid.data[row][column]) {
          case Color.Empty:
            consecutives = 0;
            currentColor = Color.Empty;
            break;

          case currentColor:
            consecutives++;
            if (consecutives === 4) {
              return currentColor;
            }
            break;

          default:
            consecutives = 1;
            currentColor = grid.data[row][column];
        }
      }
    }
    return Color.Empty;
  };

  public print(): string {
    let result = '';
    for (let i = 0; i < this.grid.rows; i++) {
      for (let j = 0; j < this.grid.columns; j++) {
        if (this.grid.data[i][j] === Color.Empty) {
          result += '_';
        } else if (this.grid.data[i][j] === Color.Yellow) {
          result += 'O'
        } else {
          result += 'X';
        }
      }
      result += '\n';
    }
    return result;
  }
}