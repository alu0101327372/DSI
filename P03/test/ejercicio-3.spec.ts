import 'mocha';
import {fromSnakeToCamelCase} from '../src/ejercicio-3';
import {fromCamelToSnakeCase} from '../src/ejercicio-3';
import {expect} from 'chai';

describe('Ejercicio 3 - SnakeCase to CamalCase and back', () => {
  describe('SnakeCase to CamelCase', () => {
    it('hola_caracola -> holaCaracola', () =>{
      expect(fromSnakeToCamelCase("hola_caracola")).to.be.equal("holaCaracola");
    });
  });
  describe('CamelCase to SnakeCase', () => {
    it('estoEsUnaPrueba -> esto_es_una_prueba', () =>{
      expect(fromCamelToSnakeCase("estoEsUnaPrueba")).to.be.equal("esto_es_una_prueba");
    });
  });
});
