import 'mocha';
import { expect } from 'chai';
import { NumericSearchableCollection } from '../src/ejercicio-mod/NumericSearchableCollection';
import { StringSearchableCollection } from '../src/ejercicio-mod/StringSearchableCollection';


describe('Ejercicio Modificación', () => {
  describe('Prueba de la clase NumericSearchableCollection', () => {
    let num = new NumericSearchableCollection([1, 2, 3, 4]);
    it('Métodos de la clase NumericSearchableCollection', () => {
      expect(num.getItem(2)).to.be.eql(3);
      expect(num.getNumberOfItems()).to.be.eql(4);
      expect(num.search(1)).to.be.eql([1]);
      num.addItem(5);
      expect(num.getNumberOfItems()).to.be.eql(5);
      num.removeItem(3);
      expect(num.getNumberOfItems()).to.be.eql(4);
    });
  });

  describe('Prueba de la clase StringSearchableCollection', () => {
    let str = new StringSearchableCollection(['hola', 'ba', 'c', 'd']);
    it('Métodos de la clase StringSearchableCollection', () => {
      expect(str.getItem(2)).to.be.eql('c');
      expect(str.getNumberOfItems()).to.be.eql(4);
      expect(str.search('a')).to.be.eql(['hola', 'ba']);
      str.addItem('e');
      expect(str.getNumberOfItems()).to.be.eql(5);
      str.removeItem(4);
      expect(str.getNumberOfItems()).to.be.eql(4);
    });
  });
});