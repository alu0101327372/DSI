import { Pokemon } from "./Pokemon";

/**
 * Clase que almacena Pokemons
 */
export class Pokedex {
  /**
   * Inicializa la pokedex.
   * @param pokedex {Pokemon[]} Conjunto de pokemons que componen la pokedex
   */
  constructor(private pokedex: Pokemon[]) {
    this.pokedex = pokedex;
  };

  /**
   * Devuelve la pokedex
   * @returns Pokedex
   */
   public getPokedex() {
    return this.pokedex;
  }

  /**
   * Añade un pokemon a la pokedex.
   * @param pokemon {Pokemon} Pokemon que se quiere añadir
   */
  public setPokemon(pokemon: Pokemon) {
    this.pokedex.push(pokemon);
  }

  /**
   * Imprime por pantalla los datos del conjunto de pokemons que componen la pokedex.
   * @returns {void} Datos de los pokemon o undefined
   */
  public print(): void {
    this.pokedex.map((element: Pokemon) => {
      element.print();
    });
  }
};