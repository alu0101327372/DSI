import 'mocha';
import {expect} from 'chai';
import {ProdMapReduce} from '../../src/modificacion/ProdMapReduce';

describe('Pruebas clase ProdMapReduce', () => {
  let addReduce: ProdMapReduce;
  before(function() {
    addReduce = new ProdMapReduce([1, 2, 3]);
  });
  it('new ProdMapReduce([1, 2, 3]) is not equal null', () => {
    expect(new ProdMapReduce([1, 2, 3])).not.to.be.equal(null);
  });
  it('run() returns 24', () => {
    expect(addReduce.run()).to.be.equal(24);
  });
  it('reduce() returns 24', () => {
    expect(addReduce.reduce()).to.be.equal(24);
  });
  it(`beforeReduce() returns 'Starting AddReduce ...'`, () => {
    expect(addReduce.beforeReduce()).to.be.equal('Starting ProdMapReduce ...');
  });
  it(`afterReduce() returns ''AddReduce finished. Result: 23''`, () => {
    expect(addReduce.afterReduce()).to.be.equal('ProdMapReduce finished. Result: 24');
  });
});