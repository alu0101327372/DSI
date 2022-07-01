import 'mocha';
import {decodeResistor} from '../src/ejercicio-3';
import {expect} from 'chai';

describe('Ejercicio 3 - Decodificar resistencias', () => {
  describe('Verficación de funcionamiento', () => {
    it('Marrón-Verde = 15', () => {
      expect(decodeResistor('marron', 'verde')).to.be.eql(15);
    });
    it('Naranja-Verde = 15', () => {
        expect(decodeResistor('Naranja', 'verde')).to.be.eql(35);
    });
  });

  describe('Devuelve un valor de dos dígitos', () => {
    it('azUl-ROJO-amarillo = 62', () => {
      expect(decodeResistor('azUl', 'ROJO', 'amarillo')).to.be.equal(62);
    });
  });

  describe('Permite tanto mayusculas como minusculas', () => {
    it('azUl-ROJO = 62', () => {
      expect(decodeResistor('azUl', 'ROJO')).to.be.equal(62);
    });
  });

  describe('Si no se le pasa ningun parámetro devuelve undefined', () => {
    it(' = undefined', () => {
      expect(decodeResistor()).to.be.equal(undefined);
    });
  });
});