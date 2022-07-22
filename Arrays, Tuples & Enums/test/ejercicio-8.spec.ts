import 'mocha';
import {addPoint2D} from '../src/ejercicio-8';
import {substractPoint2D} from '../src/ejercicio-8';
import {productPoint2D} from '../src/ejercicio-8';
import {euclideanDistancePoint2D} from '../src/ejercicio-8';
import {expect} from 'chai';

describe('Ejercicio 8 - Puntos bi-dimensionales', () => {
  describe('Función suma', () => {
    it('[1, 2], [2, 3] => [3, 5]', () => {
      expect(addPoint2D([1, 2], [2, 3])).to.be.eql([3, 5]);
    });
    it('[4, 2], [1, 3] => [5, 5]', () => {
      expect(addPoint2D([4, 2], [1, 3])).to.be.eql([5, 5]);
    });
    it('[0, 5], [2, 3] => [2, 8]', () => {
      expect(addPoint2D([0, 5], [2, 3])).to.be.eql([2, 8]);
    });
  });

  describe('Función resta', () => {
    it('[1, 2], [2, 3] => [-1, -1]', () => {
      expect(substractPoint2D([1, 2], [2, 3])).to.be.eql([-1, -1]);
    });
    it('[4, 2], [1, 3] => [3, -1]', () => {
      expect(substractPoint2D([4, 2], [1, 3])).to.be.eql([3, -1]);
    });
    it('[0, 5], [2, 3] => [-2, 2]', () => {
      expect(substractPoint2D([0, 5], [2, 3])).to.be.eql([-2, 2]);
    });
  });

  describe('Función producto por un escalar', () => {
    it('[1, 2] * 3 => [3, 6]]', () => {
      expect(productPoint2D([1, 2], 3)).to.be.eql([3, 6]);
    });
    it('[4, 2] * 7 => [0, 0]', () => {
      expect(productPoint2D([4, 2], 0)).to.be.eql([0, 0]);
    });
    it('[3, 5] * -1 => [-3, -5]', () => {
      expect(productPoint2D([3, 5], -1)).to.be.eql([-3, -5]);
    });
  });

  describe('Función distancia euclídea', () => {
    it('[1, 2], [2, 3] => ', () => {
      expect(euclideanDistancePoint2D([1, 2], [2, 3])).to.be.eql(1.4142135623730951);
    });
    it('[4, 2], [1, 3] => ', () => {
      expect(euclideanDistancePoint2D([4, 2], [1, 3])).to.be.eql(3.1622776601683795);
    });
    it('[0, 5], [2, 3] => ', () => {
      expect(euclideanDistancePoint2D([0, 5], [2, 3])).to.be.eql(2.8284271247461903);
    });
  });
});