import 'mocha';
import {romanToDecimal} from '../src/ejercicio-9';
import {decimalToRoman} from '../src/ejercicio-9';
import {expect} from 'chai';

describe('Ejercicio 9 - Astérix no entiende a estos romanos', () => {
    describe('Romano a decimal', () => {
      it('El número romano MCMXCV es equivalente al número entero en base decimal 1995', () =>{
        expect(romanToDecimal('MCMXCV')).to.be.equal(1995);
      });
    });
    describe('CamelCase to SnakeCase', () => {
      it('El número entero en base decima 2014 es equivalente al romano MMXIV.', () =>{
        expect(decimalToRoman(2014)).to.be.equal('MMXIV');
      });
    });
  });