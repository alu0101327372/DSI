/**
 * @type {[number, number]} Punto bidimensional
 */
export type Point = [number, number];

/**
 * Método que calcula la suma entre dos puntos.
 * @param point1 {Point} Punto 1
 * @param point2 {Point} Punto 2
 * @returns {Point} La suma devuelve la suma de los dos puntos
 */
export function addPoint2D(point1: Point, point2: Point): Point {
  return point1.map((element, index) => element + point2[index]) as Point;
}

/**
 * Método que calcula la resta entre dos puntos.
 * @param point1 {Point} Punto 1
 * @param point2 {Point} Punto 2
 * @returns {Point} La suma devuelve la resta de los dos puntos
 */
export function substractPoint2D(point1: Point, point2: Point): Point {
  return point1.map((element, index) => element - point2[index]) as Point;
}

/**
 * Método que calcula la multplicación del número por un escalar.
 * @param point {Point} Punto
 * @param num {number} Escalar
 * @returns {Point} La suma devuelve la multplicación del número por el escalar
 */
export function productPoint2D(point: Point, num: number): Point {
  return point.map((element => element * num)) as Point;
}

/**
 * Método que calcula distancia euclídea entre dos puntos.
 * @param point1 {Point} Punto 1
 * @param point2 {Point} Punto 2
 * @returns {number} La distancia euclidea
 */
export function euclideanDistancePoint2D(point1: Point, point2: Point): number {
  return Math.sqrt(point1.map((element, index) => Math.pow(element - point2[index], 2)).reduce((total, element) => total + element));
}
