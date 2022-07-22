import 'mocha';
import {meanAndConcatenate} from '../src/ejercicio-5';
import {expect} from 'chai';

describe('Ejercicio 5 - Calcular la media y concatenar cadenas', () => {
  describe('Verficación de funcionamiento', () => {
    it('[u, 6, d, 1, i, w, 6, s, t, 4, a, 6, g, 1, 2, w, 8, o, 2, 0] => [3.6, "udiwstagwo"]', () => {
      expect(meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0])).to.be.eql([3.6, "udiwstagwo"]);
    });
    it('[h, o, l, a, 1, 2, 3, 4] => [2.5, "hola"]', () => {
        expect(meanAndConcatenate(['h', 'o', 'l', 'a', 1, 2, 3, 4])).to.be.eql([2.5, "hola"]);
    });
  });

  describe('Si no tiene cadenas solo devuelve la media', () => {
    it('[2, 4, 6, 8, 10] => 7.5', () => {
      expect(meanAndConcatenate([2, 4, 6, 8, 10])).to.be.eql([6]);
    });
  });

  describe('Si no tiene numeros solo devuelve la concatenación', () => {
    it('[h, o, l, a, c, a, r, a, c, o, l, a]', () => {
      expect(meanAndConcatenate(['h', 'o', 'l', 'a', 'c','a', 'r', 'a', 'c', 'o', 'l', 'a'])).to.be.eql(["holacaracola"]);
    });
  });

  describe('Si no se le pasa ningun parámetro devuelve undefined', () => {
    it(' = undefined', () => {
      expect(meanAndConcatenate([])).to.be.equal(undefined);
    });
  });
});