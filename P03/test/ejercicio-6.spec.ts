import 'mocha';
import {ipsInRange} from '../src/ejercicio-6';
import {expect} from 'chai';

describe('Ejercicio 6 - Contando IPs', () => {
  it('10.0.0.0 y 10.0.0.50 -> 50', () => {
    expect(ipsInRange('10.0.0.0', '10.0.0.50')).to.be.equal(50);
  });
});