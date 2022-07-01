import 'mocha';
import {expect} from 'chai';
import { Racional } from '../src/ejercicio-mod/ejercicio-mod-1'

describe('Ejercicio Mod - Racional', () => {
  const n1 = new Racional(1, 2);
  const n2 = new Racional(1, 0);
  const n3 = new Racional(1, 2);
  const n4 = new Racional(3, 2);
  const n5 = new Racional(4, 2);
  const n6 = new Racional(4, 2);
  const n7 = new Racional(3, 2);
  const n0 = new Racional(3, 9);

  describe('Prueba clase Racional', () => {
    it('Getters', () => {
      expect(n1.getN()).to.be.eql(1);
      expect(n1.getD()).to.be.eql(2);
    });
    it ('Si se le pasa un 0 al denominador devuele NaN', () => {
      expect(n2.getN()).to.be.eql(NaN);
      expect(n2.getD()).to.be.eql(NaN);
    });
  });

  describe('Método suma', () => {
    it('Suma 1/2 + 1/2', () => {
      expect(n1.suma(n3)).to.be.eql(new Racional(4, 4));
    });
  });

  describe('Método resta', () => {
    it('resta 1/2 - 3/2', () => {
      expect(n1.resta(n3)).to.be.eql(new Racional(0, 4));
    });
  });

  describe('Método multiplicación', () => {
    it('Suma 1/2 + 3/2', () => {
      expect(n1.multiplicacion(n5)).to.be.eql(new Racional(4, 4));
    });
  });

  describe('Método división', () => {
    it('Suma 1/2 + 3/2', () => {
      expect(n1.division(n5)).to.be.eql(new Racional(8, 2));
    });
  });

  describe('Método Inversa', () => {
    it('4 / 2 => 2 / 4', () => {
      expect(n6.inverse()).to.be.eql(new Racional(2, 4));
    });
  });

  describe('Método Reducción', () => {
    it('4 / 2 => 2 / 1', () => {
      n0.reducir();
      expect(n0.getN()).to.be.eql(1);
      expect(n0.getD()).to.be.eql(3);
    });
  });

  describe('Método Punto Fijo', () => {
    it('', () => {
      expect(n7.puntoFijo()).to.be.eql(1.5);
    });
  });

  describe('Método print', () => {
    it('Imprimir 1/2', () => {
      expect(n1.print()).to.be.eql('1 / 2');
    });
  });
});