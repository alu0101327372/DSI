"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.manhattanDistance = void 0;
/**
 * Metodo que calcula la distancia de manhattan entre dos puntos.
 * @param p1 punto nº1
 * @param p2 punto nº2
 * @returns distancia de manhattan
 */
function manhattanDistance(p1, p2) {
    let result = 0;
    if (p1.length != p2.length) {
        return 0;
    }
    else {
        for (let i = 0; i < p1.length; i++) {
            result += Math.abs(p1[i] - p2[i]);
        }
    }
    return result;
}
exports.manhattanDistance = manhattanDistance;
