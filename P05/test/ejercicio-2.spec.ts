import 'mocha';
import { expect } from 'chai';
import { Grid } from '../src/ejercicio-2/Grid';
import { Color } from '../src/ejercicio-2/Connect4'
import { Connect4 } from '../src/ejercicio-2/Connect4';

describe('Ejercicio 2 - Conecta 4', () => {
  const grid = new Grid(6, 7, Color.Empty);
  const connect4 = new Connect4(6, 7);
  describe('Prueba clase Grid', () => {
    it('Prueba métodos y atributos publicos', () => {
      expect(grid.rows).to.be.eql(6);
      expect(grid.columns).to.be.eql(7);
      expect(grid.data).to.be.eql([
                                  ["", "", "", "", "", "", ""],
                                  ["", "", "", "", "", "", ""],
                                  ["", "", "", "", "", "", ""],
                                  ["", "", "", "", "", "", ""],
                                  ["", "", "", "", "", "", ""],
                                  ["", "", "", "", "", "", ""]
                                  ]);
    });
  });

  describe('Prueba clase Connect 4', () => {
    it('Métodos de la clase Connect4', () => {
      expect(connect4.print()).to.be.eql('_______\n_______\n_______\n_______\n_______\n_______\n')
    });
    it('Juego Connect 4', async () => {
      var winner = await Promise.resolve(connect4.start());
      expect(winner).to.be.eql('El ganador es el color Rojo');
    });
  });
});