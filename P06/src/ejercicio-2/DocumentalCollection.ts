import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Documental } from "./Documental";

/**
 * @class Colección de documentales.
 * @extends BasicStreamableCollection<Documental>
 */
export class DocumentalCollection extends BasicStreamableCollection<Documental> {
  /**
   * Inicializa un array de documentales.
   * @param items Documental
   */
  constructor(items: Documental[]) {
    super(items);
  }

  /**
   * Busca un item.
   * @param searchTerm Item a buscar
   */
  public searchBy(searchTerm: number | string): Documental[] | undefined {
    if (typeof searchTerm === 'number') {
      return this.items.filter((item) => (item.getYear() === searchTerm) || (item.getDuration() === searchTerm));
    } else {
      return this.items.filter((item) => item.getName() === searchTerm);
    }
  }
}