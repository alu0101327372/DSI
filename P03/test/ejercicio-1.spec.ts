import 'mocha';
import {isLeapYear} from '../src/ejercicio-1';
import {expect} from 'chai';

describe('Ejercicio 1 - Año Bisiesto', () => {
  it('2004 es un año bisiesto', () =>{
      expect(isLeapYear(2004)).to.be.equal(true);
  });
});
