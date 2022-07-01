import { SearchableCollection } from './SearchableCollection'

/**
 * @class Clase de colección de cadenas
 */
export class StringSearchableCollection extends SearchableCollection<string> {
/**
 * Inicializa un objeto NumericSearchableCollection
 * @param items Colección de cadenas
 */
  constructor(items: string[]) {
    super(items);
  }

  /**
   * Busca un item.
   * @param item Iem a buscar
   */
  public search(item: string): string[] {
    let str: string = '';
    let result: string[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].includes(item)) {
        str = this.items[i];
        result.push(str);
      }
    }
    return result;
  }
}