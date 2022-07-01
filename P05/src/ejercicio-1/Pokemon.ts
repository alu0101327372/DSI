/**
 * @type {tiposPokemon} - crea un nuevo tipo llamado 'tiposPokemon'
*/
export type tiposPokemon = "fuego" | "agua" | "hierba" | "electrico";

/**
 * @class Representa un pokemon.
 */
export class Pokemon {
  private estadisticas = {
    ataque: 0,
    defensa: 0,
    velocidad: 0,
    hp: 0
  };

  /**
   * Inicializa un pokemon con todos sus atributos.
   * @param nombre {string} Nombre del pokemon
   * @param peso {number} Peso del pokemon
   * @param altura {number} Altura en cm del pokemon
   * @param tipo {tiposPokemon} Tipo de pokemon
   * @param estadisticas {[number, number, number, number]} Cualidades del pokemon
   */
  constructor(private nombre: string, private peso: number, private altura: number, private tipo: tiposPokemon, estadisticas: [number, number, number, number]) {
      this.nombre = nombre;
      this.peso = peso;
      this.altura = altura;
      this.tipo = tipo;

      this.estadisticas.ataque = estadisticas[0];
      this.estadisticas.defensa = estadisticas[1];
      this.estadisticas.velocidad = estadisticas[2];
      this.estadisticas.hp = estadisticas[3];
  };

  /**
   * Devuelve el nombre del pokemon.
   * @returns Nombre del pokemon
   */
  public getNombre() {
    return this.nombre;
  };

  /**
   * Devuelve el peso del pokemon.
   * @returns Peso del pokemon
   */
  public getPeso() {
    return this.peso;
  };

  /**
   * Devuelve la altura del pokemon.
   * @returns Altura del pokemon
   */
  public getAltura() {
    return this.altura;
  };

  /**
   * Devuelve el tipo del pokemon.
   * @returns Tipo del pokemon
   */
  public getTipo() {
    return this.tipo;
  };

  /**
   * Devuelve las cualidades del pokemon.
   * @returns Cualidades del pokemon
   */
  public getEstadisticas(): Object {
    return this.estadisticas;
  };

  /**
   * Devuelve la capacidad de ataque del pokemon.
   * @returns Ataque del pokemon
   */
  public getAtaque() {
    return this.estadisticas.ataque;
  };

  /**
   * Devuelve la capacidad de defensa del pokemon.
   * @returns Defensa del pokemon
   */
  public getDefensa() {
    return this.estadisticas.defensa;
  };

  /**
   * Devuelve la capacidad de velocidad del pokemon.
   * @returns Velocidad del pokemon
   */
  public getVelocidad() {
    return this.estadisticas.velocidad;
  };

  /**
   * Devuelve el daño máximo del pokemon.
   * @returns Daño máximo del pokemon
   */
  public getHP() {
      return this.estadisticas.hp;
  };

  /**
   * Asigna el daño de un ataque.
   * @param hp daño sufrido por el pokemon 
   */
  public setDano(hp: number) {
    this.estadisticas.hp -= hp;
  };

  /**
   * Imprime por pantalla los datos del pokemon.
   * @returns {string} Datos del pokemon
   */
  public print(): string {
    return `Pokemon llamado ${this.nombre}\n` +
      `Peso: ${this.peso}\n` +
      `Tipo: ${this.tipo}\n` +
      `Altura: ${this.altura}\n` +
      `Ataque: ${this.estadisticas.ataque}\n` +
      `Defensa: ${this.estadisticas.defensa}\n` +
      `Velocidad: ${this.estadisticas.velocidad}\n`+
      `HP: ${this.estadisticas.hp}\n`;
  };
};