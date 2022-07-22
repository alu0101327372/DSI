import 'mocha';
import { expect } from 'chai';
import { DC } from "../src/ejercicio-1/DC";
import { Marvel } from "../src/ejercicio-1/Marvel";
import { DragonBall } from "../src/ejercicio-1/DragonBall";
import { Pokemon } from "../src/ejercicio-1/Pokemon";
import { StarWars } from "../src/ejercicio-1/StarWars";
import { Fighterex } from "../src/ejercicio-1/Fighterex"
import { Combat } from "../src/ejercicio-1/Combat"

describe('Ejercicio 1 - El combate definitivo', () => {
  describe('Prueba clase Pokemon', () => {
    const Charmander = new Pokemon('Charmander', 8.5, 60, "fuego", [52, 43, 65, 39], 'Charm');
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
      expect(Charmander.getCatchPhrase()).to.be.eql('Charm');
    });
  });

  describe('Prueba clase Marvel', () => {
    const IronMan = new Marvel('Iron Man', 200, 360, "Aire", [523, 431, 652, 391], 'I love u 30000');
    it('Métodos de la clase Marvel', () => {
      expect(IronMan.getNombre()).to.be.eql('Iron Man');
      expect(IronMan.getPeso()).to.be.eql(200);
      expect(IronMan.getAltura()).to.be.eql(360);
      expect(IronMan.getTipo()).to.be.eql('Aire');
      expect(IronMan.getAtaque()).to.be.eql(523);
      expect(IronMan.getDefensa()).to.be.eql(431);
      expect(IronMan.getHP()).to.be.eql(391);
      IronMan.setDano(10);
      expect(IronMan.getHP()).to.be.eql(381);
      expect(IronMan.getCatchPhrase()).to.be.eql('I love u 30000');
    });
  });

  describe('Prueba clase Star Wars', () => {
    const Anakin = new StarWars('Anakin', 805, 360, "oscuro", [152, 243, 365, 439], 'I am your father');
    it('Métodos de la clase Star Wars', () => {
      expect(Anakin.getNombre()).to.be.eql('Anakin');
      expect(Anakin.getPeso()).to.be.eql(805);
      expect(Anakin.getAltura()).to.be.eql(360);
      expect(Anakin.getTipo()).to.be.eql('oscuro');
      expect(Anakin.getAtaque()).to.be.eql(152);
      expect(Anakin.getDefensa()).to.be.eql(243);
      expect(Anakin.getHP()).to.be.eql(439);
      Anakin.setDano(10);
      expect(Anakin.getHP()).to.be.eql(429);
      expect(Anakin.getCatchPhrase()).to.be.eql('I am your father');
    });
  });

  describe('Prueba clase DC', () => {
    const BatMan = new DC('BatMan', 85, 600, "noche", [520, 403, 605, 309], 'Bat');
    it('Métodos de la clase DC', () => {
      expect(BatMan.getNombre()).to.be.eql('BatMan');
      expect(BatMan.getPeso()).to.be.eql(85);
      expect(BatMan.getAltura()).to.be.eql(600);
      expect(BatMan.getTipo()).to.be.eql('noche');
      expect(BatMan.getAtaque()).to.be.eql(520);
      expect(BatMan.getDefensa()).to.be.eql(403);
      expect(BatMan.getHP()).to.be.eql(309);
      BatMan.setDano(10);
      expect(BatMan.getHP()).to.be.eql(299);
      expect(BatMan.getCatchPhrase()).to.be.eql('Bat');
    });
  });

  describe('Prueba clase Dragon Ball', () => {
    const Goku = new DragonBall('Goku', 1000, 1600, "Saiyan", [1520, 1403, 1605, 1309], 'Onda vital');
    it('Métodos de la clase DragonBall', () => {
      expect(Goku.getNombre()).to.be.eql('Goku');
      expect(Goku.getPeso()).to.be.eql(1000);
      expect(Goku.getAltura()).to.be.eql(1600);
      expect(Goku.getTipo()).to.be.eql('Saiyan');
      expect(Goku.getAtaque()).to.be.eql(1520);
      expect(Goku.getDefensa()).to.be.eql(1403);
      expect(Goku.getHP()).to.be.eql(1309);
      Goku.setDano(10);
      expect(Goku.getHP()).to.be.eql(1299);
      expect(Goku.getCatchPhrase()).to.be.eql('Onda vital');
    });
  });

  describe('Prueba clase Fighterex', () => {
    const Charmander = new Pokemon('Charmander', 8.5, 60, "fuego", [52, 43, 65, 39], 'Charm');
    const IronMan = new Marvel('Iron Man', 200, 360, "Aire", [523, 431, 652, 391], 'I love u 30000');
    const Anakin = new StarWars('Anakin', 805, 360, "oscuro", [152, 243, 365, 439], 'I am your father');
    const BatMan = new DC('BatMan', 85, 600, "noche", [520, 403, 605, 309], 'Bat');
    const Goku = new DragonBall('Goku', 1000, 1600, "Saiyan", [1520, 1403, 1605, 1309], 'Onda vital');
    const Bulbasaur = new Pokemon('Bulbasaur', 6.9, 70, 'hierba', [49, 49, 45, 45], 'Bulb');
    const fighterex = new Fighterex([Charmander, Goku, IronMan, Anakin, BatMan])
    it('Métodos de la clase Fighterex', () => {
      expect(fighterex.getFighterex()).to.be.eql([Charmander, Goku, IronMan, Anakin, BatMan]);
      fighterex.setFighter(Bulbasaur);
      expect(fighterex.getFighterex()).to.be.eql([Charmander, Goku, IronMan, Anakin, BatMan, Bulbasaur]);
    });
  });

  describe('Prueba clase Combat', () => {
    const Charmander = new Pokemon('Charmander', 8.5, 60, "fuego", [52, 43, 65, 39], 'Charm');
    const IronMan = new Marvel('Iron Man', 200, 360, "Aire", [523, 431, 652, 391], 'I love u 30000');
    const Anakin = new StarWars('Anakin', 805, 360, "oscuro", [152, 243, 365, 439], 'I am your father');
    const Goku = new DragonBall('Goku', 1000, 1600, "Saiyan", [1520, 1403, 1605, 1309], 'Onda vital');

    const combat1 = new Combat(Charmander, Goku);
    const combat2 = new Combat(IronMan, Anakin);
    it('Métodos de la clase Combat', () => {
      expect(combat1.start()).to.be.eql('El fighter Goku ha sido vencedor');
      expect(combat2.start()).to.be.eql('El fighter Iron Man ha sido vencedor');
    });
  });
});