import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Serie } from "./Serie";

/**
 * @class Colección de series.
 * @extends BasicStreamableCollection<Serie>
 */
export class SeriesCollection extends BasicStreamableCollection<Serie> {
  /**
   * Inicializa un array de series.
   * @param items Serie
   */
  constructor(items: Serie[]) {
    super(items);
  }

  /**
   * Busca un item.
   * @param searchTerm Item a buscar
   */
  public searchBy(searchTerm: number | string): Serie[] | undefined {
    if (typeof searchTerm === 'number') {
      return this.items.filter((item) => item.getYear() === searchTerm);
    } else {
      return this.items.filter((item) => item.getName() === searchTerm);
    }
  }
}