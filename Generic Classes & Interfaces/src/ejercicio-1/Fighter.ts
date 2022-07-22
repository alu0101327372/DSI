/**
 * @class Clase abstracta que representa un luchador genérico
 * @abstract
 */
export abstract class Fighter {
  protected estadisticas = {
    ataque: 0,
    defensa: 0,
    velocidad: 0,
    hp: 0
  };

  /**
   * Inicializa un luchador con todos sus atributos.
   * @param nombre {string} Nombre del luchador
   * @param peso {number} Peso del luchador
   * @param altura {number} Altura en cm del luchador
   * @param tipo {string} Tipo de luchador
   * @param stats {[number, number, number, number]} Cualidades del luchador
   */
  constructor(
    protected nombre: string,
    protected peso: number,
    protected altura: number,
    protected tipo: string,
    protected stats: [number, number, number, number],
    protected catchpharse: string) {
      this.nombre = nombre;
      this.peso = peso;
      this.altura = altura;
      this.tipo = tipo;
      this.catchpharse = catchpharse;

      this.estadisticas.ataque = stats[0];
      this.estadisticas.defensa = stats[1];
      this.estadisticas.velocidad = stats[2];
      this.estadisticas.hp = stats[3];
    }

  /**
   * Devuelve el nombre del luchador.
   * @returns Nombre del luchador
   */
   public getNombre() {
    return this.nombre;
  };

  /**
   * Devuelve el peso del luchador.
   * @returns Peso del luchador
   */
  public getPeso() {
    return this.peso;
  };

  /**
   * Devuelve la altura del luchador.
   * @returns Altura del luchador
   */
  public getAltura() {
    return this.altura;
  };

  /**
   * Devuelve el tipo del luchador.
   * @returns Tipo del luchador
   */
  public getTipo() {
    return this.tipo;
  };

  /**
   * Devuelve las cualidades del luchador.
   * @returns Cualidades del luchador
   */
  public getEstadisticas(): Object {
    return this.estadisticas;
  };

  /**
   * Devuelve la capacidad de ataque del luchador.
   * @returns Ataque del luchador
   */
  public getAtaque() {
    return this.estadisticas.ataque;
  };

  /**
   * Devuelve la capacidad de defensa del luchador.
   * @returns Defensa del luchador
   */
  public getDefensa() {
    return this.estadisticas.defensa;
  };

  /**
   * Devuelve la capacidad de velocidad del luchador.
   * @returns Velocidad del luchador
   */
  public getVelocidad() {
    return this.estadisticas.velocidad;
  };

  /**
   * Devuelve el daño máximo del luchador.
   * @returns Daño máximo del luchador
   */
  public getHP() {
      return this.estadisticas.hp;
  };

  /**
   * Asigna el daño de un ataque.
   * @param hp daño sufrido por el luchador
   */
  public setDano(hp: number) {
    this.estadisticas.hp -= hp;
  };

  /**
   * Devuelve la frase
   * @returns Frase
   */
  public getCatchPhrase(): string {
    return this.catchpharse;
  }

  public abstract print(): string;
};