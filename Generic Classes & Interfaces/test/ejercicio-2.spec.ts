import 'mocha';
import { expect } from 'chai';
import { DocumentalCollection } from "../src/ejercicio-2/DocumentalCollection";
import { SeriesCollection } from "../src/ejercicio-2/SeriesCollection";
import { PeliculaCollection } from "../src/ejercicio-2/PeliculaCollection";
import { Pelicula } from "../src/ejercicio-2/Pelicula";
import { Serie } from "../src/ejercicio-2/Serie";
import { Documental } from "../src/ejercicio-2/Documental";

describe('Ejercicio 2 - DSIflix', () => {
  describe('Prueba de la clase Documental', () => {
    let doc = new Documental('Jordan', 2019, 1.20);
    it('Métodos de la clase Documental', () => {
      expect(doc.getName()).to.be.eql('Jordan');
      expect(doc.getYear()).to.be.eql(2019);
      expect(doc.getDuration()).to.be.eql(1.20);
    });
  });

  describe('Prueba de la clase Serie', () => {
    let serie = new Serie('Stranger Things', 2019);
    it('Métodos de la clase Serie', () => {
      expect(serie.getName()).to.be.eql('Stranger Things');
      expect(serie.getYear()).to.be.eql(2019);
    });
  });

  describe('Prueba de la clase Pelicula', () => {
    let peli = new Pelicula('Sonic', 2022, 'Spielberg');
    it('Métodos de la clase Pelicula', () => {
      expect(peli.getName()).to.be.eql('Sonic');
      expect(peli.getYear()).to.be.eql(2022);
      expect(peli.getDirector()).to.be.eql('Spielberg');
    });
  });

  describe('Prueba de la clase DocumentalCollection', () => {
    let doc = new Documental('Jordan', 2019, 1.20);
    let doc1 = new Documental('Pepe', 2000, 1.20);
    let doc2 = new Documental('Michael', 2000, 1.20);
    let docCol = new DocumentalCollection([doc, doc1]);
    it('Métodos de la clase DocumentalCollection', () => {
      expect(docCol.searchBy('Jordan')).to.be.eql([doc]);
      docCol.addItem(doc2);
      expect(docCol.searchBy(2000)).to.be.eql([doc1, doc2]);
      expect(docCol.getNumberOfItems()).to.be.eql(3);
    });
  });

  describe('Prueba de la clase PeliculaCollection', () => {
    let peli = new Pelicula('Sonic', 2022, 'Spielberg');
    let peli1 = new Pelicula('Indiana Jons', 2010, 'Almodovar');
    let peli2 = new Pelicula('Sonic', 2022, 'Spielberg');
    let peliCol = new PeliculaCollection([peli, peli1]);
    it('Métodos de la clase PeliculaCollection', () => {
      expect(peliCol.searchBy('Sonic')).to.be.eql([peli]);
      peliCol.addItem(peli2);
      expect(peliCol.searchBy(2022)).to.be.eql([peli, peli2]);
      expect(peliCol.getNumberOfItems()).to.be.eql(3);
    });
  });

  describe('Prueba de la clase SeriesCollection', () => {
    let serie = new Serie('The Walking Dead', 2010);
    let serie1 = new Serie('Stranger Things', 2019);
    let serie2 = new Serie('RiverDale', 2019);
    let serieCol = new SeriesCollection([serie, serie1]);
    it('Métodos de la clase SeriesCollection', () => {
      expect(serieCol.searchBy('The Walking Dead')).to.be.eql([serie]);
      serieCol.addItem(serie2);
      expect(serieCol.searchBy(2019)).to.be.eql([serie1, serie2]);
      expect(serieCol.getNumberOfItems()).to.be.eql(3);
    });
  });
});