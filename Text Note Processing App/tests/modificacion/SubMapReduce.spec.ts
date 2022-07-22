import 'mocha';
import {expect} from 'chai';
import {SubMapReduce} from '../../src/modificacion/SubMapReduce';

describe('Pruebas clase SubMapReduce', () => {
  let addReduce: SubMapReduce;
  before(function() {
    addReduce = new SubMapReduce([1, 2, 3]);
  });
  it('new SubMapReduce([1, 2, 3]) is not equal null', () => {
    expect(new SubMapReduce([1, 2, 3])).not.to.be.equal(null);
  });
  it('run() returns -5', () => {
    expect(addReduce.run()).to.be.equal(-5);
  });
  it('reduce() returns -5', () => {
    expect(addReduce.reduce()).to.be.equal(-5);
  });
  it(`beforeReduce() returns 'Starting AddReduce ...'`, () => {
    expect(addReduce.beforeReduce()).to.be.equal('Starting SubMapReduce ...');
  });
  it(`afterReduce() returns ''AddReduce finished. Result: 23''`, () => {
    expect(addReduce.afterReduce()).to.be.equal('SubMapReduce finished. Result: -5');
  });
});