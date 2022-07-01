import 'mocha';
import {pokemon} from '../src/ejercicio-8';
import {expect} from 'chai';

describe('Ejercicio 8 - Entrenador Pokemon', () => {
  it('fuego vs agua -> fuego 200 de daño', () =>{
      expect(pokemon('agua', 'fuego', 100, 50)).to.be.equal(200);
  });
});