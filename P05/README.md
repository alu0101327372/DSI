# Práctica 5 - Objetos, clases e interfaces
En esta práctica se han resuelto una serie de ejercicios de programación que nos permitirán conocer más en profundidad los objetos, clases e interfaces del lenguaje TypeScript.

## Estructura del proyecto
Para generar la estructura incial del proyecto nos dirigimos al directorio donde vamos a empezar y ejecutamos `npm init --yes`.
```
.
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
### Ejercicio 1 - Pokedex
Se ha creado una clase [Pokedex](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101327372/blob/master/src/ejercicio-1/Pokedex.ts) donde se almacene la información relacionada con distintos Pokemons. Para cada [Pokemon](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101327372/blob/master/src/ejercicio-1/Pokemon.ts), se ha creado otra clase para almacenar los siguientes elementos de información:
- Nombre del Pokemon
- Peso y altura
- Tipo
- Estadísticas básicas: ataque, defensa, velocidad, daño máximo (HP).

Por último, se ha diseñado una clase [Combat](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101327372/blob/master/src/ejercicio-1/Combat.ts) que simule el combate entre dos Pokemons.

#### Detalles de Implementación - Pokemon
El **constructor** de la clase Pokemon inicializa todos los atributos privados, el nombre, el peso, la altura, el tipo que es tipo de dato tiposPokemon que tiene todos los tipos de un Pokemon posibles y las estadísticas que es un objeto que tiene los atributos ataque, defensa, velocidad y daño máximo (HP).
```
constructor(private nombre: string, private peso: number, private altura: number, private tipo: tiposPokemon, estadisticas: [number, number, number, number]) {
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
    this.tipo = tipo;

    this.estadisticas.ataque = estadisticas[0];
    this.estadisticas.defensa = estadisticas[1];
    this.estadisticas.velocidad = estadisticas[2];
    this.estadisticas.hp = estadisticas[3];
};
```

Se han creado métodos getters de todos los atributos de la clase Pokemon. Y también se ha creado un método `print()`, que imprime por pantalla los datos del pokemon y los devuelve en forma de string.
```
public print(): string {
  return `Pokemon llamado ${this.nombre}\n` +
    `Peso: ${this.peso}\n` +
    `Tipo: ${this.tipo}\n` +
    `Altura: ${this.altura}\n` +
    `Ataque: ${this.estadisticas.ataque}\n` +
    `Defensa: ${this.estadisticas.defensa}\n` +
    `Velocidad: ${this.estadisticas.velocidad}\n`+
    `HP: ${this.estadisticas.hp}\n`;
};
```

#### Detalles de Implementación - Pokedex
El **constructor** de la clase Pokedex inicializa el atributo pokedex, un array de Pokemons que se pasa por parámetro.
```
constructor(private pokedex: Pokemon[]) {
  this.pokedex = pokedex;
};
```

Se ha creado un método públicos para **añadir** un pokemon a la pokedex. Este método recibe un pokemon como parámetro y se mete en el array de Pokemons que representa la pokedex, usando el método `push()`.
```
public setPokemon(pokemon: Pokemon) {
  this.pokedex.push(pokemon);
}
```

Finalmente se tiene un método, que **imprime por pantalla** los datos del conjunto de pokemons que componen la pokedex. Este método itera sobre cada elemento de la pokedex y llama al método `print()`de la clase Pokemon.
```
public print(): void {
  this.pokedex.map((element: Pokemon) => {
    element.print();
  });
}
```

#### Detalles de Implementación - Combat
EL **constructor** de la clase inicializa los dos atributos que son dos objetos de tipo Pokemon.
```
constructor(private pokemonA: Pokemon, private pokemonB: Pokemon) {
  this.pokemonA = pokemonA;
  this.pokemonB = pokemonB;
};
```

Se ha creado un método privado **combate** que reciba como parámetro el tipo de Pokemon que tiene, el tipo de Pokemon de su oponente, su capacidad de ataque y la capacidad de defensa de su oponente. La función devolverá como resultado el daño causado. Los ataques pueden ser super efectivos, neutrales o no muy efectivos. Esto depende del tipo de Pokemons que estén combatiendo.

- Super efectivo = x2 de daño
- Neutral = x1 de daño
- No muy efectivo = x0.5 de daño

Para el cálculo de la efectividad se utilizan varios condicionales, que se resumen en el establecimiento de estos emparajamientos:
- fuego > hierba
- fuego < agua
- fuego = electrico
- fuego = fuego

***

- agua < hierba
- agua = agua
- agua < electrico
- agua > fuego

***

- hierba = hierba
- hierba > agua
- hierba = electrico
- hierba < fuego

***

- electrico = hierba
- electrico > agua
- electrico = electrico
- electrico = fuego

Finalmente, se devuelve el daño que es calculado de la siguiente forma:
```
return 50 * (ataque / defensa) * efectividad;
```

La simulación del comabate se realiza con el método start(), se realizan ataques entre los contrincantes hasta que el daño sufrido por uno de ellos sea igual o superior a su HP. Luego Se considera que el primero de los contrincantes que recibe un objeto de la clase Combat será siempre el primero en realizar un ataque. El método muestra por pantalla la evolución del combate. Esto es, después de cada ataque se debe mostrar el estado de HP de cada contrincante. Para ello, se realiza un bucle while() mientras el daño máximo sea mayor a 0, y se aplica el ataque en cada iteración.
```
public start(): string {
  let turno: boolean = true;
  let dano: number = 0;
  let resultado: string = '';

  console.log(`${this.pokemonA.getNombre()} vs ${this.pokemonB.getNombre()}`);
  while ((this.pokemonA.getHP() >= 0) && (this.pokemonB.getHP() >= 0)) {
    if (turno) {
      dano = this.combate(this.pokemonA.getTipo(), this.pokemonB.getTipo(), this.pokemonA.getAtaque(), this.pokemonB.getDefensa());
      this.pokemonB.setDano(dano);
      turno = !turno;
    } else {
      dano = this.combate(this.pokemonB.getTipo(), this.pokemonA.getTipo(), this.pokemonB.getAtaque(), this.pokemonA.getDefensa());
      this.pokemonA.setDano(dano);
      turno = !turno;
    }
    console.log(`El pokemon A tiene un HP: ${this.pokemonA.getHP()} y ` +
    `El pokemon B tiene un HP: ${this.pokemonB.getHP()}`);
  }
  if (this.pokemonA.getHP() <= 0) {
    resultado = `El pokemon ${this.pokemonB.getNombre()} ha sido vencedor`;
  } else {
    resultado = `El pokemon ${this.pokemonA.getNombre()} ha sido vencedor`;
  }
  return resultado;
};
```

#### Prueba
Para probar este ejercicio, describimos tres conjuntos de pruebas:
1. Prueba de la clase pokemon, en el que probamos el funcionamiento de todos los atributos.
    ```
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
    ```

2. Prueba de la clase Pokedex, en el que probamos el funcionamiento de todos los atributos. Para ello, creamos varios Pokemons y los metemos en la pokedex
    ```
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
    ```

3. Prueba de la clase Combat, en el que probamos el funcionamiento de la simulación. Para ello, creamos varios Pokemons.
    ```
    describe('Prueba clase Combat', () => {
      const Charmander = new Pokemon('Charmander', 8.5, 60, 'fuego', [52, 43, 65, 39]);
      const Squirtle = new Pokemon('Squirtle', 9, 50, 'agua', [44, 65, 43, 44]);
      const combat = new Combat(Charmander, Squirtle);
      it('Métodos de la clase Combat', () => {
        expect(combat.start()).to.be.eql('El pokemon Squirtle ha sido vencedor');
      });
    });
    ```

### Ejercicio 2 - Conecta 4
Se ha creado una clase [Grid](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101327372/blob/master/src/ejercicio-2/Grid.ts) que representa el tablero, y una clase [Connect4](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101327372/blob/master/src/ejercicio-2/Connect4.ts) que realiza la simulación del juego.

#### Detalles de Implementación - Grid
El **constructor** de la clase Grid inicializa un tablero que es un array de dos dimensiones, que recibe las dimensiones por parámetro, y el valor inicial de cada celda.
```
constructor(public rows: number, public columns: number, private initialValues: T) {
  this.data = new Array<T[]>(rows);
  for (let row = 0; row < rows; row++) {
    this.data[row] = new Array<T>(columns);
    for (let column = 0; column < columns; column++) {
      this.data[row][column] = this.initialValues;
    }
  }
}
```

Se define también un método que **limpia** el tablero, para poder realiar varias simulaciones en la misma ejecución.
```
public clear() {
  this.data = new Array<T[]>(this.rows);
  for (let row = 0; row < this.rows; row++) {
    this.data[row] = new Array<T>(this.columns);
    for (let column = 0; column < this.columns; column++) {
      this.data[row][column] = this.initialValues;
    }
  }
}
```

#### Detalles de Implementación - Connect4
Esta clase utiliza un enum que defie¡ne los estados de cada una de las celdas según las fichas que hayan introducido los dos jugadores:
```
export enum Color {
  Red = 'Rojo',
  Yellow = 'Amarillo',
  Empty = '',
}
```

El **constructor** de la clase Connect4 inicializa un objeto Grid de tipo Color mediante el uso de plantillas, esto nos permite que cada celda sea de tipo Color. El atributo turnColor define el jugador que tiene el turno y el atributo winner define el ganador.
```
constructor(rows: number, columns: number) {
  this.grid = new Grid<Color>(rows, columns, Color.Empty);
  this.turnColor = Color.Red;
  this.winner = Color.Empty;
}
```

Se define un método que cambia el turno del jugador en cada tirada, este métdo recibe el tablero por parámetro, y comprueba si hay un ganador.
```
private nextTurn(grid?: Grid<Color>): void {
  if (this.turnColor === Color.Red) {
    this.turnColor = Color.Yellow;
  } else {
    this.turnColor = Color.Red;
  }

  if (grid !== undefined) {
    this.grid = grid;
  }

  this.winner = this.checkWin(this.grid);
}
```

Para realizar una tirada se ha definido el método `dropChip()`que recibe como parámetro la columna donde se quiere poner la ficha y si se ha podido añadir cambia el turno.
```
private dropChip(column: number): void {
  if (this.setLastEmptyRow(column, this.turnColor)) {
    this.nextTurn();
  }
}
```

Para comprobar si se puede añadir o no una ficha se ha definido el método `setLastEmptyRow()` que recibe una número de columna y el turno del jugador.
1. Comprueba que la columna esta dentro de los límites del tablero.
    ```
    if (column > this.grid.columns - 1 || column < 0) {
      throw "Column is out of bounds!";
    }
    ```

2. Recorre el tablero, y si la columna está llena devuelve false, en caso contrario cambia la celda de color y devuelve true.
    ```
    for (let row = 0; row < this.grid.rows; row++) {
      if (this.grid.data[row][column] !== Color.Empty) {
        if (row === 0) return false;

        this.grid.data[row - 1][column] = color;
        return true;
      }
    }
    ```

El método start() realiza la simulación, esta simulación itera siempre que no haya un ganador. Y pide por pantalla la columna de la ficha que se quiere introducir, esto se ha resuleto utilizando la librería [scanf](https://www.npmjs.com/package/scanf), una vez recibido se llama a `dropChip()` que añade la ficha si es posible y se imprime el tablero con el método `print()`. Finalmente, se devuelve el ganador.
```
public start(): string {
  this.grid.clear();
  this.turnColor = Color.Red;
  this.winner = Color.Empty;

  while (this.checkWin(this.grid) === Color.Empty) {
    console.log('Introduce una ficha');
    var ficha = scanf('%d');
    this.dropChip(ficha);
    console.log(this.print());
  }
  return 'El ganador es el color ' + this.winner;
}
```

Pero como se comprueba si existe un ganador, para ello se ha creado un método `checkWin()`. que recorre todas las posibles combinaciones del tablero, es decir, horizontal, vertical y todas las posibles diagonales.

Todas estas comprobaciones se hacen de la misma manera, pero difieren en donde se itera sobre el tablero. La puesta común es que se generan dos variables, consecutives y currentColor, la primera guarda el numero de fichas del mismo color que hay consecutivas y el segundo guarda el color de esas fichas. En cada iteración del bucle, se realiza un switch que devuelve el color si se consiguen cuatro consecutivos:
```
switch (grid.data[row][column]) {
  case Color.Empty:
    consecutives = 0;
    currentColor = Color.Empty;
    break;

  case currentColor:
    consecutives++;
    if (consecutives === 4) {
      return currentColor;
    }
    break;

  default:
    consecutives = 1;
    currentColor = grid.data[row][column];
}
```

#### Prueba
Para probar este ejercicio, describimos dos conjuntos de pruebas, para ello se crean dos variables un objeto de la clase Grid y otro de la clase Connect4:
```
const grid = new Grid(6, 7, Color.Empty);
const connect4 = new Connect4(6, 7);
```

1. Prueba de la clase Grid, en el que se hacen pruebas sobre los métodos y atributos públicos.
```
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
```

2. Prueba de la clase Connect4, que se hacen pruebas sobre los métodos y atributos públicos.
```
describe('Prueba clase Connect 4', () => {
  it('Métodos de la clase Connect4', () => {
    expect(connect4.print()).to.be.eql('_______\n_______\n_______\n_______\n_______\n_______\n')
  });
  it('Juego Connect 4', async () => {
    var winner = await Promise.resolve(connect4.start());
    expect(winner).to.be.eql('El ganador es el color Rojo');
  });
});
```

## Documentación
Para generar la documentación utilizaremos la API TypeDoc, este framework convierte los comentarios del código fuente de TypeScript en documentación HTML procesada o en un modelo JSON. Es extensible y admite una variedad de configuraciones. Disponible como módulo CLI o de Node.js. Para instalarlo, ejecutamos `npm install --save-dev typedoc`. Y añadir al fichero [package.json](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101327372) la siguiente línea de código:
```
"scripts": {
  "doc": "typedoc"
},
```

Ahora para generar la documentación sólo tenemos que ejecutar `npm run doc`. Y se guardará en el directorio [docs](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101327372/tree/master/docs).

## Coveralls
Coveralls es un servicio web que permite a los usuarios realizar un seguimiento de la cobertura de código de su aplicación a lo largo del tiempo para optimizar la eficacia de sus pruebas unitarias.

Coveralls trabaja con NYC que es un paquete npm para obtener estadísticas sobre la cobertura de la prueba trabajando mano a mano con Mocha y la configuración es muy fácil. Mi ejemplo es configurar NYC para leer los resultados de Mocha y muestra el % de cobertura.

Para su instalación ejecutamos `npm install --save-dev coveralls nyc`. Luego debemos configurar el archivo `package.json` y añadir la siguiente línea en el apartado de scripts:
```
"coverage": "nyc npm test && nyc report --reporter=text-lcov | coveralls && rm -rf .nyc_output"
```

Una vez hecho esto debemos crear un fichero llamado `.coveralls.yml` que contendra el enlace a la web de coveralls donde podremos ver un despliegue de la cobertura.

Ahora solo debemos ejecutar `npm run coverage` para generar el informe de cobertura.

## Estado de Coveralls
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101327372/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101327372?branch=master)
