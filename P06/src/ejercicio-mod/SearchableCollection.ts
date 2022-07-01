import { Searchable } from './Searchable'
import { Collectable } from './Collectable'

/**
 * @interface SearchableCollection<T> Colección de busqueda objetos
 * @implements Searchable<T>, Collectable<T>
 * @abstract
 */
export abstract class SearchableCollection<T> implements Searchable<T>, Collectable<T> {
  /**
   * Inicializa un constructor por defecto.
   * @param items Colección de items
   */
  constructor(protected items: T[]) {}

   /**
    * Añade un item.
    * @param newItem item
    */
   public addItem(newItem: T): void {
     this.items.push(newItem);
   }

  public getItem(index: number) {
    return this.items[index];
  }
   /**
    * Devuelve el numero de items.
    */
  public getNumberOfItems(): number {
     return this.items.length;
  }

   /**
    * Elimina un item.
    * @param index indice del item a borrar
    */
   public removeItem(index: number): void {
    if (index > -1) {
      this.items.splice(index, 1);
    }
   }

  /**
   * Busca un item.
   * @param item Iem a buscar
   * @abstract
   */
   abstract search(item: T): T[];
}