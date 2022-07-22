import { Streamable } from "./Streamable";

/**
 * @class Clase que representa una colección.
 * @abstract
 * @implements Streamable<T>
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  /**
   * Inicializa un array de T.
   * @param items T
   */
  constructor(protected items: T[]) {}

  /**
   * Añade un item.
   * @param newItem item
   */
  public addItem(newItem: T): void {
    this.items.push(newItem);
  }

  /**
   * Devuelve el numero de items.
   */
  public getNumberOfItems(): number {
    return this.items.length;
  }

  /**
   * Busca un item.
   * @param searchTerm Item a buscar
   * @abstract
   */
  abstract searchBy(searchTerm: number | string): T[] | undefined;
}