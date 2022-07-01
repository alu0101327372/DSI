import 'mocha';
import {manhattanDistance} from '../src/ejercicio-10';
import {expect} from 'chai';

describe('Ejercicio 10 - Distancia de Manhattan', () => {
  it('1, 3) y (4, 10) = 10', () =>{
      expect(manhattanDistance([1, 3], [4, 10])).to.be.equal(10);
  });
});