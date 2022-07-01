import 'mocha';
import {sortDecreasing} from '../src/ejercicio-5';
import {expect} from 'chai';

describe('Ejercicio 5 - Orden descendente', () => {
  it('145263 ordenado es 654321', () =>{
      expect(sortDecreasing(145263)).to.be.equal(654321);
  });
});