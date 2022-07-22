import 'mocha';
import {cabezasCerberus} from '../src/ejercicio-7';
import {expect} from 'chai';

describe('Ejercicio 7 - Wonder Woman', () => {
  it('5 cabezas, n = 10, 3 ataques', () => {
    expect(cabezasCerberus(5, 10, 3)).to.be.equal(92);
  });
});