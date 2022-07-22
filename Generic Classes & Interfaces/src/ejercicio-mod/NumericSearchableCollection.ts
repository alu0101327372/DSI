import { SearchableCollection } from './SearchableCollection'

/**
 * @class Clase de colección de numeros
 */
export class NumericSearchableCollection extends SearchableCollection<number> {
  /**
   * Inicializa un objeto NumericSearchableCollection
   * @param items Colección de números
   */
  constructor(items: number[]) {
    super(items);
  }

  /**
   * Busca un item.
   * @param item Iem a buscar
   */
  public search(item: number): number[] {
    let num: number = NaN;
    let result: number[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === item) {
        num = this.items[i];
        result.push(num)
      }
    }
    return result;
  }
}