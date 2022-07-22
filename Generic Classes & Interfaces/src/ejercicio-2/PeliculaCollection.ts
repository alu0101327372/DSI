import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Pelicula } from "./Pelicula";

/**
 * @class Colección de peliculas.
 * @extends BasicStreamableCollection<Pelicula>
 */
export class PeliculaCollection extends BasicStreamableCollection<Pelicula> {
  /**
   * Inicializa un array de películas.
   * @param items Pelicula
   */
  constructor(items: Pelicula[]) {
    super(items);
  }

  /**
   * Busca un item.
   * @param searchTerm Item a buscar
   */
  public searchBy(searchTerm: number | string): Pelicula[] | undefined {
    if (typeof searchTerm === 'number') {
      return this.items.filter((item) => item.getYear() === searchTerm);
    } else {
      return this.items.filter((item) => (item.getName() === searchTerm) || (item.getDirector() === searchTerm));
    }
  }
}