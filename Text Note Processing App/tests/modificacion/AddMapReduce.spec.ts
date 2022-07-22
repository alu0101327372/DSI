import 'mocha';
import {expect} from 'chai';
import {AddMapReduce} from '../../src/modificacion/AddMapReduce';

describe('Pruebas clase AddMapReduce', () => {
  let addReduce: AddMapReduce;
  before(function() {
    addReduce = new AddMapReduce([1, 2, 3]);
  });
  it('new AddMapReduce([1, 2, 3]) is not equal null', () => {
    expect(new AddMapReduce([1, 2, 3])).not.to.be.equal(null);
  });
  it('run() returns 9', () => {
    expect(addReduce.run()).to.be.equal(9);
  });
  it('reduce() returns 9', () => {
    expect(addReduce.reduce()).to.be.equal(9);
  });
  it(`beforeReduce() returns 'Starting AddReduce ...'`, () => {
    expect(addReduce.beforeReduce()).to.be.equal('Starting AddMapReduce ...');
  });
  it(`afterReduce() returns ''AddReduce finished. Result: 9''`, () => {
    expect(addReduce.afterReduce()).to.be.equal('AddMapReduce finished. Result: 9');
  });
});