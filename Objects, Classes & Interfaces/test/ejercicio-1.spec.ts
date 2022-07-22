import 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../src/ejercicio-1/Pokemon';
import { Pokedex } from '../src/ejercicio-1/Pokedex';
import { Combat } from '../src/ejercicio-1/Combat';

describe('Ejercicio 1 - Pokedex', () => {
  describe('Prueba clase Pokemon', () => {
    const Charmander = new Pokemon('Charmander', 8.5, 60, "fuego", [52, 43, 65, 39]);
    it('Métodos de la clase Pokemon', () => {
      expect(Charmander.getNombre()).to.be.eql('Charmander');
      expect(Charmander.getPeso()).to.be.eql(8.5);
      expect(Charmander.getAltura()).to.be.eql(60);
      expect(Charmander.getTipo()).to.be.eql('fuego');
      expect(Charmander.getAtaque()).to.be.eql(52);
      expect(Charmander.getDefensa()).to.be.eql(43);
      expect(Charmander.getHP()).to.be.eql(39);
      Charmander.setDano(10);
      expect(Charmander.getHP()).to.be.eql(29);
    });
  });

  describe('Prueba clase Pokedex', () => {
    const Charmander = new Pokemon('Charmander', 8.5, 60, 'fuego', [52, 43, 65, 39]);
    const Squirtle = new Pokemon('Squirtle', 9, 50, 'agua', [44, 65, 43, 44]);
    const Bulbasaur = new Pokemon('Bulbasaur', 6.9, 70, 'hierba', [49, 49, 45, 45]);
    const pokedex = new Pokedex([Charmander, Squirtle])
    it('Métodos de la clase Pokedex', () => {
      expect(pokedex.getPokedex()).to.be.eql([Charmander, Squirtle]);
      pokedex.setPokemon(Bulbasaur);
      expect(pokedex.getPokedex()).to.be.eql([Charmander, Squirtle, Bulbasaur]);
    });
  });

  describe('Prueba clase Combat', () => {
    const Charmander = new Pokemon('Charmander', 8.5, 60, 'fuego', [52, 43, 65, 39]);
    const Squirtle = new Pokemon('Squirtle', 9, 50, 'agua', [44, 65, 43, 44]);
    const combat = new Combat(Charmander, Squirtle);
    it('Métodos de la clase Combat', () => {
      expect(combat.start()).to.be.eql('El pokemon Squirtle ha sido vencedor');
    });
  });
});