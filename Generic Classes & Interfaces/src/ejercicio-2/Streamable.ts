/**
 * @interface Streamable
 */
export interface Streamable<T> {
  /**
   * Añade un item.
   * @param newItem item
   */
  addItem(newItem: T): void;

  /**
   * Devuelve el numero de items.
   */
  getNumberOfItems(): number;

  /**
   * Busca un item.
   * @param searchTerm Iem a buscar
   */
   searchBy(searchTerm: number | string): T[] | undefined;
}