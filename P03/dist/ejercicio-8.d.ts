declare type tiposPokemon = "fuego" | "agua" | "hierba" | "electrico";
/**
 * Metodo que calcula el daño de un ataque de un pokemon a otro.
 * @param tipoEntrenador tipo de pokemon atacante
 * @param tipoOponente tipo de pokemon defensor
 * @param ataque valor del ataque
 * @param defensa valor de la defensa
 * @returns daño del ataque
 */
export declare function pokemon(tipoEntrenador: tiposPokemon, tipoOponente: tiposPokemon, ataque: number, defensa: number): number;
export {};
