import 'mocha';
import { expect } from 'chai';
import { Decode } from '../src/ejercicio-3/Decode'
import { Encode } from '../src/ejercicio-3/Encode';
import { Run } from '../src/ejercicio-3/Run';

describe('Ejercicio 2 - Encode', () => {
  describe('Prueba clase Encode', () => {
    const encode = new Encode('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
    it('Prueba métodos y atributos publicos', () => {
      expect(encode.cypher('HOLAESTOESUNAPRUEBA', 'CLAVE')).to.be.eql('KAMWJVFPAXXYBMWXPCW');
    });
  });

  describe('Prueba clase Decode', () => {
    const decode = new Decode('0123456789');
    it('Métodos de la clase Connect4', () => {
      expect(decode.cypher('3456', '10')).to.be.eql('1335')
    });
  });
});