import { Fighter } from "./Fighter";

/**
 * Clase que almacena Pokemons
 */
 export class Fighterex {
  /**
   * Inicializa la pokedex.
   * @param fighterex {Pokemon[]} Conjunto de pokemons que componen la pokedex
   */
  constructor(private fighterex: Fighter[]) {
    this.fighterex = fighterex;
  };

  /**
   * Devuelve la pokedex
   * @returns Pokedex
   */
   public getFighterex() {
    return this.fighterex;
  }

  /**
   * Añade un pokemon a la pokedex.
   * @param fighter {Pokemon} Pokemon que se quiere añadir
   */
  public setFighter(fighter: Fighter) {
    this.fighterex.push(fighter);
  }

  /**
   * Imprime por pantalla los datos del conjunto de pokemons que componen la pokedex.
   * @returns {void} Datos de los pokemon o undefined
   */
  public print(): void {
    this.fighterex.map((element: Fighter) => {
      element.print();
    });
  }
};