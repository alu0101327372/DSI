import 'mocha';
import {multiplyAll} from '../src/ejercicio-7';
import {expect} from 'chai';

describe('Ejercicio 7 - Factoría de multiplicaciones', () => {
  describe('Verficación de funcionamiento', () => {
    it('[2, 6, 8](3) => [6, 18, 24]', () => {
      expect(multiplyAll([2, 6, 8])(3)).to.be.eql([6, 18, 24]);
    });
    it('[3, 5, 7, 9](2) => [6, 18, 24]', () => {
      expect(multiplyAll([3, 5, 7, 9])(2)).to.be.eql([6, 10, 14, 18]);
    });
    it('[1, 2, 3, 4](5) => [6, 18, 24]', () => {
      expect(multiplyAll([1, 2, 3, 4])(5)).to.be.eql([5, 10, 15, 20]);
    });
  });

  describe('Si no se le pasa ningun parámetro devuelve undefined', () => {
    it(' = undefined', () => {
      expect(multiplyAll([])(3)).to.be.equal(undefined);
    });
  });
});