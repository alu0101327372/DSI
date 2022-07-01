import { Pokemon, tiposPokemon } from "./Pokemon";

/**
 * Clase que simula un combate
 */
export class Combat {
  /**
   * Inicializa el combate.
   * @param pokemonA {Pokemon} Pokemon A
   * @param pokemonB {Pokemon} Pokemon B
   */
  constructor(private pokemonA: Pokemon, private pokemonB: Pokemon) {
    this.pokemonA = pokemonA;
    this.pokemonB = pokemonB;
  };

  /**
   * Metodo que calcula el daño de un ataque de un pokemon a otro.
   * @param tipoEntrenador tipo de pokemon atacante
   * @param tipoOponente tipo de pokemon defensor
   * @param ataque valor del ataque
   * @param defensa valor de la defensa
   * @returns daño del ataque
   */
  private combate(tipoEntrenador: tiposPokemon, tipoOponente: tiposPokemon, ataque: number, defensa: number): number {
    let efectividad: number = 0;

    if (tipoEntrenador === "fuego") {
      if (tipoOponente === "hierba") {
        efectividad = 2;
      } else if (tipoOponente === "agua") {
        efectividad = 0.5;
      } else if (tipoOponente === "electrico") {
        efectividad = 1;
      } else if (tipoOponente === "fuego") {
        efectividad = 1;
      }
    } else if (tipoEntrenador === "agua") {
      if (tipoOponente === "hierba") {
        efectividad = 0.5;
      } else if (tipoOponente === "fuego") {
        efectividad = 2;
      } else if (tipoOponente === "electrico") {
        efectividad = 0.5;
      } else if (tipoOponente === "agua") {
        efectividad = 1;
      }
    } else if (tipoEntrenador === "hierba") {
      if (tipoOponente === "fuego") {
        efectividad = 0.5;
      } else if (tipoOponente === "agua") {
        efectividad = 2;
      } else if (tipoOponente === "electrico") {
        efectividad = 1;
      } else if (tipoOponente === "hierba") {
        efectividad = 1;
      }
    } else if (tipoEntrenador === "electrico") {
      if (tipoOponente === "fuego") {
        efectividad = 1;
      } else if (tipoOponente === "agua") {
        efectividad = 2;
      } else if (tipoOponente === "hierba") {
        efectividad = 1;
      } else if (tipoOponente === "electrico") {
        efectividad = 1;
      }
    }
    return 50 * (ataque / defensa) * efectividad;
  };

  /**
   * Realiza la simulación del combate.
   * @returns {string} El pokemon ganador
   */
  public start(): string {
    let turno: boolean = true;
    let dano: number = 0;
    let resultado: string = '';

    console.log(`${this.pokemonA.getNombre()} vs ${this.pokemonB.getNombre()}`);
    while ((this.pokemonA.getHP() >= 0) && (this.pokemonB.getHP() >= 0)) {
      if (turno) {
        dano = this.combate(this.pokemonA.getTipo(), this.pokemonB.getTipo(), this.pokemonA.getAtaque(), this.pokemonB.getDefensa());
        this.pokemonB.setDano(dano);
        turno = !turno;
      } else {
        dano = this.combate(this.pokemonB.getTipo(), this.pokemonA.getTipo(), this.pokemonB.getAtaque(), this.pokemonA.getDefensa());
        this.pokemonA.setDano(dano);
        turno = !turno;
      }
      console.log(`El pokemon A tiene un HP: ${this.pokemonA.getHP()} y ` +
      `El pokemon B tiene un HP: ${this.pokemonB.getHP()}`);
    }
    if (this.pokemonA.getHP() <= 0) {
      resultado = `El pokemon ${this.pokemonB.getNombre()} ha sido vencedor`;
    } else {
      resultado = `El pokemon ${this.pokemonA.getNombre()} ha sido vencedor`;
    }
    return resultado;
  };
};
