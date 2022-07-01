import 'mocha';
import {isValidISBN} from '../src/ejercicio-4';
import {expect} from 'chai';

describe('Ejercicio 4 - Conversor ISBN', () => {
  it('3-598-21508-8 es un ISBN válido', () =>{
      expect(isValidISBN("3-598-21508-8")).to.be.equal(true);
  });
});