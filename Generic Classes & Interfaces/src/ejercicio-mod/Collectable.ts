/**
 * @interface Collectable<T> Colección de objetos
 */
export interface Collectable<T> {
  /**
   * Añade un item.
   * @param newItem item
   */
  addItem(newItem: T): void;

  /**
   * Devuelve un item.
   * @param index Iem a devolver
   */
  getItem(index: number): T;

  /**
   * Borra un item.
   * @param index item
   */
  removeItem(index: number): void;

  /**
   * Devuelve el numero de items.
   */
  getNumberOfItems(): number;
}