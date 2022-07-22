import { DC } from "./DC";
import { Marvel } from "./Marvel";
import { Fighter } from "./Fighter";
import { DragonBall } from "./DragonBall";
import { Pokemon } from "./Pokemon";
import { StarWars } from "./StarWars";

/**
 * Clase que simula un combate
 */
export class Combat {
  /**
   * Inicializa el combate.
   * @param fighterA {fighter} fighter A
   * @param fighterB {fighter} fighter B
   */
  constructor(private fighterA: Fighter, private fighterB: Fighter) {
    this.fighterA = fighterA;
    this.fighterB = fighterB;
  };

  /**
   * Metodo que calcula el daño de un ataque de un fighter a otro.
   * @param ataque valor del ataque
   * @param defensa valor de la defensa
   * @returns daño del ataque
   */
  private combate(ataque: number, defensa: number): number {
    let efectividad: number = 0;

    if (this.fighterA instanceof Pokemon) {
      if (this.fighterB instanceof Pokemon) {
        if (this.fighterA.getTipo() === "fuego") {
          if (this.fighterB.getTipo() === "hierba") {
            efectividad = 2;
          } else if (this.fighterB.getTipo() === "agua") {
            efectividad = 0.5;
          } else if (this.fighterB.getTipo() === "electrico") {
            efectividad = 1;
          } else if (this.fighterB.getTipo() === "fuego") {
            efectividad = 1;
          }
        } else if (this.fighterA.getTipo() === "agua") {
          if (this.fighterB.getTipo() === "hierba") {
            efectividad = 0.5;
          } else if (this.fighterB.getTipo() === "fuego") {
            efectividad = 2;
          } else if (this.fighterB.getTipo() === "electrico") {
            efectividad = 0.5;
          } else if (this.fighterB.getTipo() === "agua") {
            efectividad = 1;
          }
        } else if (this.fighterA.getTipo() === "hierba") {
          if (this.fighterB.getTipo() === "fuego") {
            efectividad = 0.5;
          } else if (this.fighterB.getTipo() === "agua") {
            efectividad = 2;
          } else if (this.fighterB.getTipo() === "electrico") {
            efectividad = 1;
          } else if (this.fighterB.getTipo() === "hierba") {
            efectividad = 1;
          }
        } else if (this.fighterA.getTipo() === "electrico") {
          if (this.fighterB.getTipo() === "fuego") {
            efectividad = 1;
          } else if (this.fighterB.getTipo() === "agua") {
            efectividad = 2;
          } else if (this.fighterB.getTipo() === "hierba") {
            efectividad = 1;
          } else if (this.fighterB.getTipo() === "electrico") {
            efectividad = 1;
          }
        }
      }
      else if (this.fighterB instanceof Marvel) efectividad = 0.5;
      else if (this.fighterB instanceof DC) efectividad = 2;
      else if (this.fighterB instanceof StarWars) efectividad = 2;
      else if (this.fighterB instanceof DragonBall) efectividad = 1;
    }

    else if (this.fighterA instanceof Marvel) {
      if (this.fighterB instanceof Pokemon) efectividad = 2;
      if (this.fighterB instanceof Marvel) efectividad = 1;
      if (this.fighterB instanceof DC) efectividad = 1;
      if (this.fighterB instanceof StarWars) efectividad = 0.5;
      if (this.fighterB instanceof DragonBall) efectividad = 2;
    }

    else if (this.fighterA instanceof StarWars) {
      if (this.fighterB instanceof Pokemon) efectividad = 0.5;
      if (this.fighterB instanceof Marvel) efectividad = 2;
      if (this.fighterB instanceof DC) efectividad = 0.5;
      if (this.fighterB instanceof StarWars) efectividad = 1;
      if (this.fighterB instanceof DragonBall) efectividad = 1;
    }

    else if (this.fighterA instanceof DragonBall) {
        if (this.fighterB instanceof Pokemon) efectividad = 1;
        if (this.fighterB instanceof Marvel) efectividad = 0.5;
        if (this.fighterB instanceof DC) efectividad = 2;
        if (this.fighterB instanceof StarWars) efectividad = 1;
        if (this.fighterB instanceof DragonBall) efectividad = 1;
    }

    else if (this.fighterA instanceof DragonBall) {
      if (this.fighterB instanceof Pokemon) efectividad = 0.5;
      if (this.fighterB instanceof Marvel) efectividad = 1;
      if (this.fighterB instanceof DC) efectividad = 1;
      if (this.fighterB instanceof StarWars) efectividad = 2;
      if (this.fighterB instanceof DragonBall) efectividad = 0.5;
    }

    return 50 * (ataque / defensa) * efectividad;
  };

  /**
   * Realiza la simulación del combate.
   * @returns {string} El fighter ganador
   */
  public start(): string {
    let turno: boolean = true;
    let dano: number = 0;
    let resultado: string = '';

    console.log(`${this.fighterA.getNombre()} vs ${this.fighterB.getNombre()}`);
    while ((this.fighterA.getHP() >= 0) && (this.fighterB.getHP() >= 0)) {
      if (turno) {
        dano = this.combate(this.fighterA.getAtaque(), this.fighterB.getDefensa());
        this.fighterB.setDano(dano);
        turno = !turno;
      } else {
        dano = this.combate(this.fighterB.getAtaque(), this.fighterA.getDefensa());
        this.fighterA.setDano(dano);
        turno = !turno;
      }
      console.log(`${this.fighterA.getNombre()} ... ${this.fighterA.getCatchPhrase()} tiene un HP: ${this.fighterA.getHP()} y ` +
      `${this.fighterB.getNombre()} ... ${this.fighterB.getCatchPhrase()} tiene un HP: ${this.fighterB.getHP()}`);
    }
    if (this.fighterA.getHP() <= 0) {
      resultado = `El fighter ${this.fighterB.getNombre()} ha sido vencedor`;
    } else {
      resultado = `El fighter ${this.fighterA.getNombre()} ha sido vencedor`;
    }
    return resultado;
  };
};