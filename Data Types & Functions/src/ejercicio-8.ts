/** 
 * @type {tiposPokemon} - crea un nuevo tipo llamado 'tiposPokemon'
*/
export type tiposPokemon = "fuego" | "agua" | "hierba" | "electrico";

/**
 * Metodo que calcula el daño de un ataque de un pokemon a otro.
 * @param tipoEntrenador tipo de pokemon atacante
 * @param tipoOponente tipo de pokemon defensor
 * @param ataque valor del ataque
 * @param defensa valor de la defensa
 * @returns daño del ataque
 */
export function pokemon(tipoEntrenador: tiposPokemon, tipoOponente: tiposPokemon, ataque: number, defensa: number): number {
  let efectividad: number = 0;

  if (tipoEntrenador === "fuego") {
    if (tipoOponente === "hierba") {
      efectividad = 2;
    }
    else if (tipoOponente === "agua") {
      efectividad = 0.5;
    }
    else if (tipoOponente === "electrico") {
      efectividad = 1;
    }
    else if (tipoOponente === "fuego") {
      efectividad = 1;
    }
  }
  else if (tipoEntrenador === "agua") {
    if (tipoOponente === "hierba") {
      efectividad = 0.5;
    }
    else if (tipoOponente === "fuego") {
      efectividad = 2;
    }
    else if (tipoOponente === "electrico") {
      efectividad = 0.5;
    }
    else if (tipoOponente === "agua") {
      efectividad = 1;
    }
  }
  else if (tipoEntrenador === "hierba") {
    if (tipoOponente === "fuego") {
      efectividad = 0.5;
    }
    else if (tipoOponente === "agua") {
      efectividad = 2;
    }
    else if (tipoOponente === "electrico") {
      efectividad = 1;
    }
    else if (tipoOponente === "hierba") {
      efectividad = 1;
    }
  }
  else if (tipoEntrenador === "electrico") {
    if (tipoOponente === "fuego") {
      efectividad = 1;
    }
    else if (tipoOponente === "agua") {
      efectividad = 2;
    }
    else if (tipoOponente === "hierba") {
      efectividad = 1;
    }
    else if (tipoOponente === "electrico") {
      efectividad = 1;
    }
  }
  return 50 * (ataque / defensa) * efectividad;
}