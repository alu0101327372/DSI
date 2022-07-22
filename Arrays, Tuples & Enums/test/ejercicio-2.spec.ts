import 'mocha';
import {fromArrayToRanges} from '../src/ejercicio-2';
import {fromRangesToArray} from '../src/ejercicio-2';
import {expect} from 'chai';

describe('Ejercicio 7 - Factoría de multiplicaciones', () => {
  describe('fromArrayToRanges y fromRangesToArray', () => {
    it('[5, 6, 7, 9, 12, 13, 14] <=> 5_7, 9, 12_14', () => {
      expect(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14])).to.be.eql("5_7,9,12_14");
      expect(fromRangesToArray("5_7, 9, 12_14")).to.be.eql([5, 6, 7, 9, 12, 13, 14]);
    });
    it('[-3, -2, -1, 3, 5, 6, 7] <=> -3_-1, 3, 5_7', () => {
      expect(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])).to.be.eql("-3_-1,3,5_7");
      expect(fromRangesToArray("1_3, 5_7")).to.be.eql([1, 2, 3, 5, 6, 7]);
    });
  });

  describe('Si no se le pasa vacío devuelve undefined', () => {
    it(' = undefined', () => {
      expect(fromArrayToRanges([])).to.be.equal(undefined);
    });
    it(' = undefined', () => {
      expect(fromRangesToArray('')).to.be.equal(undefined);
    });
  });
});