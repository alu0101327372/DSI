# Práctica 6 - Clases e interfaces genéricas. Principios SOLID

En esta práctica se han resuelto una serie de ejercicios de programación que nos han permitido conocer más en profundidad las clases e interfaces genéricas del lenguaje TypeScript. Además, también se utilizan los principios SOLID de diseño orientado a objetos.

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372?branch=master)

## Estructura del proyecto

Para generar la estructura incial del proyecto nos dirigimos al directorio donde vamos a empezar y ejecutamos `npm init --yes`.

```bash
.
├── .coveralls.yml
├── .eslintrc.json
├── .git
├── .gitignore
├── .mocharc.json
├── README.md
├── _config.yml
├── dist
├── docs
├── node_modules
├── package-lock.json
├── package.json
├── src
├── test
├── tsconfig.json
└── typedoc.json
```

## Ejercicios

### Ejercicio 1 - El combate definitivo

Se ha creado una clase [Fighterex](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-1/Fighterex.ts) donde se almacene la información relacionada con distintos Fighters. Para cada [Fighter](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-1/Fighter.ts), se ha creado otra clase para almacenar los siguientes elementos de información:

- Nombre del Pokemon
- Peso y altura
- Tipo
- Estadísticas básicas: ataque, defensa, velocidad, daño máximo (HP).

Por último, se ha diseñado una clase [Combat](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-1/Combat.ts) que simule el combate entre dos Fighter.

#### Detalles de Implementación - Fighter

Fighter es una clase abstracta que permite hacer que un contendiente pueda luchar. Esta clase se considera la superclase del resto de clases a implementar. Para cada universo, se ha desarrollado la clase que lo represente ([Pokemon](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-1/Pokemon.ts), [Marvel](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-1/Marvel.ts), [DC](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-1/DC.ts), [Star Wars](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-1/StarWars.ts), [Dragon Ball](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-1/DragonBall.ts)).

El **constructor** de la clase abstracta Fighter inicializa todos los atributos protected, el nombre, el peso, la altura, todos los tipos de un Fighter posibles y las estadísticas que es un objeto que tiene los atributos ataque, defensa, velocidad y daño máximo (HP).

```typescript
constructor(
  protected nombre: string,
  protected peso: number,
  protected altura: number,
  protected tipo: string,
  protected stats: [number, number, number, number],
  protected catchpharse: string) {
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
    this.tipo = tipo;
    this.catchpharse = catchpharse;

    this.estadisticas.ataque = stats[0];
    this.estadisticas.defensa = stats[1];
    this.estadisticas.velocidad = stats[2];
    this.estadisticas.hp = stats[3];
  }
```

Se han creado métodos getters de todos los atributos de la clase Fighter. Y también se ha creado un método abstracto `print()`, que imprime por pantalla los datos del Fighter.

```typescript
public abstract print(): string;
```

#### Detalles de Implementación - Fighterex

El **constructor** de la clase Fighterex inicializa el atributo fighterex, un array de Fighters que se pasa por parámetro.

```typescript
constructor(private pokedex: Fighter[]) {
  this.fighterex = fighterex;
};
```

Se ha creado un método públicos para **añadir** un Fighter al fighterex. Este método recibe un Fighter como parámetro y lo mete en el array de Fighters que representa el fighterex, usando el método `push()`.

```typescript
public setFighter(fighter: Fighter) {
  this.fighterex.push(fighter);
}
```

Finalmente se tiene un método, que **imprime por pantalla** los datos del conjunto de pokemons que componen la pokedex. Este método itera sobre cada elemento del fighterex y llama al método `print()`de la clase subclase correspodiente.

```typescript
public print(): void {
  this.fighterex.map((element: Fighter) => {
    element.print();
  });
}
```

#### Detalles de Implementación - Combat

EL **constructor** de la clase inicializa los dos atributos que son dos objetos de tipo Fighter.

```typescript
constructor(private fighterA: Fighter, private fighterB: Fighter) {
  this.fighterA = fighterA;
  this.fighterB = fighterB;
};
```

Se ha creado un método privado **combate** que reciba como parámetro su capacidad de ataque y la capacidad de defensa de su oponente. La función devolverá como resultado el daño causado. Los ataques pueden ser super efectivos, neutrales o no muy efectivos. Esto depende del tipo de Fighter que estén combatiendo.

- Super efectivo = x2 de daño
- Neutral = x1 de daño
- No muy efectivo = x0.5 de daño

Finalmente, se devuelve el daño que es calculado de la siguiente forma:

```typescript
return 50 * (ataque / defensa) * efectividad;
```

La simulación del comabate se realiza con el método start(), se realizan ataques entre los contrincantes hasta que el daño sufrido por uno de ellos sea igual o superior a su HP. Luego, se considera que el primero de los contrincantes que recibe un objeto de la clase Combat será siempre el primero en realizar un ataque. El método muestra por pantalla la evolución del combate. Esto es, después de cada ataque se debe mostrar el estado de HP de cada contrincante. Para ello, se realiza un bucle while() mientras el daño máximo sea mayor a 0, y se aplica el ataque en cada iteración.

```typescript
public start(): string {
  let turno: boolean = true;
  let dano: number = 0;
  let resultado: string = '';

  console.log(`${this.fighterA.getNombre()} vs ${this.fighterB.getNombre()}`);
  while ((this.fighterA.getHP() >= 0) && (this.fighterB.getHP() >= 0)) {
    if (turno) {
      dano = this.combate(this.fighterA.getAtaque(), this.fighterB.getDefensa());
      this.fighterB.setDano(dano);
      turno = !turno;
    } else {
      dano = this.combate(this.fighterB.getAtaque(), this.fighterA.getDefensa());
      this.fighterA.setDano(dano);
      turno = !turno;
    }
    console.log(`${this.fighterA.getNombre()} ... ${this.fighterA.getCatchPhrase()} tiene un HP: ${this.fighterA.getHP()} y ` +
    `${this.fighterB.getNombre()} ... ${this.fighterB.getCatchPhrase()} tiene un HP: ${this.fighterB.getHP()}`);
  }
  if (this.fighterA.getHP() <= 0) {
    resultado = `El fighter ${this.fighterB.getNombre()} ha sido vencedor`;
  } else {
    resultado = `El fighter ${this.fighterA.getNombre()} ha sido vencedor`;
  }
  return resultado;
};
```

#### Prueba - Ejercicio 1

Para probar este ejercicio, describimos siete conjuntos de pruebas:

1. Las cinco primeras pruebas se dedican a probar el funcionamiento de las distintas subclases, es decir, de los distintos Universos creados. Marvel, DC, StarWars, DragonBall, Pokemon.

    ```typescript
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
    ```

2. Prueba de la clase Fighterex, en el que probamos el funcionamiento de todos los atributos. Para ello, creamos varios Fighters y los metemos en el fighterex.

    ```typescript
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
    ```

3. Prueba de la clase Combat, en el que probamos el funcionamiento de la simulación. Para ello, creamos varios Fighters.

    ```typescript
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
    ```

### Ejercicio 2 - DSIflix

Se ha diseñado un modelo de datos de una plataforma de vídeo en streaming. A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales.

#### Detalles de implementación

Lo primero es crear una interfaz genérica, [Streamable](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-2/Streamable.ts), que define las funciones comunes para las distintas clases que representan vídeos en streaming. Se define un atributo de tipo genérico, T.

La clase abstacta genérica [BasicStreamableCollection](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-2/BasicStreamableCollection.ts) define los atributos y funciones comunes para las distintas clases que representen colecciones de series, peliculas y documentales, implementa la interfaz Streamable. Define un tipo genérico que será un vector.

Las subclases [PeliculaCollection](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-2/PeliculaCollection.ts), [DocumentalCollection](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-2/DocumentalCollection.ts), [SeriesCollection](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-2/SeriesCollection.ts) implementan la clase abstacta genérica BasicStreamableCollection y respectivamente implementan colecciones de documentos, peliculas y series, además de que definen para cada clase su propio atributo que definen vectores de las clases Documental, Película y Serie respectivamente. Implementan cada una el método de búsqueda que permite obtener listados en función de diferentes términos de búsqueda: por año o por nombre.

```typescript
public getItems(searchTerm: string | number) {
  if (typeof searchTerm === 'number') {
    return this.items.filter((item) => item.getYear() === searchTerm);
  } else {
    return this.items.filter((item) => (item.getName() === searchTerm) || (item.getDirector() === searchTerm));
  }
}
```

#### Prueba - Ejercicio 2

Para probar este ejercicio, describimos seis conjuntos de pruebas:

1. Las tres primeras pruebas se dedican a probar el funcionamiento de los distintos vídeos de la plataforma. Serie, Pelicula y Documental.

    ```typescript
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
    ```

2. Las tres últimas pruebas se dedican a probar el funcionamiento de los distintos colecciones de la plataforma. SerieCollection, PeliculaCollection y DocumentalCollection.

    ```typescript
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
    ```

### Ejercicio 3 - El cifrado indescifrable

Se ha definido un tipo de cifrado donde un texto de entrada se encripta utilizando un conjunto de Cifrados César con desplazamientos variables basados en las letras de una palabra clave. El desplazamiento se obtiene aplicando Cifrado César a una letra del mensaje utilizando como desplazamiento la posición de la letra correspondiente de la clave dentro del alfabeto.

Para favorecer los **Principios SOLID**, en concreto, el **Liskov substitution principle principle** se ha definido una clase abstracta [Cifrado](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-3/Cifrado.ts), así las subclases, [Encode](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-3/Encode.ts) y [Decode](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-3/Decode.ts),  pueden ser responsables de una única tarea. Realizar la definición del método abstracto `cyper()`.

#### Encode

Para realizar el cifrado iteramos sobre el texto a cifrar y buscamos el índice de cada caracter en el alfabeto, si lo encuentra le suma el desplazamiento y añade el caracter al resultado.

```typescript
public cypher(text: string, key: string): string {
  let encrypt: string = '';
  this.shiftKey(key);
  for (let i = 0; i < text.length; i++) {
    encrypt += this.alfabeto[(this.alfabeto.indexOf(text[i]) + this.shift[i % this.shift.length]) % this.alfabeto.length];
  }
  return encrypt;
}
```

#### Decode

Para realizar el descifrado iteramos sobre el texto cifrado y buscamos el índice de cada caracter en el alfabeto, si lo encuentra le resta el desplazamiento y añade el caracter al resultado.

```typescript
public cypher(cypher: string, key: string): string {
  let decrypt: string = '';
  this.shiftKey(key);
  for (let i = 0; i < cypher.length; i++) {
    decrypt += this.alfabeto[(this.alfabeto.indexOf(cypher[i]) - this.shift[i % this.shift.length]) % this.alfabeto.length];
  }
  return decrypt;
}
```

Finalmente, se define una clase [Run](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/src/ejercicio-3/Run.ts), siguiendo el Single responsibility principle, para que cada clase sea responsable de una única tarea. Y esta se encarga de realizar la ejecución del cifrado o descifrado.

```typescript
public run(): string {
  console.log("Introduce el alfabeto");
  let alfabeto: string = scanf("%s");

  console.log("Quiere cifrar o descrifrar");
  let cipher = scanf("%s");

  if (cipher === 'cifrar') {
    let cifrado = new Encode(alfabeto.toUpperCase())
    console.log("Introduce la clave");
    let clave = scanf("%s");

    console.log("Introduce el texto");
    let texto = scanf("%s");

    return cifrado.cypher(texto.toUpperCase(), clave.toUpperCase());
  } else if (cipher === 'descifrar') {
    let cifrado = new Decode(alfabeto.toUpperCase())
    console.log("Introduce la clave");
    let clave = scanf("%s");

    console.log("Introduce el texto cifrado");
    let texto = scanf("%s");

    return cifrado.cypher(texto.toUpperCase(), clave.toUpperCase());
  } else {
    return "Opcion no soportada";
  }
}
```

#### Prueba - Ejercicio 3

Para probar este ejercicio, describimos dos conjuntos de pruebas:

1. La primera prueba se dedican a probar el funcionamiento de la clase Encode.

    ```typescript
    describe('Prueba clase Encode', () => {
      const encode = new Encode('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
      it('Prueba métodos y atributos publicos', () => {
        expect(encode.cypher('HOLAESTOESUNAPRUEBA', 'CLAVE')).to.be.eql('KAMWJVFPAXXYBMWXPCW');
      });
    });
    ```

2. La primera prueba se dedican a probar el funcionamiento de la clase Decode.

    ```typescript
    describe('Prueba clase Decode', () => {
      const decode = new Decode('0123456789');
      it('Métodos de la clase Connect4', () => {
        expect(decode.cypher('3456', '10')).to.be.eql('1335')
      });
    });
    ```

## Documentación

Para generar la documentación utilizaremos la API TypeDoc, este framework convierte los comentarios del código fuente de TypeScript en documentación HTML procesada o en un modelo JSON. Es extensible y admite una variedad de configuraciones. Disponible como módulo CLI o de Node.js. Para instalarlo, ejecutamos `npm install --save-dev typedoc`. Y añadir al fichero [package.json](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/blob/master/package.json) la siguiente línea de código:

```json
"scripts": {
  "doc": "typedoc"
},
```

Ahora para generar la documentación sólo tenemos que ejecutar `npm run doc`. Y se guardará en el directorio [docs](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/tree/master/docs).

## Coveralls

Coveralls es un servicio web que permite a los usuarios realizar un seguimiento de la cobertura de código de su aplicación a lo largo del tiempo para optimizar la eficacia de sus pruebas unitarias.

Coveralls trabaja con NYC que es un paquete npm para obtener estadísticas sobre la cobertura de la prueba trabajando mano a mano con Mocha y la configuración es muy fácil. Mi ejemplo es configurar NYC para leer los resultados de Mocha y muestra el % de cobertura.

Para su instalación ejecutamos `npm install --save-dev coveralls nyc`. Luego debemos configurar el archivo `package.json` y añadir la siguiente línea en el apartado de scripts:

```json
"coverage": "nyc npm test && nyc report --reporter=text-lcov | coveralls && rm -rf .nyc_output"
```

Una vez hecho esto debemos crear un fichero llamado `.coveralls.yml` que contendra el enlace a la web de coveralls donde podremos ver un despliegue de la cobertura.

Ahora solo debemos ejecutar `npm run coverage` para generar el informe de cobertura.