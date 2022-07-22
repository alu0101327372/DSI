import 'mocha';
import {encodeMessage} from '../src/ejercicio-mod-1';
import {expect} from 'chai';

describe('Ejercicio Mod ', () => {
  describe('Verficación de funcionamiento', () => {
    it('Prueba 1', () => {
      expect(encodeMessage('abc')).to.be.eql(['zyx']);
    });
    it('Prueba 1', () => {
        expect(encodeMessage('abcd')).to.be.eql(['zyxw']);
      });
      it('Prueba 1', () => {
        expect(encodeMessage('abcdaaaa')).to.be.eql(['zyxwz']);
      });
  });

  describe('Si no se le pasa ningun parámetro devuelve undefined', () => {
    it(' = undefined', () => {
      expect(encodeMessage('3')).to.be.eql([ 'undef' ]);
    });
  });
});