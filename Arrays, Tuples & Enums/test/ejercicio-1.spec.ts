import 'mocha';
import {productTable} from '../src/ejercicio-1';
import {expect} from 'chai';

describe('Ejercicio 1 - Tablas de multiplicar', () => {
  describe('Verficación de funcionamiento', () => {
    it('N = 2; Resultado: [[1, 2], [2, 4]', () => {
      expect(productTable(2)).to.be.eql([[1, 2], [2, 4]]);
    });
    it('N = 3; Resultado: [[1, 2, 3], [2, 4, 6], [3, 6, 9]]', () => {
      expect(productTable(3)).to.be.eql([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
    });
    it('N = 4; Resultado: [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]', () => {
      expect(productTable(4)).to.be.eql([[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]);
    });
  });

  describe('Sólo permite valores N >= 1', () => {
    it('N = 0; Resultado: undefined', () => {
      expect(productTable(0)).to.be.equal(undefined);
    });
  });
});