import 'mocha';
import {moveZeros} from '../src/ejercicio-6';
import {expect} from 'chai';

describe('Ejercicio 6 - Mover los ceros al final', () => {
  describe('Verficación de funcionamiento', () => {
    it('[1, 0, 1, 2, 0, 1, 3] = [1, 1, 2, 1, 3, 0, 0]', () => {
      expect(moveZeros([1, 0, 1, 2, 0, 1, 3])).to.be.eql([1, 1, 2, 1, 3, 0, 0]);
    });
    it('[1, 0, 1, 2, 0, 1, 3] = [1, 1, 2, 1, 3, 0, 0]', () => {
        expect(moveZeros([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    });
  });

  describe('Si no tiene ceros no cambia nada', () => {
    it('[1, 0, 1, 2, 0, 1, 3] = [1, 1, 2, 1, 3, 0, 0]', () => {
      expect(moveZeros([2, 4, 6, 8, 10])).to.be.eql([2, 4, 6, 8, 10]);
    });
  });

  describe('Si no se le pasa ningun parámetro devuelve undefined', () => {
    it(' = undefined', () => {
      expect(moveZeros([])).to.be.equal(undefined);
    });
  });
});