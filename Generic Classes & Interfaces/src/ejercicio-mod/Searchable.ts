/**
 * @interface Searchable<T> Busqueda.
 */
export interface Searchable<T> {
  /**
   * Busca un item.
   * @param item Iem a buscar
   */
  search(item: T): T[];
}