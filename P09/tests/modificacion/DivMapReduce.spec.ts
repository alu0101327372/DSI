import 'mocha';
import {expect} from 'chai';
import {DivMapReduce} from '../../src/modificacion/DivMapReduce';

describe('Pruebas clase DivMapReduce', () => {
  let addReduce: DivMapReduce;
  before(function() {
    addReduce = new DivMapReduce([1, 2, 3]);
  });
  it('new DivMapReduce([1, 2, 3]) is not equal null', () => {
    expect(new DivMapReduce([1, 2, 3])).not.to.be.equal(null);
  });
  it('run() returns 0', () => {
    expect(addReduce.run()).to.be.equal(0);
  });
  it('reduce() returns 0', () => {
    expect(addReduce.reduce()).to.be.equal(0);
  });
  it(`beforeReduce() returns 'Starting AddReduce ...'`, () => {
    expect(addReduce.beforeReduce()).to.be.equal('Starting DivMapReduce ...');
  });
  it(`afterReduce() returns ''AddReduce finished. Result: 23''`, () => {
    expect(addReduce.afterReduce()).to.be.equal('DivMapReduce finished. Result: 0');
  });
});