import 'mocha';
import {addPoint3D} from '../src/ejercicio-9';
import {substractPoint3D} from '../src/ejercicio-9';
import {productPoint3D} from '../src/ejercicio-9';
import {euclideanDistancePoint3D} from '../src/ejercicio-9';
import {expect} from 'chai';

describe('Ejercicio 9 - Puntos n-dimensionales', () => {
  describe('Función suma', () => {
    it('[1, 2, 4], [2, 3, 5] => [3, 5, 9]', () => {
      expect(addPoint3D([1, 2, 4], [2, 3, 5])).to.be.eql([3, 5, 9]);
    });
    it('[4, 2, 1, 0], [1, 3, 4, 2] => [5, 5, 5, 2]', () => {
      expect(addPoint3D([4, 2, 1, 0], [1, 3, 4, 2])).to.be.eql([5, 5, 5, 2]);
    });
    it('No se pueden sumar puntos de distintas dimensiones', () => {
      expect(addPoint3D([0, 5, 3], [2, 3, 4, 4])).to.be.equal(undefined);
    });
  });

  describe('Función resta', () => {
    it('[1, 2, 3], [2, 3, 5] => [-1, -1, -2]', () => {
      expect(substractPoint3D([1, 2, 3], [2, 3, 5])).to.be.eql([-1, -1, -2]);
    });
    it('[4, 2, 5, 8], [1, 3, 8, 9] => [3, -1, -3, -1]', () => {
      expect(substractPoint3D([4, 2, 5, 8], [1, 3, 8, 9])).to.be.eql([3, -1, -3, -1]);
    });
    it('No se pueden restar puntos de distintas dimensiones', () => {
      expect(substractPoint3D([0, 5, 4], [2, 3, 9, 9])).to.be.equal(undefined);
    });
  });

  describe('Función producto por un escalar', () => {
    it('[1, 2] * 3 => [3, 6]]', () => {
      expect(productPoint3D([1, 2, 8], 3)).to.be.eql([3, 6, 24]);
    });
    it('[4, 2] * 7 => [0, 0]', () => {
      expect(productPoint3D([4, 2, 1, 0], 0)).to.be.eql([0, 0, 0, 0]);
    });
    it('[3, 5] * -1 => [-3, -5]', () => {
      expect(productPoint3D([3, 5, 1, 3, 8], -1)).to.be.eql([-3, -5, -1, -3, -8]);
    });
  });

  describe('Función distancia euclídea', () => {
    it('[1, 2], [2, 3] => ', () => {
      expect(euclideanDistancePoint3D([1, 2, 3], [2, 3, 1])).to.be.eql(2.449489742783178);
    });
    it('[4, 2], [1, 3] => ', () => {
      expect(euclideanDistancePoint3D([4, 2, 5, 8], [1, 3, 1, 2])).to.be.eql(7.874007874011811);
    });
    it('[0, 5], [2, 3] => ', () => {
      expect(euclideanDistancePoint3D([0, 5, 1, 3], [2, 3, 3])).to.be.equal(undefined);
    });
  });
});